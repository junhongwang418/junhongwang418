import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return [
    { slug: "2021-05-01-software-engineer-at-appfolio" },
  ];
}

interface ExperiencePostProps {
  params: {
    slug: string;
  };
}

export default function ExperiencePostRedirect(props: ExperiencePostProps) {
  if (props.params.slug.includes("appfolio")) {
    redirect("/appfolio");
  }

  redirect("/");
}
