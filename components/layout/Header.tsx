import { navigationItems, siteContent } from "@/lib/site-content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(255,255,255,0.94)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <a href="#top" className="text-[15px] font-semibold tracking-[0.08em] text-[var(--color-ink)]">
          {siteContent.companyName}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[16px] bg-[var(--color-accent)] px-5 text-[16px] font-semibold text-[var(--color-white)] hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent-active)]"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
            <path d="M3 6.75C3 5.78 3.78 5 4.75 5h14.5C20.22 5 21 5.78 21 6.75v10.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 19 3 18.22 3 17.25V6.75Zm2.52-.25 6.11 4.77a.6.6 0 0 0 .74 0l6.11-4.77H5.52Zm13.98 1.91-5.77 4.5a2.6 2.6 0 0 1-3.2 0L4.5 8.41v8.84c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25V8.41Z" />
          </svg>
          お問い合わせ
        </a>
      </div>
    </header>
  );
}
