"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, MessageCircle, Send, Paperclip } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Branch } from "@/types/branch";
import { whatsappHref } from "@/lib/phone";
import { products } from "@/data/products";

interface ContactFormProps {
  branches: Branch[];
  selectedBranch?: Branch;
}

export default function ContactForm({ branches, selectedBranch }: ContactFormProps) {
  const { isArabic } = useLanguage();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    mobile: "",
    email: "",
    product: "",
    projectType: "",
    message: "",
    agreed: true,
  });

  const [fileName, setFileName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const productSlug = searchParams.get("product");
    const variantCode = searchParams.get("variant");

    if (productSlug) {
      const foundProduct = products.find(
        (p) => p.slug === productSlug || p.title.toLowerCase() === productSlug.toLowerCase()
      );
      const productTitle = foundProduct ? foundProduct.title : productSlug;

      let initialText = productTitle;
      if (variantCode) {
        initialText = `${productTitle} — ${variantCode}`;
      }

      setFormData((prev) => {
        if (!prev.product) {
          return { ...prev, product: initialText };
        }
        return prev;
      });
    }
  }, [searchParams]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) return;
    setSubmitted(true);
  };

  const mainBranch = selectedBranch || branches[0];

  const whatsappMessage = `Hello AL MASAR (${mainBranch.name}),

Name: ${formData.name || "N/A"}
Company: ${formData.companyName || "N/A"}
Mobile: ${formData.mobile || "N/A"}
Email: ${formData.email || "N/A"}
Product/Category: ${formData.product || "General Enquiry"}
Project Type: ${formData.projectType || "Standard"}
${fileName ? `Attached File: ${fileName}\n` : ""}
Requirements: ${formData.message || "Requesting quotation and material availability."}`;

  return (
    <div className="contact-form-block rounded-2xl border border-white/[0.08] bg-[#0D1727] p-4 sm:rounded-3xl sm:p-7 sm:shadow-xl">
      <div className="contact-form-title">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] sm:text-[11px] bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
          {isArabic ? "طلب تسعيرة" : "ONLINE ENQUIRY"}
        </span>
        <h2 className="mt-1.5 text-[22px] font-black text-white sm:mt-2 sm:text-3xl">
          {isArabic ? "طلب عرض سعر" : "Request a Quote"}
        </h2>
        <p className="mt-1 text-[12px] leading-relaxed text-[#AAB4C3] sm:text-sm">
          {isArabic
            ? "يرجى تعبئة النموذج أدناه وسيقوم فريقنا بالرد عليكم في أسرع وقت."
            : "Fill in your project specifications below and our team will get back to you promptly."}
        </p>
      </div>

      {submitted ? (
        <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center sm:mt-8 sm:rounded-2xl sm:p-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h4 className="mt-4 text-lg font-bold text-white">
            {isArabic ? "تم استلام طلبكم بنجاح" : "Your enquiry has been prepared."}
          </h4>
          <p className="mt-2 text-sm text-slate-300">
            {isArabic
              ? "شكراً لتواصلكم مع شركة المسار. يمكنك أيضاً إرسال الطلب عبر واتساب للمتابعة الفورية."
              : "Thank you for reaching out to AL MASAR. You can also send this request via WhatsApp for instant processing."}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {mainBranch.phones[0] ? (
              <a
                href={whatsappHref(mainBranch.whatsapp || mainBranch.phones[0], whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 sm:h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] px-6 text-sm font-bold text-white shadow-lg transition hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{isArabic ? "إرسال عبر الواتساب" : "Send via WhatsApp"}</span>
              </a>
            ) : null}
            <button
              onClick={() => {
                setSubmitted(false);
                setFileName("");
                setFormData({
                  name: "",
                  companyName: "",
                  mobile: "",
                  email: "",
                  product: "",
                  projectType: "",
                  message: "",
                  agreed: true,
                });
              }}
              className="inline-flex h-10 sm:h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-bold text-white transition hover:bg-white/10"
            >
              {isArabic ? "إرسال طلب آخر" : "Send Another Enquiry"}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:mt-6 sm:gap-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="contact-form-field min-w-0">
              <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
                {isArabic ? "الاسم الكامل *" : "Full Name *"}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={isArabic ? "مثال: أحمد الغامدي" : "e.g. Ahmed Al-Ghamdi"}
                className="h-11 w-full min-w-0 rounded-lg border border-white/10 bg-[#0B1424] px-3 text-[13px] text-white outline-none transition-all duration-250 sm:h-12 sm:rounded-[12px] sm:px-4 sm:text-base focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)] placeholder:text-[#AAB4C3]/40"
              />
            </div>
            <div className="contact-form-field min-w-0">
              <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
                {isArabic ? "اسم الشركة" : "Company Name"}
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder={isArabic ? "مثال: شركة المقاولات" : "e.g. Al Masar Contracting"}
                className="h-11 w-full min-w-0 rounded-lg border border-white/10 bg-[#0B1424] px-3 text-[13px] text-white outline-none transition-all duration-250 sm:h-12 sm:rounded-[12px] sm:px-4 sm:text-base focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)] placeholder:text-[#AAB4C3]/40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="contact-form-field min-w-0">
              <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
                {isArabic ? "رقم الجوال *" : "Phone Number *"}
              </label>
              <input
                type="tel"
                required
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                placeholder="05X XXX XXXX"
                className="h-11 w-full min-w-0 rounded-lg border border-white/10 bg-[#0B1424] px-3 text-[13px] text-white outline-none transition-all duration-250 sm:h-12 sm:rounded-[12px] sm:px-4 sm:text-base focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)] placeholder:text-[#AAB4C3]/40 dir-ltr text-left"
              />
            </div>
            <div className="contact-form-field min-w-0">
              <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
                {isArabic ? "البريد الإلكتروني" : "Email Address"}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="h-11 w-full min-w-0 rounded-lg border border-white/10 bg-[#0B1424] px-3 text-[13px] text-white outline-none transition-all duration-250 sm:h-12 sm:rounded-[12px] sm:px-4 sm:text-base focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)] placeholder:text-[#AAB4C3]/40 dir-ltr text-left"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="contact-form-field min-w-0">
              <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
                {isArabic ? "المنتج / الفئة" : "Product / Category"}
              </label>
              <input
                type="text"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                placeholder={isArabic ? "مثال: أنابيب EMT 3/4 بوصة" : "e.g. EMT Conduit 3/4 inch"}
                className="h-11 w-full min-w-0 rounded-lg border border-white/10 bg-[#0B1424] px-3 text-[13px] text-white outline-none transition-all duration-250 sm:h-12 sm:rounded-[12px] sm:px-4 sm:text-base focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)] placeholder:text-[#AAB4C3]/40"
              />
            </div>
            <div className="contact-form-field min-w-0">
              <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
                {isArabic ? "نوع المشروع" : "Project Type"}
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="h-11 w-full min-w-0 rounded-lg border border-white/10 bg-[#0B1424] px-3 text-[13px] text-white outline-none transition-all duration-250 sm:h-12 sm:rounded-[12px] sm:px-4 sm:text-base focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)] cursor-pointer"
              >
                <option value="" className="bg-[#0B1424]">
                  {isArabic ? "اختر نوع المشروع" : "Select Project Type"}
                </option>
                <option value="Commercial" className="bg-[#0B1424]">
                  {isArabic ? "مشروع تجاري" : "Commercial Project"}
                </option>
                <option value="Industrial" className="bg-[#0B1424]">
                  {isArabic ? "مشروع صناعي" : "Industrial Project"}
                </option>
                <option value="Residential" className="bg-[#0B1424]">
                  {isArabic ? "مبنى سكني" : "Residential Building"}
                </option>
                <option value="Contracting Wholesale" className="bg-[#0B1424]">
                  {isArabic ? "مقاولات وجملة" : "Contracting & Wholesale"}
                </option>
              </select>
            </div>
          </div>

          <div className="contact-form-field min-w-0">
            <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
              {isArabic ? "الرسالة / المتطلبات" : "Message / Requirements"}
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={
                isArabic
                  ? "اذكر التفاصيل أو الكميات المطلوبة أو المواصفات الفنية..."
                  : "Please detail your required quantities, sizes, or technical specifications..."
              }
              className="w-full min-w-0 min-h-[140px] rounded-[12px] border border-white/10 bg-[#0B1424] p-4 text-base text-white outline-none transition-all duration-250 focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)] placeholder:text-[#AAB4C3]/40 resize-y"
            />
          </div>

          {/* File Upload Attachment */}
          <div className="contact-form-field min-w-0">
            <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
              {isArabic ? "إرفاق جداول الكميات (BOQ) / قائمة المنتجات (اختياري)" : "Attach BOQ / Product List (Optional)"}
            </label>
            <div className="relative">
              <input
                type="file"
                id="boq-file-upload"
                accept=".pdf,.xlsx,.docx,.jpg,.png"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="boq-file-upload"
                className="flex h-12 w-full min-w-0 cursor-pointer items-center gap-3 rounded-[12px] border border-dashed border-white/20 bg-[#0B1424] px-4 text-xs font-semibold text-[#AAB4C3] transition hover:border-[#6EA8FF]/50 hover:bg-[#142033]"
              >
                <Paperclip className="h-4 w-4 text-[#6EA8FF] shrink-0" />
                <span className="truncate max-w-full min-w-0">
                  {fileName
                    ? fileName
                    : isArabic
                      ? "اختر ملفاً (PDF, XLSX, DOCX, JPG, PNG)"
                      : "Attach BOQ file (PDF, XLSX, DOCX, JPG, PNG)"}
                </span>
              </label>
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="contact-form-field flex items-center gap-3 mt-1">
            <input
              type="checkbox"
              id="agree-contact"
              checked={formData.agreed}
              onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
              className="h-4 w-4 rounded accent-[#6EA8FF] cursor-pointer"
            />
            <label htmlFor="agree-contact" className="text-xs text-[#AAB4C3] cursor-pointer select-none">
              {isArabic
                ? "أوافق على التواصل معي بشأن هذا الاستفسار"
                : "I agree to be contacted regarding this enquiry"}
            </label>
          </div>

          <div className="contact-form-field mt-3">
            <button
              type="submit"
              disabled={!formData.agreed}
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] px-8 text-sm font-bold text-white shadow-lg shadow-[#8A63E8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-50"
            >
              <span>{isArabic ? "إرسال الاستفسار ←" : "Send Enquiry  "}</span>
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

