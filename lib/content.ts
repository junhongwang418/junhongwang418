import fs from "fs";
import path from "path";
import { markdownToHtml } from "./markdown";

const contentDirectory = path.join(process.cwd(), "content");

export async function getMarkdownPage(slug: string) {
  const markdown = fs.readFileSync(path.join(contentDirectory, `${slug}.md`), "utf8");
  return markdownPage(slug, markdown);
}

export async function getStartupMarkdownPage() {
  const markdown = fs.readFileSync(
    path.join(contentDirectory, "stealth-startup.md"),
    "utf8"
  );
  return markdownPage("stealth-startup", markdown, true);
}

export function getStartupProjectSlugs() {
  const markdown = fs.readFileSync(
    path.join(contentDirectory, "stealth-startup.md"),
    "utf8"
  );
  return Array.from(markdown.matchAll(/<a id="([^"]+)"><\/a>/g)).map(
    ([, slug]) => slug
  );
}

async function markdownPage(
  slug: string,
  markdown: string,
  allowRawHtml = false
) {
  const title = extractTitle(markdown);
  const contentHtml = await markdownToHtml(markdown, allowRawHtml);

  return {
    slug,
    title,
    contentHtml,
  };
}

function extractTitle(markdown: string) {
  const firstLine = markdown.split("\n").find((line) => line.startsWith("# "));
  return firstLine ? firstLine.replace(/^#\s+/, "").trim() : "Junhong Wang";
}
