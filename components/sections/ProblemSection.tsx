import { missionParagraphs, painPoints } from "@/lib/site-content";

export function ProblemSection() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <p className="text-[14px] font-semibold tracking-[0.16em] text-[var(--color-main)]">WHY</p>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.3] text-[var(--color-ink)] md:text-[40px]">
            通行量を
            <br />
            売上に変える
          </h2>
        </div>
        <div className="grid gap-6">
          <div className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-white)] p-6">
            <h3 className="text-[22px] font-semibold text-[var(--color-ink)]">店舗前でこんな課題はありませんか</h3>
            <ul className="mt-5 grid gap-3 text-[16px] leading-8 text-[var(--color-muted)]">
              {painPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-base)] p-6">
            {missionParagraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-[16px] leading-8 text-[var(--color-muted)] ${index === 0 ? "" : "mt-4"}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
