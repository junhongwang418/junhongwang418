import { cn } from "@/lib/cn";
import { HTMLProps } from "react";

interface SpacerProps extends HTMLProps<HTMLDivElement> {}

export const Spacer = (props: SpacerProps) => {
  const { className, ...rest } = props;

  return <div className={cn("grow", className)} {...rest} />;
};
