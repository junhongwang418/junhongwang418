import { EducationRow } from "@/components/EducationRow";
import { ExperienceRow } from "@/components/ExperienceRow";
import { HStack } from "@/components/HStack";
import { VStack } from "@/components/VStack";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { Topic } from "@/lib/topic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Junhong Wang",
  description:
    "I'm Junhong Wang, an LA-based Software Engineer specializing in web, iOS, and desktop app development.",
};

export default function Home() {
  return (
    <VStack>
      <VStack
        className="max-w-[980px] mx-auto space-y-2 justify-center translate-y-[-28px]"
        style={{ height: "calc(100vh - 56px)" }}
      >
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Hello there{" "}
          <span className="inline-block origin-[70%_70%] animate-wave">👋</span>
        </h1>
        <span className="md:max-w-[750px] mx-auto text-center text-lg text-muted-foreground sm:text-xl inline-block sm:max-w-[334px] align-top">
          {`I'm Junhong Wang, an LA-based Software Engineer specializing in web, iOS, and desktop app development.`}
        </span>
      </VStack>
      <VStack className="max-w-[980px] mx-auto container space-y-8 pb-24">
        <h2 className="text-xl md:text-3xl font-bold dark:text-neutral-200 text-neutral-800 text-center">
          Where I’ve Worked
        </h2>
        <Timeline>
          <TimelineItem className="items-start">
            <ExperienceRow
              jobTitle="Software Engineer II"
              employer="AppFolio"
              period="August 2022 - June 2023"
              description="Made key contributions to deliver the MVP of revenue management. Continued to integrate Lisa into APM."
              employerHref="https://www.appfolio.com/"
              postSlug="2023-06-27-software-engineer-II-at-appfolio"
              topics={[
                Topic.Java,
                Topic.TypeScript,
                Topic.React,
                Topic.NextJS,
                Topic.Ruby,
                Topic.Rails,
                Topic.GraphQL,
                Topic.MySQL,
                Topic.AWS,
              ]}
            />
          </TimelineItem>
          <TimelineItem className="items-start">
            <ExperienceRow
              jobTitle="Software Engineer"
              employer="AppFolio"
              period="May 2021 - August 2022"
              description="Built AI Leasing Assistant — Lisa. Lisa was patented in 2023 (US-11615463-B2)."
              employerHref="https://www.appfolio.com/"
              postSlug="2022-09-01-software-engineer-at-appfolio"
              topics={[
                Topic.Java,
                Topic.TypeScript,
                Topic.React,
                Topic.GraphQL,
                Topic.MySQL,
                Topic.Jetty,
                Topic.Python,
                Topic.Terrraform,
                Topic.AWS,
              ]}
            />
          </TimelineItem>
          <TimelineItem className="items-start">
            <ExperienceRow
              jobTitle="Software Engineer Intern"
              employer="AppFolio"
              period="June 2020 - September 2020"
              description="Optimized GraphQL/MySQL queries and reduced the server CPU utilization by 20%. Integrated GraphQL Subscription with AWS API Gateway WebSocket and reduced the load on the server significantly."
              employerHref="https://www.appfolio.com/"
              postSlug="2020-10-01-software-engineer-intern-at-appfolio"
              topics={[
                Topic.TypeScript,
                Topic.React,
                Topic.Java,
                Topic.Jetty,
                Topic.GraphQL,
                Topic.MySQL,
                Topic.AWS,
              ]}
            />
          </TimelineItem>
          <TimelineItem className="items-start">
            <ExperienceRow
              jobTitle="Software Developer Intern"
              employer="GIRS"
              period="June 2019 - September 2019"
              description="Enhanced Graph editing features and increased modeling efficiency/usability. Invented a tree traversal algorithm to navigate users building event trees."
              employerHref="https://www.risksciences.ucla.edu/"
              postSlug="2019-10-01-software-developer-intern-at-girs"
              topics={[Topic.TypeScript, Topic.React, Topic.MaterialUI]}
            />
          </TimelineItem>
          <TimelineItem className="items-start">
            <ExperienceRow
              jobTitle="iOS App Developer Intern"
              employer="TeamLab"
              period="July 2018 - September 2018"
              description="Ranked #23 in the App Store for the shopping category in Japan. Displayed personalized products based on user preferences and purchase histories. Implement skeleton views and tutorial pages."
              employerHref="https://www.teamlab.art/"
              postSlug="2018-10-01-ios-app-developer-intern-at-teamlab"
              topics={[Topic.Swift, Topic.RxSwift, Topic.ReSwift]}
            />
          </TimelineItem>
          <TimelineItem className="items-start">
            <ExperienceRow
              jobTitle="iOS App Developer Intern"
              employer="MaruMe"
              period="June 2016 - August 2016"
              description="Developed a product review app in a team of 2 using Swift that helps consumers make wise purchase decisions. Updated designs of buttons and layouts and built profile pages from scratch."
              employerHref="https://www.linkedin.com/company/maru-me/about/"
              postSlug="2016-09-01-ios-app-developer-intern-at-marume"
              topics={[Topic.Swift, Topic.PHP]}
            />
          </TimelineItem>
        </Timeline>
      </VStack>
      <VStack className="max-w-[980px] mx-auto container space-y-8 pb-24">
        <h2 className="text-xl md:text-3xl font-bold dark:text-neutral-200 text-neutral-800 text-center">
          Where I studied
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <EducationRow
            school="University of California, Los Angeles"
            degree="Bachelor of Science in Computer Science"
            graduationDate="March 2021"
            logoSrc="/ucla-logo.jpeg"
            href="https://www.ucla.edu/"
          />
          <EducationRow
            school="Berkeley City College"
            degree="Associate of Science in Mathematics"
            graduationDate="May 2018"
            logoSrc="/bcc-logo.png"
            href="https://www.berkeleycitycollege.edu/"
          />
        </div>
      </VStack>
    </VStack>
  );
}
