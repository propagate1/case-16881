import { businessItems, siteContent } from "@/lib/site-content";

export function CompanySection() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-base)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <p className="text-[14px] font-semibold tracking-[0.16em] text-[var(--color-main)]">COMPANY</p>
        <h2 className="mt-4 text-[30px] font-semibold leading-[1.3] text-[var(--color-ink)] md:text-[40px]">
          会社情報
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-white)] p-6">
            <dl className="grid gap-5 text-[15px] leading-7 text-[var(--color-muted)]">
              <div>
                <dt className="font-semibold text-[var(--color-ink)]">会社名</dt>
                <dd>{siteContent.companyName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-ink)]">代表</dt>
                <dd>{siteContent.representative}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-ink)]">設立</dt>
                <dd>{siteContent.founded}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-ink)]">本社</dt>
                <dd>{siteContent.mainAddress}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-ink)]">支店</dt>
                <dd className="grid gap-2">
                  {siteContent.branches.map((branch) => (
                    <span key={branch}>{branch}</span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-ink)]">建築業許可</dt>
                <dd>大阪府知事 許可(般-7)第163700号 電気工事業</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-white)] p-6">
            <h3 className="text-[22px] font-semibold text-[var(--color-ink)]">事業内容</h3>
            <ul className="mt-5 grid gap-3 text-[16px] leading-8 text-[var(--color-muted)]">
              {businessItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-8 rounded-[24px] border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
              <p className="text-[16px] leading-8 text-[var(--color-muted)]">
                BtoBサービスとしての信頼性と、店舗オーナーでも理解しやすい導入しやすさの両立を重視しています。全国・オンラインで相談を受け付けています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
