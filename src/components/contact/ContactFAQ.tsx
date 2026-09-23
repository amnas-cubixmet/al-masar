"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactFAQ() {
  const { isArabic } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How can I request a quotation?",
      qAr: "كيف يمكنني طلب عرض سعر؟",
      a: "You can submit your product requirements through our online enquiry form, attach your BOQ list, or send your specifications directly to our sales team via WhatsApp.",
      aAr: "يمكنك تقديم متطلبات المنتجات عبر نموذج الاستفسار الإلكتروني، أو إرفاق جدول الكميات، أو إرسال المواصفات مباشرة إلى فريق المبيعات عبر الواتساب.",
    },
    {
      q: "Can I send a BOQ or product list?",
      qAr: "هل يمكنني إرسال جدول كميات (BOQ) أو قائمة منتجات؟",
      a: "Yes, our enquiry form allows you to attach PDF, XLSX, DOCX or image files of your BOQ for direct review by our project team.",
      aAr: "نعم، يتيح لك نموذج الاستفسار إرفاق ملفات PDF أو XLSX أو DOCX أو صور لجدول الكميات ليقوم فريق المشاريع بمراجعتها فوراً.",
    },
    {
      q: "Do you support bulk/project orders?",
      qAr: "هل تدعمون طلبيات الجملة والمشاريع الكبيرة؟",
      a: "Absolutely. AL MASAR specializes in B2B supply for contractors, engineering projects, and wholesale material requirements across Saudi Arabia.",
      aAr: "بالتأكيد. تتخصص شركة المسار في التوريد التجاري للمقاولين ومشاريع الهندسة ومتطلبات مواد الجملة في جميع أنحاء المملكة العربية السعودية.",
    },
    {
      q: "How quickly will your team respond?",
      qAr: "ما هي السرعة التي سيرد بها فريقكم؟",
      a: "Our sales team responds to online form submissions within 1–2 business hours. For immediate assistance, feel free to contact us via WhatsApp.",
      aAr: "يرد فريق المبيعات لدينا على الطلبات الإلكترونية خلال 1–2 ساعة عمل. للحصول على مساعدة فورية، يمكنك التواصل معنا عبر الواتساب.",
    },
    {
      q: "Can I enquire through WhatsApp?",
      qAr: "هل يمكنني الاستفسار عبر الواتساب؟",
      a: "Yes, all of our branches feature direct WhatsApp lines to immediately assist with product availability, prices, and orders.",
      aAr: "نعم، تتوفر في جميع فروعنا خطوط واتساب مباشرة للمساعدة الفورية في معرفة توفر المنتجات والأسعار وإجراء الطلبات.",
    },
  ];

  return (
    <div className="mt-10 pt-8 sm:mt-16 sm:pt-12">
      <div className="faq-section-title mb-5 sm:mb-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] sm:text-[11px] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
          {isArabic ? "الأسئلة الشائعة" : "FREQUENTLY ASKED QUESTIONS"}
        </span>
        <h2 className="mt-1.5 text-[24px] font-black text-white sm:mt-2 sm:text-3xl lg:text-4xl">
          {isArabic ? "قبل الاتصال بنا" : "Before You Contact Us"}
        </h2>
      </div>

      <div className="flex max-w-4xl flex-col gap-2 sm:gap-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const question = isArabic ? faq.qAr : faq.q;
          const answer = isArabic ? faq.aAr : faq.a;

          return (
            <div
              key={idx}
              className="faq-item-row overflow-hidden rounded-xl border border-white/[0.08] bg-[#0D1727] transition-all duration-300 sm:rounded-2xl"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-3 p-4 text-left font-bold text-white transition hover:text-[#6EA8FF] sm:gap-4 sm:p-5"
              >
                <span className="text-[13px] leading-snug sm:text-base">{question}</span>
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#6EA8FF]">
                  <Plus className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`} />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-3 text-[12px] leading-relaxed text-[#AAB4C3] sm:border-t sm:border-white/5 sm:px-5 sm:pb-5 sm:text-sm">
                  {answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
