"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function OurStory() {
  const { isArabic } = useLanguage();

  return (
    <section data-section="our-story" className="relative w-full bg-[#07111F] py-10 text-white sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-[7vw]">
        
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Image visual */}
          <div className="story-image-wrap relative aspect-[16/10] w-full overflow-hidden rounded-[14px] border border-white/10 bg-[#101A2B] sm:aspect-[4/3] sm:rounded-[20px] sm:shadow-2xl">
            <Image
              src="/images/about/our-story.png"
              alt="AL MASAR Our Story"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Story Copy */}
          <div className="story-content-wrap">
            <p className="story-eyebrow mb-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent sm:mb-3 sm:text-[12px] sm:tracking-[0.24em]">
              {isArabic ? "مسيرتنا" : "OUR JOURNEY"}
            </p>
            <h2 className="story-heading mb-4 text-[28px] font-extrabold leading-[1.08] tracking-tight text-white sm:mb-6 sm:text-[44px]">
              {isArabic ? "قصة نماء وثقة متواصلة" : "Our Story"}
            </h2>
            <div className="story-paragraphs space-y-4 text-[14px] leading-[1.65] text-[#AAB4C3] sm:space-y-5 sm:text-[17px]">
              <p>
                {isArabic
                  ? "تأسست شركة المسار لتلبية الطلب المتزايد على التوريدات الكهربائية عالية الكفاءة في القطاعات السكنية والتجارية والصناعية داخل المملكة العربية السعودية."
                  : "AL MASAR was established to address the expanding requirement for dependable, certified electrical procurement solutions across Saudi Arabia's residential, commercial, and infrastructure sectors."}
              </p>
              <p>
                {isArabic
                  ? "على مر السنين، وسعنا شبكة توزيعنا لتشمل كبرى المصانع والعلامات التجارية العالمية، مما يضمن حصول عملائنا على أجود المواد بأعلى المعايير وفي الوقت المحدد."
                  : "Over the years, we have scaled our regional distribution footprint and strengthened partnerships with leading global manufacturers, ensuring consistent inventory availability and swift response times."}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
