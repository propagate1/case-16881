import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-[10vh] min-h-[80vh] flex flex-col justify-center bg-white">
        <div className="w-[90%] max-w-[1200px] mx-auto py-16 md:py-24 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-wide mb-6">
            レンタルなのに資産になる
            <br />
            LEDビジョン
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-[600px] mx-auto">
            初期費用0円・最短1ヶ月から・3年後は資産に。工事不要で置くだけで集客できるデジタル看板。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-w-[44px] min-h-[48px] w-full sm:w-auto px-8 py-3 bg-[#2563EB] text-white text-base font-medium rounded-[6px] hover:bg-[#1d4ed8]"
            >
              <svg className="w-5 h-5 fill-current mr-2" viewBox="0 0 24 24" aria-hidden>
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              無料相談する
            </a>
            <a
              href="tel:050-3565-4007"
              className="inline-flex items-center justify-center min-w-[44px] min-h-[48px] w-full sm:w-auto px-8 py-3 border-2 border-[#2563EB] text-[#2563EB] text-base font-medium rounded-[6px] hover:bg-[#2563EB] hover:text-white"
            >
              <svg className="w-5 h-5 fill-current mr-2" viewBox="0 0 24 24" aria-hidden>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              050-3565-4007
            </a>
          </div>
          <ul className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base text-gray-700">
            <li>初期費用0円</li>
            <li>1ヶ月からOK</li>
            <li>月々27,500円〜</li>
            <li>3年後資産化</li>
            <li>工事不要</li>
          </ul>
        </div>
      </section>

      {/* Service overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            置くだけ集客。工事不要のLEDビジョン
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="border border-gray-200 p-6 md:p-8 bg-white">
              <h3 className="text-lg font-bold text-gray-900 mb-4">こんなお悩みありませんか？</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li>・通行人に店の存在を気づいてもらえない</li>
                <li>・看板だけでは情報が伝わらない</li>
                <li>・新規客がなかなか増えない</li>
                <li>・LEDビジョンは高額で導入できない</li>
                <li>・7年契約は長すぎる</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-6 md:p-8 bg-white">
              <h3 className="text-lg font-bold text-gray-900 mb-4">レンタルビジョンで解決</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li>・動画で強く視認性を発揮</li>
                <li>・営業時間やキャンペーンをリアルタイム更新</li>
                <li>・初期費用0円で気軽に導入</li>
                <li>・最短1ヶ月から利用可能</li>
                <li>・3年後は資産として利用可能</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price */}
      <section id="price" className="py-16 md:py-24 bg-white scroll-mt-[10vh]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            料金プラン（税込）
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 flex flex-col">
              <p className="text-sm text-gray-600 mb-2">スタンドビジョン W500×H500</p>
              <p className="text-2xl font-bold text-[#2563EB] mb-4">月々27,500円</p>
              <p className="text-sm text-gray-600 mt-auto">3.9mmp / 工事不要</p>
            </div>
            <div className="border border-gray-200 p-6 flex flex-col">
              <p className="text-sm text-gray-600 mb-2">スタンドビジョン W500×H1000</p>
              <p className="text-2xl font-bold text-[#2563EB] mb-4">月々33,000円</p>
              <p className="text-sm text-gray-600 mt-auto">3.9mmp / 工事不要</p>
            </div>
            <div className="border border-gray-200 p-6 flex flex-col">
              <p className="text-sm text-gray-600 mb-2">キューブ型ビジョン W500×H500×D500</p>
              <p className="text-2xl font-bold text-[#2563EB] mb-4">月々44,000円</p>
              <p className="text-sm text-gray-600 mt-auto">3.9mmp / 工事不要</p>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-600">※初期費用0円 / 1ヶ月からOK / 3年後資産化</p>
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-[#2563EB] text-white text-base font-medium rounded-[6px] hover:bg-[#1d4ed8]"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 md:py-24 bg-gray-50 scroll-mt-[10vh]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            選ばれる理由
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-6 bg-white">
              <h3 className="font-bold text-gray-900 mb-2">導入ハードルが低い</h3>
              <p className="text-gray-700 text-left text-sm md:text-base">
                初期費用0円、最短1ヶ月から利用可能。工事不要でコンセントに挿すだけで設置できます。
              </p>
            </div>
            <div className="border border-gray-200 p-6 bg-white">
              <h3 className="font-bold text-gray-900 mb-2">3年後は資産に</h3>
              <p className="text-gray-700 text-left text-sm md:text-base">
                3年利用後はLEDビジョンが資産になります。レンタル終了後もそのままご利用いただけます。
              </p>
            </div>
            <div className="border border-gray-200 p-6 bg-white">
              <h3 className="font-bold text-gray-900 mb-2">コンテンツ変更が簡単</h3>
              <p className="text-gray-700 text-left text-sm md:text-base">
                スマホで簡単に動画・静止画・文字を変更。営業時間やキャンペーンをリアルタイム更新できます。
              </p>
            </div>
            <div className="border border-gray-200 p-6 bg-white">
              <h3 className="font-bold text-gray-900 mb-2">専門会社のサポート</h3>
              <p className="text-gray-700 text-left text-sm md:text-base">
                LEDビジョン専門会社による安心サポート。100台以上の導入実績があります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            一般的なLEDビジョンとの比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border border-gray-200 text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border-b border-gray-200 font-bold text-gray-900">項目</th>
                  <th className="p-4 border-b border-gray-200 font-bold text-gray-900">一般的なLED</th>
                  <th className="p-4 border-b border-gray-200 font-bold text-[#2563EB]">レンタルビジョン</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">初期費用</td>
                  <td className="p-4 text-gray-700">約30万円〜200万円</td>
                  <td className="p-4 text-[#2563EB] font-bold">0円</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">工事</td>
                  <td className="p-4 text-gray-700">必要</td>
                  <td className="p-4 text-[#2563EB] font-bold">不要</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">契約期間</td>
                  <td className="p-4 text-gray-700">5年〜7年リース</td>
                  <td className="p-4 text-[#2563EB] font-bold">最短1ヶ月</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">途中解約</td>
                  <td className="p-4 text-gray-700">不可</td>
                  <td className="p-4 text-[#2563EB] font-bold">可能</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">導入まで</td>
                  <td className="p-4 text-gray-700">1〜2ヶ月</td>
                  <td className="p-4 text-[#2563EB] font-bold">最短数日</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="py-16 md:py-24 bg-gray-50 scroll-mt-[10vh]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            ご利用の流れ
          </h2>
          <ol className="space-y-4 max-w-[500px] mx-auto text-left">
            <li className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#2563EB] text-white text-sm font-bold">1</span>
              <span>お問い合わせ</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#2563EB] text-white text-sm font-bold">2</span>
              <span>オンライン相談・ヒアリング</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#2563EB] text-white text-sm font-bold">3</span>
              <span>設置場所の確認</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#2563EB] text-white text-sm font-bold">4</span>
              <span>お申込み</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#2563EB] text-white text-sm font-bold">5</span>
              <span>LEDビジョン発送</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#2563EB] text-white text-sm font-bold">6</span>
              <span>動画コンテンツ設定</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#2563EB] text-white text-sm font-bold">7</span>
              <span>運用開始</span>
            </li>
          </ol>
          <p className="text-center mt-8 text-[#2563EB] font-bold">最短数日で利用開始可能</p>
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-[#2563EB] text-white text-base font-medium rounded-[6px] hover:bg-[#1d4ed8]"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            今ならオリジナル動画3本制作プレゼント
          </h2>
          <ul className="space-y-2 max-w-[500px] mx-auto text-left text-gray-700">
            <li>・初期費用0円で導入可能</li>
            <li>・設置工事不要</li>
            <li>・無料オンライン相談</li>
            <li>・導入サポート相談</li>
            <li>・運用アドバイス無料</li>
          </ul>
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-[#2563EB] text-white text-base font-medium rounded-[6px] hover:bg-[#1d4ed8]"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            会社概要
          </h2>
          <div className="max-w-[600px] mx-auto">
            <dl className="border border-gray-200">
              <div className="flex border-b border-gray-200">
                <dt className="w-[40%] md:w-[35%] p-4 bg-gray-50 font-medium text-gray-700">会社名</dt>
                <dd className="w-[60%] md:w-[65%] p-4 text-gray-900">Vista Japan株式会社②</dd>
              </div>
              <div className="flex border-b border-gray-200">
                <dt className="w-[40%] md:w-[35%] p-4 bg-gray-50 font-medium text-gray-700">代表</dt>
                <dd className="w-[60%] md:w-[65%] p-4 text-gray-900">代表取締役 渡辺英樹</dd>
              </div>
              <div className="flex border-b border-gray-200">
                <dt className="w-[40%] md:w-[35%] p-4 bg-gray-50 font-medium text-gray-700">設立</dt>
                <dd className="w-[60%] md:w-[65%] p-4 text-gray-900">2020年3月2日</dd>
              </div>
              <div className="flex border-b border-gray-200">
                <dt className="w-[40%] md:w-[35%] p-4 bg-gray-50 font-medium text-gray-700">本社</dt>
                <dd className="w-[60%] md:w-[65%] p-4 text-gray-900">〒538-0037 大阪府大阪市鶴見区焼野2丁目4−25 TEL 06-7777-3991</dd>
              </div>
              <div className="flex border-b border-gray-200">
                <dt className="w-[40%] md:w-[35%] p-4 bg-gray-50 font-medium text-gray-700">お問い合わせ</dt>
                <dd className="w-[60%] md:w-[65%] p-4 text-gray-900">
                  <a href="mailto:info@vista-japan.com" className="text-[#2563EB] hover:underline">info@vista-japan.com</a>
                  <br />
                  <a href="tel:050-3565-4007" className="text-[#2563EB] hover:underline">050-3565-4007</a>
                </dd>
              </div>
              <div className="flex">
                <dt className="w-[40%] md:w-[35%] p-4 bg-gray-50 font-medium text-gray-700">営業時間</dt>
                <dd className="w-[60%] md:w-[65%] p-4 text-gray-900">10:00～17:00</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-white scroll-mt-[10vh]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            お問い合わせ
          </h2>
          <p className="text-center text-gray-600 mb-12">
            無料相談・お見積りはお気軽にどうぞ
          </p>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start justify-center">
            <div className="w-full md:w-auto">
              <ContactForm />
            </div>
            <div className="border border-gray-200 p-6 w-full md:w-auto min-w-[280px]">
              <p className="font-bold text-gray-900 mb-4">お電話でのお問い合わせ</p>
              <a href="tel:050-3565-4007" className="text-xl font-bold text-[#2563EB] hover:underline">
                050-3565-4007
              </a>
              <p className="text-sm text-gray-600 mt-2">営業時間 10:00～17:00</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
