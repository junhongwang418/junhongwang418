import { getStartupMarkdownPage } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stealth Startup | Junhong Wang",
  description:
    "Stealth startup employment and project details for Junhong Wang.",
};

export default async function StartupPage() {
  const page = await getStartupMarkdownPage();

  return (
    <main className="container max-w-[860px] mx-auto py-12 md:py-16">
      <article
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: page.contentHtml }}
      />
    </main>
  );
}
