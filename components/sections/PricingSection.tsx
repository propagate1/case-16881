import Image from "next/image";

import { plans } from "@/lib/site-content";

export function PricingSection() {
  return (
    <section id="pricing" className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[14px] font-semibold tracking-[0.16em] text-[var(--color-main)]">PLAN</p>
            <h2 className="mt-4 text-[30px] font-semibold leading-[1.3] text-[var(--color-ink)] md:text-[40px]">
              料金とラインアップ
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-8 text-[var(--color-muted)]">
              料金はすべて税込です。初期費用0円で始められ、36ヶ月後は資産として活用できます。
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-[16px] bg-[var(--color-main)] px-6 text-[16px] font-semibold text-[var(--color-white)] hover:bg-[var(--color-main-hover)] active:bg-[var(--color-main-active)]"
          >
            プランを相談する
          </a>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {plans.map((plan) => (
              <article
                key={`${plan.name}-${plan.size}`}
                className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-white)] p-6"
              >
                <p className="text-[14px] font-semibold tracking-[0.12em] text-[var(--color-main)]">{plan.name}</p>
                <h3 className="mt-3 text-[24px] font-semibold text-[var(--color-ink)]">{plan.size}</h3>
                <p className="mt-5 text-[34px] font-semibold leading-none text-[var(--color-ink)]">
                  月々{plan.price}
                </p>
                <p className="mt-4 text-[15px] leading-7 text-[var(--color-muted)]">{plan.note}</p>
              </article>
            ))}
          </div>
          <div className="rounded-[32px] border border-[var(--color-line)] bg-[var(--color-white)] p-4">
            <Image
              src="/images/product-lineup.svg"
              alt="3種類のレンタルビジョン製品ラインアップ"
              width={1200}
              height={900}
              className="h-[240px] w-full rounded-[24px] object-cover md:h-[280px]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="mt-5 rounded-[24px] border border-[var(--color-line)] bg-[var(--color-base)] p-5">
              <p className="text-[16px] leading-8 text-[var(--color-muted)]">
                置き型のため屋外広告条例の影響を受けにくく、屋内・窓内・店舗前などさまざまな設置に対応します。動画コンテンツ3本プレゼントの期間限定オファーも用意しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
