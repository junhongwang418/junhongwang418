import { cn } from "@/lib/cn";
import { HTMLProps } from "react";

interface HStackProps extends HTMLProps<HTMLDivElement> {}

export const HStack = (props: HStackProps) => {
  const { className, ...rest } = props;

  return (
    <div className={cn("flex flex-row items-center", className)} {...rest} />
  );
};
