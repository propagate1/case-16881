import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 md:py-16">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Link href="/" className="text-lg font-bold text-[#2563EB] tracking-wide">
            Vista Japan株式会社②
          </Link>
          <div className="text-sm text-gray-600">
            <p>〒538-0037 大阪府大阪市鶴見区焼野2丁目4−25</p>
            <p className="mt-1">
              <a href="tel:050-3565-4007" className="hover:text-[#2563EB]">
                050-3565-4007
              </a>
              {" / "}
              <a href="mailto:info@vista-japan.com" className="hover:text-[#2563EB]">
                info@vista-japan.com
              </a>
            </p>
            <p className="mt-1">営業時間 10:00～17:00</p>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-500">
          © Vista Japan株式会社② All rights reserved.
        </p>
      </div>
    </footer>
  );
}
