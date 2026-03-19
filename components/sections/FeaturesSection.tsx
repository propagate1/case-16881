import Image from "next/image";

import { features, useCases } from "@/lib/site-content";

export function FeaturesSection() {
  return (
    <section id="service" className="border-b border-[var(--color-line)] bg-[var(--color-base)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[32px] border border-[var(--color-line)] bg-[var(--color-white)] p-4">
            <Image
              src="/images/mobile-control.svg"
              alt="スマホで表示内容を変更できる操作イメージ"
              width={1200}
              height={900}
              className="h-[240px] w-full rounded-[24px] object-cover md:h-[280px]"
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
            <div className="mt-5 rounded-[24px] border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
              <p className="text-[14px] font-semibold tracking-[0.16em] text-[var(--color-main)]">利用シーン</p>
              <ul className="mt-4 grid gap-3 text-[15px] leading-7 text-[var(--color-muted)]">
                {useCases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p className="text-[14px] font-semibold tracking-[0.16em] text-[var(--color-main)]">WHAT</p>
            <h2 className="mt-4 text-[30px] font-semibold leading-[1.3] text-[var(--color-ink)] md:text-[40px]">
              低負担で始められる
              <br />
              店頭向けLEDビジョン
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-white)] p-6"
                >
                  <h3 className="text-[20px] font-semibold text-[var(--color-ink)]">{feature.title}</h3>
                  <p className="mt-4 text-[16px] leading-8 text-[var(--color-muted)]">{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
