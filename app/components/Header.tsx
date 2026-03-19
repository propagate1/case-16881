import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[10vh] min-h-[48px] bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-full w-[90%] max-w-[1200px] mx-auto">
        <Link href="/" className="text-lg md:text-xl font-bold text-[#2563EB] tracking-wide">
          Vista Japan
        </Link>
        <nav className="flex items-center gap-4 md:gap-6 whitespace-nowrap">
          <a href="#price" className="text-sm md:text-base text-gray-700 hover:text-[#2563EB]">
            料金
          </a>
          <a href="#benefits" className="text-sm md:text-base text-gray-700 hover:text-[#2563EB]">
            選ばれる理由
          </a>
          <a href="#flow" className="text-sm md:text-base text-gray-700 hover:text-[#2563EB]">
            ご利用の流れ
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] px-4 py-2 bg-[#2563EB] text-white text-sm md:text-base font-medium rounded-[6px] hover:bg-[#1d4ed8]"
          >
            お問い合わせ
          </a>
        </nav>
      </div>
    </header>
  );
}
