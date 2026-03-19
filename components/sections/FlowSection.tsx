import { flowSteps } from "@/lib/site-content";

export function FlowSection() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-base)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <p className="text-[14px] font-semibold tracking-[0.16em] text-[var(--color-main)]">FLOW</p>
        <h2 className="mt-4 text-[30px] font-semibold leading-[1.3] text-[var(--color-ink)] md:text-[40px]">
          ご利用の流れ
        </h2>
        <p className="mt-4 text-[16px] leading-8 text-[var(--color-muted)]">
          お問い合わせから最短数日で利用開始できます。オンライン相談で設置場所や活用目的を確認し、最適なプランを案内します。
        </p>
        <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {flowSteps.map((step, index) => (
            <li
              key={step}
              className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-white)] p-6"
            >
              <p className="text-[14px] font-semibold tracking-[0.16em] text-[var(--color-main)]">
                STEP {index + 1}
              </p>
              <p className="mt-4 text-[18px] font-semibold leading-8 text-[var(--color-ink)]">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
