"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const form = e.currentTarget;
    setTimeout(() => {
      setStatus({ type: "success", message: "送信完了しました。ありがとうございます。" });
      form.reset();
      setIsSubmitting(false);
    }, 800);
  }

  return (
    <form id="contactForm" onSubmit={handleSubmit} className="space-y-6 max-w-[500px] mx-auto">
      <p className="text-sm text-gray-600 mb-4">2営業日以内にご返信いたします</p>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          お名前 <span className="text-[#2563EB]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="例：山田太郎"
          maxLength={100}
          className="w-full min-w-[320px] max-w-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          メールアドレス <span className="text-[#2563EB]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="例：xxxx@gmail.com"
          maxLength={255}
          className="w-full min-w-[320px] max-w-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          電話番号
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="例：090-1234-5678"
          maxLength={20}
          className="w-full min-w-[320px] max-w-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          お問い合わせ内容 <span className="text-[#2563EB]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="◯月中の納品を希望／新商品の取り扱いについて質問がある"
          maxLength={5000}
          className="w-full min-w-[320px] max-w-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[48px] py-3 px-6 bg-[#2563EB] text-white text-base font-medium rounded-[6px] hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden>
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
        {isSubmitting ? "送信中..." : "送信する"}
      </button>
      {status.type && (
        <div
          className={`p-4 border ${
            status.type === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          <p className="whitespace-pre-wrap">{status.message}</p>
        </div>
      )}
    </form>
  );
}
