import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

const ACCENT = "#FF4F00";
const INK = "#1A1A1A";
const GRAY = "#8A8A85";

type NodeDef = { pos: [number, number, number]; accent?: boolean; size: number };

function buildNodes(): NodeDef[] {
  const nodes: NodeDef[] = [];
  const rings = [
    { r: 2.0, count: 6, y: 0.9 },
    { r: 2.6, count: 8, y: -0.2 },
    { r: 2.1, count: 5, y: -1.2 },
  ];
  rings.forEach((ring, ri) => {
    for (let i = 0; i < ring.count; i++) {
      const a = (i / ring.count) * Math.PI * 2 + ri * 0.5;
      nodes.push({
        pos: [Math.cos(a) * ring.r, ring.y + Math.sin(a * 2) * 0.25, Math.sin(a) * ring.r],
        accent: (i + ri) % 4 === 0,
        size: 0.075 + ((i * 7) % 3) * 0.02,
      });
    }
  });
  return nodes;
}

function Core({ reduce }: { reduce: boolean }) {
  const inner = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.LineSegments>(null);

  useFrame((state, delta) => {
    if (reduce) return;
    if (inner.current) {
      inner.current.rotation.y += delta * 0.25;
      inner.current.rotation.x += delta * 0.1;
    }
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.12;
      shell.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.06;
    }
  });

  const shellGeo = useMemo(() => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.35, 1)), []);

  return (
    <group>
      <mesh ref={inner}>
        <icosahedronGeometry args={[0.78, 0]} />
        <meshStandardMaterial color={INK} roughness={0.45} metalness={0.1} flatShading />
      </mesh>
      <mesh scale={1.02}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.55} />
      </mesh>
      <lineSegments ref={shell} geometry={shellGeo}>
        <lineBasicMaterial color={INK} transparent opacity={0.28} />
      </lineSegments>
    </group>
  );
}

function Network({ reduce }: { reduce: boolean }) {
  const nodes = useMemo(buildNodes, []);
  const group = useRef<THREE.Group>(null);
  const pulses = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const lineGeo = useMemo(() => {
    const pts: number[] = [];
    nodes.forEach((n) => {
      pts.push(0, 0, 0, ...n.pos);
    });
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      const b = nodes[(i + 3) % nodes.length];
      pts.push(...a.pos, ...b.pos);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, [nodes]);

  useFrame((state, delta) => {
    if (group.current && !reduce) group.current.rotation.y += delta * 0.08;
    if (pulses.current) {
      const t = state.clock.elapsedTime;
      nodes.forEach((n, i) => {
        const k = reduce ? 0.5 : ((t * 0.28 + i * 0.11) % 1);
        dummy.position.set(n.pos[0] * k, n.pos[1] * k, n.pos[2] * k);
        const s = 0.05 + Math.sin(k * Math.PI) * 0.03;
        dummy.scale.setScalar(s);
        dummy.updateMatrix();
        pulses.current!.setMatrixAt(i, dummy.matrix);
      });
      pulses.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color={GRAY} transparent opacity={0.5} />
      </lineSegments>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <boxGeometry args={[n.size * 1.6, n.size * 1.6, n.size * 1.6]} />
          <meshStandardMaterial
            color={n.accent ? ACCENT : INK}
            roughness={0.5}
            metalness={0.05}
          />
        </mesh>
      ))}
      <instancedMesh ref={pulses} args={[undefined, undefined, nodes.length]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color={ACCENT} />
      </instancedMesh>
    </group>
  );
}

function Particles({ count, reduce }: { count: number; reduce: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 2.2;
      const a = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 4;
      arr[i * 3] = Math.cos(a) * r;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = Math.sin(a) * r;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return g;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current && !reduce) {
      ref.current.rotation.y += delta * 0.03;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.15;
    }
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.04} color={GRAY} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function Parallax({ reduce }: { reduce: boolean }) {
  const { camera, pointer } = useThree();
  useFrame(() => {
    if (reduce) return;
    camera.position.x += (pointer.x * 0.8 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.5 + 0.3 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ThreeAIVisualization() {
  const reduce = !!useReducedMotion();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Canvas
      camera={{ position: [0, 0.3, 7.2], fov: 42 }}
      dpr={[1, isMobile ? 1.3 : 1.8]}
      gl={{ antialias: true, alpha: true }}
      frameloop={reduce ? "demand" : "always"}
      aria-hidden="true"
    >
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} />
      <directionalLight position={[-5, -2, -4]} intensity={0.35} color={ACCENT} />
      <Core reduce={reduce} />
      <Network reduce={reduce} />
      <Particles count={isMobile ? 90 : 200} reduce={reduce} />
      <Parallax reduce={reduce} />
    </Canvas>
  );
}
