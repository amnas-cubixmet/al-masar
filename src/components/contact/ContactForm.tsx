"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  LoaderCircle,
  MessageCircle,
  Paperclip,
  Send,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Branch } from "@/types/branch";
import { company } from "@/data/company";
import { whatsappHref } from "@/lib/phone";
import { products } from "@/data/products";

interface ContactFormProps {
  branches: Branch[];
  selectedBranch?: Branch;
}

const gccCodes = [
  { code: "+966", country: "SA", flag: "🇸🇦" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+965", country: "KW", flag: "🇰🇼" },
  { code: "+974", country: "QA", flag: "🇶🇦" },
  { code: "+973", country: "BH", flag: "🇧🇭" },
  { code: "+968", country: "OM", flag: "🇴🇲" },
];

export default function ContactForm({
  branches,
  selectedBranch,
}: ContactFormProps) {
  const { isArabic } = useLanguage();
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [countryCode, setCountryCode] = useState("+966");
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

  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const productSlug = searchParams.get("product");
    const variantCode = searchParams.get("variant");

    if (productSlug) {
      const foundProduct = products.find(
        (product) =>
          product.slug === productSlug ||
          product.title.toLowerCase() === productSlug.toLowerCase()
      );

      const productTitle = foundProduct ? foundProduct.title : productSlug;
      const initialText = variantCode
        ? `${productTitle} — ${variantCode}`
        : productTitle;

      setFormData((prev) =>
        prev.product ? prev : { ...prev, product: initialText }
      );
    }
  }, [searchParams]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextFiles = Array.from(event.target.files || []).slice(0, 5);
    setFiles(nextFiles);
    setSubmitError("");
  };

  const mainBranch = selectedBranch || branches[0];

  const cleanedMobile = formData.mobile
    .replace(/[^0-9]/g, "")
    .replace(/^0+/, "");

  const fullMobile = cleanedMobile
    ? `${countryCode} ${cleanedMobile}`
    : "N/A";

  const attachmentNames =
    files.length > 0 ? files.map((file) => file.name).join(", ") : "";

  const whatsappMessage = `Hello AL MASAR,

Name: ${formData.name || "N/A"}
Company: ${formData.companyName || "N/A"}
Mobile: ${fullMobile}
Email: ${formData.email || "N/A"}
Product/Category: ${formData.product || "General Enquiry"}
Project Type: ${formData.projectType || "Standard"}
Branch: ${mainBranch.name}
${attachmentNames ? `Attached File(s): ${attachmentNames}\n` : ""}Requirements: ${formData.message || "Requesting quotation and material availability."}`;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!formData.agreed || submitting) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("companyName", formData.companyName);
      payload.append("countryCode", countryCode);
      payload.append("mobile", cleanedMobile);
      payload.append("email", formData.email);
      payload.append("product", formData.product);
      payload.append("projectType", formData.projectType);
      payload.append("message", formData.message);
      payload.append("branch", mainBranch.name);

      files.forEach((file) => {
        payload.append("attachments", file);
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !result?.ok) {
        throw new Error(
          result?.error ||
            (isArabic
              ? "تعذر إرسال الطلب. يرجى المحاولة مرة أخرى."
              : "Unable to send the enquiry. Please try again.")
        );
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : isArabic
            ? "تعذر إرسال الطلب. يرجى المحاولة مرة أخرى."
            : "Unable to send the enquiry. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setSubmitError("");
    setCountryCode("+966");
    setFiles([]);
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

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="contact-form-block rounded-2xl border border-white/[0.08] bg-[#0D1727] p-4 sm:rounded-3xl sm:p-7 sm:shadow-xl">
      <div className="contact-form-title">
        <span className="bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-[10px] font-bold uppercase tracking-[0.15em] text-transparent sm:text-[11px]">
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
            {isArabic
              ? "تم إرسال طلبكم بنجاح"
              : "Your enquiry has been sent successfully."}
          </h4>

          <p className="mt-2 text-sm text-slate-300">
            {isArabic
              ? "تم إرسال تفاصيل الطلب والمرفقات إلى فريقنا عبر البريد الإلكتروني. للمتابعة السريعة يمكنك التواصل عبر واتساب."
              : "Your enquiry details and attachments have been emailed to our team. For a faster response, you can also continue on WhatsApp."}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappHref(company.quoteWhatsapp, whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] px-6 text-sm font-bold text-white shadow-lg transition hover:brightness-110 sm:h-12"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{isArabic ? "متابعة عبر واتساب" : "Continue on WhatsApp"}</span>
            </a>

            <button
              type="button"
              onClick={resetForm}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-bold text-white transition hover:bg-white/10 sm:h-12"
            >
              {isArabic ? "إرسال طلب آخر" : "Send Another Enquiry"}
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-3 sm:mt-6 sm:gap-4"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="contact-form-field min-w-0">
              <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
                {isArabic ? "الاسم الكامل *" : "Full Name *"}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
                placeholder={isArabic ? "مثال: أحمد الغامدي" : "e.g. Ahmed Al-Ghamdi"}
                className="h-11 w-full min-w-0 rounded-lg border border-white/10 bg-[#0B1424] px-3 text-[13px] text-white outline-none transition-all duration-250 placeholder:text-[#AAB4C3]/40 focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)] sm:h-12 sm:rounded-[12px] sm:px-4 sm:text-base"
              />
            </div>

            <div className="contact-form-field min-w-0">
              <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
                {isArabic ? "اسم الشركة" : "Company Name"}
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(event) =>
                  setFormData({ ...formData, companyName: event.target.value })
                }
                placeholder={isArabic ? "مثال: شركة المقاولات" : "e.g. Al Masar Contracting"}
                className="h-11 w-full min-w-0 rounded-lg border border-white/10 bg-[#0B1424] px-3 text-[13px] text-white outline-none transition-all duration-250 placeholder:text-[#AAB4C3]/40 focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)] sm:h-12 sm:rounded-[12px] sm:px-4 sm:text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="contact-form-field min-w-0">
              <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
                {isArabic ? "رقم الجوال *" : "Phone Number *"}
              </label>

              <div className="flex min-w-0 gap-2" dir="ltr">
                <select
                  value={countryCode}
                  onChange={(event) => setCountryCode(event.target.value)}
                  aria-label={isArabic ? "رمز الدولة" : "Country code"}
                  className="h-11 w-[122px] shrink-0 rounded-lg border border-white/10 bg-[#0B1424] px-2 text-[12px] font-semibold text-white outline-none transition-all focus:border-[#8A63E8]/80 focus:bg-[#142033] sm:h-12 sm:w-[132px] sm:rounded-[12px] sm:text-sm"
                >
                  {gccCodes.map((item) => (
                    <option
                      key={item.code}
                      value={item.code}
                      className="bg-[#0B1424]"
                    >
                      {item.flag} {item.code}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  required
                  inputMode="tel"
                  value={formData.mobile}
                  onChange={(event) =>
                    setFormData({ ...formData, mobile: event.target.value })
                  }
                  placeholder={countryCode === "+966" ? "5X XXX XXXX" : "Phone number"}
                  className="h-11 min-w-0 flex-1 rounded-lg border border-white/10 bg-[#0B1424] px-3 text-left text-[13px] text-white outline-none transition-all duration-250 placeholder:text-[#AAB4C3]/40 focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)] sm:h-12 sm:rounded-[12px] sm:px-4 sm:text-base"
                />
              </div>
            </div>

            <div className="contact-form-field min-w-0">
              <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
                {isArabic ? "البريد الإلكتروني" : "Email Address"}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
                placeholder="name@company.com"
                className="h-11 w-full min-w-0 rounded-lg border border-white/10 bg-[#0B1424] px-3 text-left text-[13px] text-white outline-none transition-all duration-250 placeholder:text-[#AAB4C3]/40 focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)] sm:h-12 sm:rounded-[12px] sm:px-4 sm:text-base"
                dir="ltr"
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
                onChange={(event) =>
                  setFormData({ ...formData, product: event.target.value })
                }
                placeholder={isArabic ? "مثال: أنابيب EMT 3/4 بوصة" : "e.g. EMT Conduit 3/4 inch"}
                className="h-11 w-full min-w-0 rounded-lg border border-white/10 bg-[#0B1424] px-3 text-[13px] text-white outline-none transition-all duration-250 placeholder:text-[#AAB4C3]/40 focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)] sm:h-12 sm:rounded-[12px] sm:px-4 sm:text-base"
              />
            </div>

            <div className="contact-form-field min-w-0">
              <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
                {isArabic ? "نوع المشروع" : "Project Type"}
              </label>
              <select
                value={formData.projectType}
                onChange={(event) =>
                  setFormData({ ...formData, projectType: event.target.value })
                }
                className="h-11 w-full min-w-0 cursor-pointer rounded-lg border border-white/10 bg-[#0B1424] px-3 text-[13px] text-white outline-none transition-all duration-250 focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)] sm:h-12 sm:rounded-[12px] sm:px-4 sm:text-base"
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
              onChange={(event) =>
                setFormData({ ...formData, message: event.target.value })
              }
              placeholder={
                isArabic
                  ? "اذكر التفاصيل أو الكميات المطلوبة أو المواصفات الفنية..."
                  : "Please detail your required quantities, sizes, or technical specifications..."
              }
              className="min-h-[140px] w-full min-w-0 resize-y rounded-[12px] border border-white/10 bg-[#0B1424] p-4 text-base text-white outline-none transition-all duration-250 placeholder:text-[#AAB4C3]/40 focus:border-[#8A63E8]/80 focus:bg-[#142033] focus:shadow-[0_0_15px_rgba(138,99,232,0.25)]"
            />
          </div>

          <div className="contact-form-field min-w-0">
            <label className="mb-1 block text-[10px] font-bold text-[#AAB4C3] sm:mb-1.5 sm:text-xs">
              {isArabic
                ? "إرفاق جداول الكميات (BOQ) / قائمة المنتجات (اختياري)"
                : "Attach BOQ / Product List (Optional)"}
            </label>

            <div className="relative">
              <input
                ref={fileInputRef}
                type="file"
                id="boq-file-upload"
                accept=".pdf,.xlsx,.docx,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
                multiple
              />

              <label
                htmlFor="boq-file-upload"
                className="flex min-h-12 w-full min-w-0 cursor-pointer items-center gap-3 rounded-[12px] border border-dashed border-white/20 bg-[#0B1424] px-4 py-3 text-xs font-semibold text-[#AAB4C3] transition hover:border-[#6EA8FF]/50 hover:bg-[#142033]"
              >
                <Paperclip className="h-4 w-4 shrink-0 text-[#6EA8FF]" />
                <span className="min-w-0 flex-1 truncate">
                  {files.length > 0
                    ? files.map((file) => file.name).join(", ")
                    : isArabic
                      ? "اختر ملفات PDF, XLSX, DOCX, JPG أو PNG"
                      : "Choose PDF, XLSX, DOCX, JPG or PNG files"}
                </span>
              </label>

              <p className="mt-1.5 text-[10px] text-[#AAB4C3]/60">
                {isArabic
                  ? "حتى 5 ملفات، 10 ميجابايت لكل ملف."
                  : "Up to 5 files, maximum 10 MB per file."}
              </p>
            </div>
          </div>

          <div className="contact-form-field mt-1 flex items-center gap-3">
            <input
              type="checkbox"
              id="agree-contact"
              checked={formData.agreed}
              onChange={(event) =>
                setFormData({ ...formData, agreed: event.target.checked })
              }
              className="h-4 w-4 cursor-pointer rounded accent-[#6EA8FF]"
            />
            <label
              htmlFor="agree-contact"
              className="cursor-pointer select-none text-xs text-[#AAB4C3]"
            >
              {isArabic
                ? "أوافق على التواصل معي بشأن هذا الاستفسار"
                : "I agree to be contacted regarding this enquiry"}
            </label>
          </div>

          {submitError ? (
            <div
              role="alert"
              className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-xs text-red-200"
            >
              {submitError}
            </div>
          ) : null}

          <div className="contact-form-field mt-3">
            <button
              type="submit"
              disabled={!formData.agreed || submitting}
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] px-8 text-sm font-bold text-white shadow-lg shadow-[#8A63E8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  <span>{isArabic ? "جارٍ الإرسال..." : "Sending..."}</span>
                </>
              ) : (
                <>
                  <span>{isArabic ? "إرسال الاستفسار" : "Send Enquiry"}</span>
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
