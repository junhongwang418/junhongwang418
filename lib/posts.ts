import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import strip from "strip-markdown";
import { remark } from "remark";
import rehypeExternalLinks from "rehype-external-links";
import { fromHtml } from "hast-util-from-html";

const postsDirectory = path.join(process.cwd(), "posts");

const externalLink =
  '<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" style="color: currentcolor; width: 14px; height: 14px;"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>';

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      const preview = extractPreview(matterResult.content);
      const previewHtmlFile = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeExternalLinks, {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
          content: fromHtml(externalLink) as any,
          contentProperties: {
            class: "inline-flex",
          },
        })
        .use(rehypeStringify)
        .process(preview);
      const previewHtml = previewHtmlFile.toString();

      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
        preview,
        previewHtml,
      } as {
        id: string;
        date: string;
        title: string;
        preview: string;
        previewHtml: string;
      };
    })
  );

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPost(slug: string) {
  const fileNames = fs.readdirSync(postsDirectory);
  const fileName = fileNames.find(
    (fileName) => fileName.replace(/\.md$/, "") === slug
  );

  if (!fileName) {
    return null;
  }

  // Remove ".md" from file name to get id
  const id = fileName.replace(/\.md$/, "");

  // Read markdown file as string
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeExternalLinks, {
      target: "_blank",
      rel: ["noopener", "noreferrer"],
      content: fromHtml(externalLink) as any,
      contentProperties: {
        class: "inline-flex",
      },
    })
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const processedContentStripped = await remark()
    .use(strip)
    .process(matterResult.content);

  const preview = extractPreview(processedContentStripped.toString());

  // Combine the data with the id
  return {
    id,
    contentHtml,
    description: preview.replace(/\s+/g, " "),
    ...matterResult,
  };
}

function extractPreview(content: string) {
  const sentences = content.match(
    /(?=[^])(?:\P{Sentence_Terminal}|\p{Sentence_Terminal}(?!['"`\p{Close_Punctuation}\p{Final_Punctuation}\s]))*(?:\p{Sentence_Terminal}+['"`\p{Close_Punctuation}\p{Final_Punctuation}]*|$)/guy
  );

  return sentences ? sentences.slice(0, 2).join("") : "";
}
