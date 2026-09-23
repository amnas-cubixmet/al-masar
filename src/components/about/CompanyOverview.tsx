"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function CompanyOverview() {
  const { isArabic } = useLanguage();

  return (
    <section data-section="company-overview" className="relative w-full bg-[#07111F] py-10 text-white sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-10 lg:px-[7vw]">
        
        <div className="grid grid-cols-1 items-start gap-6 sm:gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          
          {/* Left Vertical Line Accent & Heading */}
          <div className="overview-heading-block relative border-l-2 border-[#8A63E8] pl-4 sm:pl-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent sm:mb-3 sm:text-[12px] sm:tracking-[0.24em]">
              {isArabic ? "التزامنا بالتفوق" : "OUR COMMITMENT"}
            </p>
            <h2 className="text-[28px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[40px]">
              {isArabic ? "توريد المشاريع بكل ثقة" : "Powering Projects with Confidence"}
            </h2>
          </div>

          {/* Right Editorial Paragraphs */}
          <div className="overview-paragraphs space-y-4 text-[14px] font-normal leading-[1.65] text-[#AAB4C3] sm:space-y-6 sm:text-[17px]">
            <p className="overview-p">
              {isArabic
                ? "تعد شركة المسار واحدة من أبرز الموردين المتخصصين في التجهيزات والمواد الكهربائية المعتمدة للمشاريع التجارية والصناعية والسكنية في جميع أنحاء المملكة العربية السعودية."
                : "AL MASAR is a dedicated electrical materials supplier, delivering certified products, competitive logistics, and seamless procurement solutions to contractors and enterprise projects throughout Saudi Arabia."}
            </p>
            <p className="overview-p">
              {isArabic
                ? "نحن نوفر أنظمة الأنابيب، إدارة الكابلات، قواطع التيار، والملحقات الصناعية مباشرة من كبرى العلامات التجارية العالمية والإقليمية لضمان الجودة والالتزام بالمواصفات."
                : "We source high-grade conduit systems, cable trays, circuit protection, wiring accessories, and industrial fittings directly from established regional and international manufacturers, ensuring full compliance with SASO standards."}
            </p>
            <p className="overview-p">
              {isArabic
                ? "من خلال الدعم الفني المستمر والشراكات طويلة الأمد، نضمن استمرارية أعمال عملائنا وتسليم المشاريع في المواعيد المحددة بكفاءة عالية."
                : "Through responsive technical support and transparent operations, we build enduring partnerships focused on project execution, reliability, and long-term customer success."}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
