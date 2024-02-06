import { cn } from "@/lib/cn";
import { HTMLProps } from "react";

interface VStackProps extends HTMLProps<HTMLDivElement> {}

export const VStack = (props: VStackProps) => {
  const { className, ...rest } = props;

  return <div className={cn("flex flex-col", className)} {...rest} />;
};
