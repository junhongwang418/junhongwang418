"use client";

import { usePathname } from "next/navigation";
import { HStack } from "./HStack";
import Link from "next/link";
import {
  ExternalLink,
  GanttChart,
  Github,
  Linkedin,
  MoonIcon,
  SunIcon,
  Terminal,
  TerminalSquare,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Spacer } from "./Spacer";
import { Button } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { useTheme } from "next-themes";

export default function Header() {
  const pathname = usePathname();

  const { setTheme, resolvedTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <HStack className="w-full space-x-2 container flex h-14 max-w-screen-2xl items-center">
        <Link className="font-bold text-md p-2" href="/">
          <HStack className="space-x-2">
            <TerminalSquare />
            <span>JW</span>
          </HStack>
        </Link>
        <Link
          className={cn(
            "text-sm transition-colors hover:text-foreground/80",
            pathname.startsWith("/blog")
              ? "text-foreground"
              : "text-foreground/60"
          )}
          href="/blog"
        >
          Blog
        </Link>
        <Spacer />
        <HStack className="space-x-2">
          <Link
            className="text-sm transition-colors hover:text-foreground/80 text-foreground/60"
            href="/resume.pdf"
            target="_blank"
          >
            <HStack className="space-x-1">
              <span>Resume</span>
              <ExternalLink size={14} />
            </HStack>
          </Link>
          <HStack>
            <Link href="https://github.com/junhongwang418" target="_blank">
              <Button variant="ghost" size="icon" asChild>
                <span>
                  <Github size={16} />
                </span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/junhongwang/"
              target="_blank"
            >
              <Button variant="ghost" size="icon" asChild>
                <span>
                  <Linkedin size={16} />
                </span>
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-9 px-0">
                  <SunIcon
                    className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    size={16}
                  />
                  <MoonIcon
                    className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    size={16}
                  />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                onCloseAutoFocus={(e) => {
                  e.preventDefault();
                }}
              >
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </HStack>
        </HStack>
      </HStack>
    </header>
  );
}
