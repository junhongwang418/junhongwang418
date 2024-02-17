import { Spacer } from "@/components/Spacer";
import { VStack } from "@/components/VStack";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/Card";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Blog | Junhong Wang",
  description:
    "I'm Junhong Wang, an LA-based Software Engineer specializing in web, iOS, and desktop app development.",
};

export default async function Blog() {
  const posts = await getSortedPostsData();

  return (
    <VStack className="container max-w-[980px] mx-auto py-24">
      <div className="grid xs:md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <div className="text-neutral-500 text-sm">
                {format(post.date, "MMMM do, yyyy")}
              </div>
              <h2 className="font-bold hover:text-foreground text-foreground/80">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
            </CardHeader>
            <CardContent>
              <div
                className="prose dark:prose-invert prose-sm"
                dangerouslySetInnerHTML={{ __html: post.previewHtml }}
              />
            </CardContent>
            <Spacer />
            <CardFooter>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:text-foreground/80 text-foreground/60 shadow hover:bg-secondary/90 h-9 px-4 py-2 w-full"
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </VStack>
  );
}
