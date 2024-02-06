import { VStack } from "@/components/VStack";
import { ArrowRight, ChevronRight } from "lucide-react";
import { HStack } from "./HStack";
import Link from "next/link";

interface ExperienceRowProps {
  jobTitle: string;
  employer: string;
  period: string;
  description: string;
  employerHref: string;
  postSlug: string;
}

export const ExperienceRow = (props: ExperienceRowProps) => {
  const { jobTitle, employer, period, description, employerHref, postSlug } =
    props;

  return (
    <VStack className="space-y-1">
      <VStack>
        <div className="font-bold text-lg dark:text-neutral-200 text-neutral-800">
          {jobTitle}
        </div>
        <div>
          <Link
            className="hover:text-foreground/80 text-foreground/60 font-bold hover:underline"
            href={employerHref}
            target="_blank"
          >
            @{employer}
          </Link>
        </div>
        <div className="text-sm text-neutral-500">{period}</div>
      </VStack>
      <div className="text-neutral-500">{description}</div>
      <Link href={`/blog/${postSlug}`}>
        <HStack className="space-x-1 text-sm hover:text-foreground/80 text-foreground/60">
          <span>Read More</span>
          <ArrowRight size={16} />
        </HStack>
      </Link>
    </VStack>
  );
};
