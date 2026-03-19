import { faqs } from "@/lib/site-content";

export function FaqSection() {
  return (
    <section id="faq" className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <p className="text-[14px] font-semibold tracking-[0.16em] text-[var(--color-main)]">FAQ</p>
        <h2 className="mt-4 text-[30px] font-semibold leading-[1.3] text-[var(--color-ink)] md:text-[40px]">
          よくある質問
        </h2>
        <div className="mt-8 grid gap-4">
          {faqs.map((item) => (
            <article
              key={item.question}
              className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-white)] p-6"
            >
              <h3 className="text-[18px] font-semibold leading-8 text-[var(--color-ink)]">{item.question}</h3>
              <p className="mt-3 text-[16px] leading-8 text-[var(--color-muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
