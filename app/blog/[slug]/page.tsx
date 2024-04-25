import { HStack } from "@/components/HStack";
import { VStack } from "@/components/VStack";
import { getPost, getSortedPostsData } from "@/lib/posts";
import matter from "gray-matter";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { format } from "date-fns";

export async function generateStaticParams() {
  const posts = await getSortedPostsData();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

interface PostProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  props: PostProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { params } = props;
  const { slug } = params;

  const post = await getPost(slug);

  if (!post) {
    return {
      title: "404 Not Found",
    };
  }

  return {
    title: post.data.title,
    description: post.description,
  };
}

export default async function Post(props: PostProps) {
  const { params } = props;
  const { slug } = params;

  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <VStack className="container max-w-[980px] mx-auto py-24 space-y-8">
      <div>
        <Link
          className="text-sm hover:text-foreground/80 text-foreground/60"
          href="/blog"
        >
          <HStack className="space-x-1">
            <ArrowLeft size={16} />
            <span>Back to Blog</span>
          </HStack>
        </Link>
      </div>
      <VStack className="border-b pb-4 space-y-3">
        <div className="text-primary/50 text-sm">
          {format(post.data.date, "MMMM do, yyyy")}
        </div>
        <h2 className="text-xl md:text-3xl font-bold">{post.data.title}</h2>
      </VStack>
      <div
        className="prose dark:prose-invert max-w-none prose-img:rounded prose-img:mx-auto"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </VStack>
  );
}
