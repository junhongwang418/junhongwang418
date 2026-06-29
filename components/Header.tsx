import Link from "next/link";
import { FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const primaryLinks = [
  { href: "/ucla", label: "UCLA" },
  { href: "/appfolio", label: "AppFolio" },
  { href: "/stealth-startup", label: "Stealth Startup" },
];

const profileLinks = [
  {
    href: "https://github.com/junhongwang418",
    label: "GitHub",
    shortLabel: "GH",
  },
  {
    href: "https://www.linkedin.com/in/junhongwang/",
    label: "LinkedIn",
    shortLabel: "in",
  },
];

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <nav className="mx-auto grid max-w-[980px] grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 px-4 py-3 sm:flex sm:min-h-14 sm:flex-nowrap sm:px-6">
        <div className="flex min-w-0 items-center gap-5 sm:flex-1">
          <Link className="shrink-0 text-sm font-medium" href="/">
            Junhong Wang
          </Link>
          <div className="hidden items-center gap-4 sm:flex">
            {primaryLinks.map((link) => (
              <Link
                className="text-sm text-foreground/70 hover:text-foreground"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-3">
          {profileLinks.map((link) => (
            <Link
              aria-label={link.label}
              className="inline-flex h-8 min-w-8 items-center justify-center rounded-md border border-border bg-background px-2 text-xs font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground sm:h-auto sm:min-w-0 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:text-sm sm:font-normal sm:text-foreground/70 sm:hover:bg-transparent sm:hover:text-foreground"
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              <span className="hidden sm:inline">{link.label}</span>
              <span className="font-medium sm:hidden">{link.shortLabel}</span>
            </Link>
          ))}
          <Link
            aria-label="Resume"
            className="inline-flex h-8 min-w-8 items-center justify-center rounded-md border border-border bg-background px-2 text-sm text-foreground/80 hover:bg-accent hover:text-accent-foreground sm:h-auto sm:min-w-0 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:text-foreground/70 sm:hover:bg-transparent sm:hover:text-foreground"
            href="/resume.pdf"
            target="_blank"
          >
            <span className="hidden sm:inline">Resume</span>
            <FileText className="h-4 w-4 sm:hidden" />
          </Link>
          <ThemeToggle />
        </div>

        <div className="col-span-2 flex w-full items-center gap-5 sm:hidden">
          {primaryLinks.map((link) => (
            <Link
              className="text-sm text-foreground/70 hover:text-foreground"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
