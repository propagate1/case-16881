import { siteContent } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[15px] font-semibold text-[var(--color-ink)]">{siteContent.companyName}</p>
            <p className="mt-3 text-[14px] leading-7 text-[var(--color-muted)]">
              全国対応のLEDビジョン専門会社として、導入相談から運用まで支援します。
            </p>
          </div>
          <div className="space-y-2 text-[14px] leading-7 text-[var(--color-muted)]">
            <p>{siteContent.mainAddress}</p>
            <p>
              <a href={siteContent.phoneHref} className="text-[var(--color-ink)] hover:text-[var(--color-main)]">
                {siteContent.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${siteContent.email}`}
                className="text-[var(--color-ink)] hover:text-[var(--color-main)]"
              >
                {siteContent.email}
              </a>
            </p>
            <p>営業時間 {siteContent.businessHours}</p>
          </div>
        </div>
        <p className="mt-8 text-[12px] text-[var(--color-muted)]">
          © {siteContent.companyName} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
