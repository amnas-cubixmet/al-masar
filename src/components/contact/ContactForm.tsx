"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import type { Branch } from "@/types/branch";
import { whatsappHref } from "@/lib/phone";

interface ContactFormProps {
  branches: Branch[];
  selectedBranch: Branch;
}

export default function ContactForm({ branches, selectedBranch }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    companyName: "",
    branchId: selectedBranch.id,
    product: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const currentBranch = branches.find((b) => b.id === formData.branchId) || selectedBranch;

  const whatsappMessage = `Hello AL MASAR ${currentBranch.name},

Name: ${formData.name || "N/A"}
Mobile: ${formData.mobile || "N/A"}
Company: ${formData.companyName || "N/A"}
Product/Requirement: ${formData.product || "General Enquiry"}

Message: ${formData.message || "I would like product pricing and availability information."}`;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#151E2D] p-6 sm:p-8">
      <div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6993CF]">
          ENQUIRY FORM
        </span>
        <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
          Send Us an Enquiry
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          Fill out your details below and our team will get back to you promptly.
        </p>
      </div>

      {submitted ? (
        <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h4 className="mt-4 text-lg font-bold text-white">Your enquiry has been prepared.</h4>
          <p className="mt-2 text-sm text-slate-300">
            Thank you for contacting AL MASAR YELLOW ({currentBranch.name}).
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {currentBranch.whatsapp ? (
              <a
                href={whatsappHref(currentBranch.whatsapp, whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 min-h-[44px] items-center gap-2 rounded-xl bg-[#22C55E] px-5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Send via WhatsApp</span>
              </a>
            ) : null}
            <Button
              variant="outline"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  mobile: "",
                  email: "",
                  companyName: "",
                  branchId: selectedBranch.id,
                  product: "",
                  message: "",
                });
              }}
            >
              Send Another Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Full Name *"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Ahmed Al-Ghamdi"
            />
            <Input
              label="Mobile Number *"
              required
              type="tel"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              placeholder="05X XXX XXXX"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@company.com"
            />
            <Input
              label="Company Name"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="e.g. Al Masar Contracting"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Select
              label="Preferred Branch *"
              value={formData.branchId}
              onChange={(e) => setFormData({ ...formData, branchId: e.target.value })}
            >
              {branches.map((b) => (
                <option key={b.id} value={b.id} className="bg-[#151E2D] text-white">
                  {b.name}
                </option>
              ))}
            </Select>

            <Input
              label="Product / Requirement"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              placeholder="e.g. EMT Conduit 3/4 inch"
            />
          </div>

          <Textarea
            label="Message / Specifications"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Please detail your required quantities, sizes, or technical specifications..."
          />

          <div className="mt-2 flex justify-end">
            <Button type="submit" variant="primary" className="w-full sm:w-auto">
              <span>Send Enquiry</span>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
