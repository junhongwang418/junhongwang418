import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Junhong Wang",
  description:
    "Junhong Wang is a software engineer working on AI agents, local model runtimes, voice systems, and native product engineering.",
};

export default function Home() {
  return (
    <main className="container max-w-[860px] mx-auto py-12 md:py-16">
      <article className="prose dark:prose-invert max-w-none">
        <h1>Junhong Wang</h1>
        <p>
          Software engineer working on AI agents, local model runtimes, voice
          systems, and native product engineering across macOS, iOS, web, and
          backend systems.
        </p>

        <ol className="not-prose space-y-7">
          {backgroundItems.map((item) => (
            <li key={item.href}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-medium">
                  <Link
                    className="underline underline-offset-4 hover:text-foreground/70"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">{item.period}</p>
              </div>
              <p className="mt-2 max-w-[720px] text-sm leading-6 text-foreground/75">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </article>
    </main>
  );
}

const backgroundItems = [
  {
    title: "Stealth Startup",
    period: "July 2023 - Present",
    href: "/stealth-startup",
    description:
      "Early engineering work across native AI agents, workspace context, voice interaction, and Apple-silicon model runtimes.",
  },
  {
    title: "AppFolio",
    period: "May 2021 - July 2023",
    href: "/appfolio",
    description:
      "Software engineering work on Lisa, AppFolio's AI leasing assistant, plus operator workflows, scheduling logic, integration boundaries, and a revenue management MVP.",
  },
  {
    title: "UCLA",
    period: "September 2018 - March 2021",
    href: "/ucla",
    description:
      "Bachelor of Science in Computer Science, with software internships at the Garrick Institute for the Risk Sciences and AppFolio.",
  },
];
