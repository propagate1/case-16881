import Image from "next/image";

import { heroHighlights, offerItems, siteContent } from "@/lib/site-content";

export function HeroSection() {
  return (
    <section id="top" className="border-b border-[var(--color-line)] bg-[var(--color-base)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="text-[14px] font-semibold tracking-[0.18em] text-[var(--color-main)]">置くだけ集客</p>
          <p className="mt-4 text-[14px] font-medium text-[var(--color-muted)]">{siteContent.companyName}</p>
          <h1 className="mt-5 max-w-3xl text-[40px] font-semibold leading-[1.18] text-[var(--color-ink)] md:text-[56px]">
            レンタルなのに資産になる
            <br />
            LEDビジョン
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-8 text-[var(--color-muted)]">
            初期費用0円、最短1ヶ月から導入できるレンタルビジョン。工事不要で店頭に置けて、36ヶ月後は資産として活用できます。
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <li
                key={item}
                className="rounded-[18px] border border-[var(--color-line)] bg-[var(--color-white)] px-4 py-3 text-[15px] font-medium text-[var(--color-ink)]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[18px] bg-[var(--color-accent)] px-7 text-[16px] font-semibold text-[var(--color-white)] hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent-active)]"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M3 6.75C3 5.78 3.78 5 4.75 5h14.5C20.22 5 21 5.78 21 6.75v10.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 19 3 18.22 3 17.25V6.75Zm2.52-.25 6.11 4.77a.6.6 0 0 0 .74 0l6.11-4.77H5.52Zm13.98 1.91-5.77 4.5a2.6 2.6 0 0 1-3.2 0L4.5 8.41v8.84c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25V8.41Z" />
              </svg>
              無料相談を申し込む
            </a>
          </div>
          <div className="mt-8 rounded-[24px] border border-[var(--color-line)] bg-[var(--color-white)] px-5 py-5">
            <p className="text-[14px] font-semibold text-[var(--color-main)]">期間限定オファー</p>
            <ul className="mt-3 grid gap-2 text-[14px] leading-7 text-[var(--color-muted)] md:grid-cols-2">
              {offerItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-[var(--color-white)]">
          <Image
            src="/images/hero-led-vision.svg"
            alt="店舗前に設置されたスタンド型LEDビジョン"
            width={1600}
            height={900}
            priority
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
