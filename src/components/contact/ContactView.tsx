"use client";

import { Suspense } from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import QuickContact from "@/components/contact/QuickContact";
import BranchLocations from "@/components/contact/BranchLocations";
import ContactMap from "@/components/contact/ContactMap";
import ContactFAQ from "@/components/contact/ContactFAQ";
import FinalContactCTA from "@/components/contact/FinalContactCTA";
import ContactScrollAnimations from "@/components/contact/ContactScrollAnimations";
import { branches } from "@/data/branches";

export default function ContactView() {
  return (
    <ContactScrollAnimations>
      <main className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#07111F] pb-10 text-white sm:pb-16 lg:pb-20">
        {/* 1. Contact Hero */}
        <ContactHero />

        <div className="mx-auto w-full max-w-[1280px] px-5 pt-6 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
          {/* 2 & 3. Main 2-Column Contact Section: 40% Contact Info / 60% Form */}
          <div id="contact-form-section" className="grid grid-cols-1 gap-5 sm:gap-8 lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
            {/* Left Side — 40% Contact Details */}
            <div className="lg:col-span-5 h-full min-w-0">
              <ContactDetails branches={branches} />
            </div>

            {/* Right Side — 60% Contact Form */}
            <div className="lg:col-span-7 min-w-0">
              <Suspense fallback={<div className="text-[#6EA8FF] py-8 text-center">Loading enquiry form...</div>}>
                <ContactForm branches={branches} />
              </Suspense>
            </div>
          </div>

          {/* 4. Quick Contact Banner */}
          <QuickContact branches={branches} />

          {/* 5. Branch / Location Section */}
          <BranchLocations branches={branches} />

          {/* 6. Map Section */}
          <ContactMap />

          {/* 7. FAQ Section */}
          <ContactFAQ />

          {/* 8. Final CTA */}
          <FinalContactCTA branches={branches} />
        </div>
      </main>
    </ContactScrollAnimations>
  );
}

