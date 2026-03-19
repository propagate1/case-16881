import Image from "next/image";

import { achievements } from "@/lib/site-content";

export function AchievementSection() {
  return (
    <section id="cases" className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:px-10">
        <div>
          <p className="text-[14px] font-semibold tracking-[0.16em] text-[var(--color-main)]">PROOF</p>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.3] text-[var(--color-ink)] md:text-[40px]">
            新サービスでも
            <br />
            導入経験は豊富です
          </h2>
          <p className="mt-4 text-[16px] leading-8 text-[var(--color-muted)]">
            レンタルビジョン自体は新しいサービスですが、Vista Japan株式会社②はLEDビジョン専門会社として販売・施工を含む導入支援を積み重ねてきました。
          </p>
          <ul className="mt-8 grid gap-4">
            {achievements.map((item) => (
              <li
                key={item}
                className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-white)] px-5 py-4 text-[16px] leading-7 text-[var(--color-muted)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[32px] border border-[var(--color-line)] bg-[var(--color-white)] p-4">
          <Image
            src="/images/achievement-network.svg"
            alt="全国の店舗や施設でLEDビジョンが活用されるイメージ"
            width={1600}
            height={900}
            className="h-[240px] w-full rounded-[24px] object-cover md:h-[280px]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <div className="mt-5 rounded-[24px] border border-[var(--color-line)] bg-[var(--color-base)] p-5">
            <p className="text-[16px] leading-8 text-[var(--color-muted)]">
              飲食店、薬局、整骨院、学習塾、寺院、不動産、運送会社、イベント施設、スポーツ施設など、幅広い業種の導入経験をもとに設置場所や見せ方を提案します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
