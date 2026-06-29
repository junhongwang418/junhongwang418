import { getMarkdownPage } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AppFolio | Junhong Wang",
  description: "AppFolio employment details for Junhong Wang.",
};

export default async function AppfolioPage() {
  const page = await getMarkdownPage("appfolio");

  return (
    <main className="container max-w-[860px] mx-auto py-12 md:py-16">
      <article
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: page.contentHtml }}
      />
    </main>
  );
}
