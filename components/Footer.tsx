export const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="w-full text-balance text-center text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            href="https://github.com/junhongwang418"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Junhong Wang
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/junhongwang418/junhongwang418.github.io"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
