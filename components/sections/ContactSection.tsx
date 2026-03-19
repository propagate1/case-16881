import Image from "next/image";

import { contactTypes, siteContent } from "@/lib/site-content";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-10">
        <div>
          <p className="text-[14px] font-semibold tracking-[0.16em] text-[var(--color-main)]">CONTACT</p>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.3] text-[var(--color-ink)] md:text-[40px]">
            導入相談はこちら
          </h2>
          <p className="mt-4 text-[16px] leading-8 text-[var(--color-muted)]">
            設置場所やプラン選び、導入時期の相談を受け付けています。内容を確認し、2営業日以内を目安にメールまたは電話で連絡します。
          </p>
          <div className="mt-8 rounded-[28px] border border-[var(--color-line)] bg-[var(--color-white)] p-4">
            <Image
              src="/images/online-consultation.svg"
              alt="オンライン相談で導入イメージを確認する様子"
              width={1200}
              height={900}
              className="h-[240px] w-full rounded-[24px] object-cover md:h-[280px]"
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
          </div>
          <div className="mt-6 rounded-[28px] border border-[var(--color-line)] bg-[var(--color-base)] p-6">
            <p className="text-[15px] font-semibold text-[var(--color-ink)]">電話での相談</p>
            <p className="mt-3 text-[24px] font-semibold text-[var(--color-ink)]">
              <a href={siteContent.phoneHref}>{siteContent.phone}</a>
            </p>
            <p className="mt-2 text-[15px] leading-7 text-[var(--color-muted)]">
              受付時間 {siteContent.businessHours} / 通知先 {siteContent.notifyEmail}
            </p>
          </div>
        </div>
        <div className="rounded-[32px] border border-[var(--color-line)] bg-[var(--color-white)] p-6 md:p-8">
          <form action="#" method="post" className="grid gap-5">
            {/* 送信先は未設定のため action のみ配置。運用時に外部フォームやAPIへ接続する。 */}
            <div className="grid gap-2">
              <label htmlFor="inquiryType" className="text-[15px] font-semibold text-[var(--color-ink)]">
                お問い合わせ種別
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                defaultValue=""
                className="min-h-12 rounded-[16px] border border-[var(--color-line)] bg-[var(--color-base)] px-4 text-[16px] text-[var(--color-ink)] outline-none"
              >
                <option value="" disabled>
                  選択する
                </option>
                {contactTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="name" className="text-[15px] font-semibold text-[var(--color-ink)]">
                お名前
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="山田 太郎"
                className="min-h-12 rounded-[16px] border border-[var(--color-line)] bg-[var(--color-base)] px-4 text-[16px] text-[var(--color-ink)] outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-[15px] font-semibold text-[var(--color-ink)]">
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="info@example.com"
                className="min-h-12 rounded-[16px] border border-[var(--color-line)] bg-[var(--color-base)] px-4 text-[16px] text-[var(--color-ink)] outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-[15px] font-semibold text-[var(--color-ink)]">
                電話番号
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="090-1234-5678"
                className="min-h-12 rounded-[16px] border border-[var(--color-line)] bg-[var(--color-base)] px-4 text-[16px] text-[var(--color-ink)] outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-[15px] font-semibold text-[var(--color-ink)]">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="学習塾の店頭にW500×H1000を置きたい。設置場所と最短導入日を相談したい。"
                className="rounded-[16px] border border-[var(--color-line)] bg-[var(--color-base)] px-4 py-3 text-[16px] leading-8 text-[var(--color-ink)] outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[18px] bg-[var(--color-accent)] px-6 text-[16px] font-semibold text-[var(--color-white)] hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent-active)]"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M3 6.75C3 5.78 3.78 5 4.75 5h14.5C20.22 5 21 5.78 21 6.75v10.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 19 3 18.22 3 17.25V6.75Zm2.52-.25 6.11 4.77a.6.6 0 0 0 .74 0l6.11-4.77H5.52Zm13.98 1.91-5.77 4.5a2.6 2.6 0 0 1-3.2 0L4.5 8.41v8.84c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25V8.41Z" />
              </svg>
              送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
