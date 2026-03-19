import { comparisonRows } from "@/lib/site-content";

export function ComparisonSection() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-base)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <p className="text-[14px] font-semibold tracking-[0.16em] text-[var(--color-main)]">COMPARE</p>
        <h2 className="mt-4 text-[30px] font-semibold leading-[1.3] text-[var(--color-ink)] md:text-[40px]">
          一般的な導入との違い
        </h2>
        <p className="mt-4 max-w-3xl text-[16px] leading-8 text-[var(--color-muted)]">
          高額な初期投資や長期契約がネックになりやすいLEDビジョンを、導入しやすい条件に置き換えたサービスです。
        </p>
        <div className="mt-8 overflow-x-auto rounded-[28px] border border-[var(--color-line)] bg-[var(--color-white)]">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
                <th className="px-6 py-4 text-left text-[15px] font-semibold text-[var(--color-ink)]">項目</th>
                <th className="px-6 py-4 text-left text-[15px] font-semibold text-[var(--color-muted)]">
                  一般的なLEDビジョン
                </th>
                <th className="px-6 py-4 text-left text-[15px] font-semibold text-[var(--color-main)]">
                  レンタルビジョン
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row[0]} className="border-b border-[var(--color-line)] last:border-b-0">
                  <th className="px-6 py-5 text-left text-[15px] font-semibold text-[var(--color-ink)]">{row[0]}</th>
                  <td className="px-6 py-5 text-[15px] leading-7 text-[var(--color-muted)]">{row[1]}</td>
                  <td className="px-6 py-5 text-[15px] font-semibold leading-7 text-[var(--color-main)]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
