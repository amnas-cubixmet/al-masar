import type { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact Us | AL MASAR YELLOW Company",
  description:
    "Get in touch with AL MASAR YELLOW branches across Riyadh and Jeddah. Direct call lines, WhatsApp enquiries, Google Maps locations, and enquiry form.",
};

export default function ContactPage() {
  return <ContactView />;
}
