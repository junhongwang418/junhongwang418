import { getMarkdownPage } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UCLA | Junhong Wang",
  description: "UCLA background for Junhong Wang.",
};

export default async function UclaPage() {
  const page = await getMarkdownPage("ucla");

  return (
    <main className="container max-w-[860px] mx-auto py-12 md:py-16">
      <article
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: page.contentHtml }}
      />
    </main>
  );
}
