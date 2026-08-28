import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { TechnicalStack } from "@/components/TechnicalStack";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { BackToTop } from "@/components/BackToTop";

const title = "Muhammad Ahmad — AI/ML Engineer";
const description =
  "AI/ML Engineer and Data Science student building explainable AI, RAG systems, and full-stack intelligent applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="sr-only">Muhammad Ahmad — AI/ML Engineer</h1>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechnicalStack />
        <Education />
        <Contact />
      </main>
    </>
  );
}
