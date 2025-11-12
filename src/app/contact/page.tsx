"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Fade-in on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        if (top < window.innerHeight * 0.75) setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form submission (demo / static)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    event.currentTarget.reset();
    setIsChecked(false);
  };

  return (
    <div className="relative bg-[#F5F5F4]">
      {/* Hero Image */}
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <Image
          className="h-64 w-full bg-gray-200 object-cover sm:h-80 lg:absolute lg:h-full lg:top-0"
          src="/images/jack1.webp"
          alt="Project Plaster working on a property in Norfolk"
          width={1200}
          height={800}
          priority
        />
      </div>

      {/* Contact Section */}
      <div className="py-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="flex flex-col mt-4">
              <h2 className="text-4xl font-bold tracking-tight text-[#1F2937] mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-[#3B464B]">
                Whether it’s a small patch repair or a full house re-skim, we’d love to hear from you.
                You can reach us by phone, WhatsApp, or through the form below.
              </p>
            </div>

            {/* Contact Form */}
            <div
              ref={sectionRef}
              className={`transition-all duration-1000 transform mt-12 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <form
                name="contact"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1F2937]">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-[#1F2937] shadow-sm focus:ring-2 focus:ring-inset focus:ring-[#C58C49]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1F2937]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-[#1F2937] shadow-sm focus:ring-2 focus:ring-inset focus:ring-[#C58C49]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1F2937]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 block w-full border border-gray-300 rounded-md px-3 py-2 text-[#1F2937] shadow-sm focus:ring-2 focus:ring-inset focus:ring-[#C58C49]"
                  />
                </div>

                <div>
                  <label className="flex items-start text-sm text-[#1F2937]">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      required
                      className="h-4 w-4 rounded border-gray-300 text-[#C58C49] focus:ring-[#C58C49]"
                    />
                    <span className="ml-2">
                      I agree that my data may be collected and stored to respond to my enquiry.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!isChecked}
                  className="w-full mt-4 rounded-md bg-[#1F2937] text-white py-2.5 font-semibold hover:bg-[#111827] transition-colors"
                >
                  Send Message
                </button>
              </form>

              {/* Success Message */}
              {formSubmitted && (
                <p className="mt-4 text-green-600 text-sm">
                  Thanks! Your message has been sent successfully.
                </p>
              )}

              {/* Contact Info */}
              <div className="mt-16 space-y-4 text-[#1F2937]">
                <div>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:07700123456" className="hover:text-[#C58C49]">
                    07700 123456
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:jack@projectplaster.co.uk" className="hover:text-[#C58C49]">
                    jack@projectplaster.co.uk
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Areas Covered:</span>{" "}
                  Norwich, Norfolk & Suffolk
                </div>
              </div>

              {/* Map */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4">Where We Work</h3>
                <p className="text-[#3B464B] mb-6">
                  We cover all of Norfolk and Suffolk — from Norwich and Wymondham to Ipswich and Lowestoft.
                </p>
                <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    title="Norfolk and Suffolk Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d613463.3043177434!2d0.754!3d52.517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9b09f9b7cbff9%3A0x78b3ff2c32cfeb7d!2sNorfolk!5e0!3m2!1sen!2suk!4v1697373940732!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}        