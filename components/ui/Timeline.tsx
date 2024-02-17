import React, { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TimelineContentProps = {
  children: ReactNode;
};

const TimelineContent: React.FC<TimelineContentProps> = ({ children }) => (
  <div className={cn("ml-4")}>{children}</div>
);
TimelineContent.displayName = "TimelineContent";

const TimelineDot: React.FC = () => (
  <div className={cn("h-3 w-3 bg-neutral-500 rounded-full m-[8px]")}></div>
);
TimelineDot.displayName = "TimelineDot";

type TimelineItemProps = {
  children: React.ReactNode;
  className?: string;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ children, className }) => (
  <div className={cn("flex items-center", className)}>
    <TimelineContent>{children}</TimelineContent>
  </div>
);
TimelineItem.displayName = "TimelineItem";

type TimelineProps = {
  children: React.ReactNode;
};

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  const timelineItems = React.Children.toArray(children);

  return (
    <div className={cn("flex flex-col items-start space-y-4")}>
      {timelineItems.map((child, index) => (
        <div key={index} className="flex flex-row">
          <div className="flex flex-col space-y-4 items-center">
            <TimelineDot />
            {index < timelineItems.length - 1 && (
              <div className={cn("w-[3px] bg-neutral-500 grow rounded")}></div>
            )}
          </div>
          {child}
        </div>
      ))}
    </div>
  );
};
Timeline.displayName = "Timeline";

export { Timeline, TimelineItem };
