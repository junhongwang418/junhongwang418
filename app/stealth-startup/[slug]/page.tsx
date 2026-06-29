import { getStartupProjectSlugs } from "@/lib/content";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return getStartupProjectSlugs().map((slug) => ({ slug }));
}

interface StartupProjectProps {
  params: {
    slug: string;
  };
}

export default function StartupProjectRedirect(props: StartupProjectProps) {
  redirect(`/stealth-startup#${props.params.slug}`);
}
