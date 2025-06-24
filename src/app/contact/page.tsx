"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";


export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formEntries = Object.fromEntries(formData.entries());
    const body = new URLSearchParams(formEntries as Record<string, string>).toString();

    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    setFormSubmitted(true);
    event.currentTarget.reset();
    setIsChecked(false);
  };

  return (
    <div className="relative bg-customGray">
      {/* Top Image */}
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <Image
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full lg:top-0"
          src="/images/projectVI/bumblebee-cottage-main-street-burton-overy-6-66a36f3f24d12.webp"
          alt="Placeholder"
          width={1200}
          height={800}
          priority
        />
      </div>

      {/* Main Contact Section */}
      <div className="pb-8 pt-8 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="flex flex-col mt-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Contact Us</h2>
              <p>You can contact us via phone, WhatsApp messaging, or email.</p>
            </div>

            {/* Contact Form */}
            <div
              ref={sectionRef}
              className={`transition-all duration-1000 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <form
                name="contact"
                onSubmit={handleSubmit}
                className="mt-16"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-2.5 block w-full border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-customRed sm:text-sm"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="mt-2.5 block w-full border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-customRed sm:text-sm"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                      How can we help you? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-2.5 block w-full border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-customRed sm:text-sm"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="flex items-start text-sm">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        required
                        className="h-4 w-4 rounded border-gray-300 text-customRed focus:ring-customRed"
                      />
                      <span className="ml-2 text-gray-900">
                        I agree that my data is collected and stored.
                      </span>
                    </label>
                  </div>
                </div>

                <div className="mt-10 flex justify-start border-t border-gray-900/10 pt-8">
                  <button
                    type="submit"
                    disabled={!isChecked}
                    className="px-3.5 py-2.5 bg-[#55B6D9]  text-white text-sm font-semibold shadow-sm hover:bg-customRed focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                  >
                    Send message
                  </button>
                </div>
              </form>

              {/* Form success message */}
              {formSubmitted && (
                <p className="mt-6 text-green-600 text-sm">
                  Your message has been sent successfully!
                </p>
              )}

              {/* Contact Information */}
              <div className="mt-16 flex flex-col items-start space-y-4 text-gray-900">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Phone:</span>
                  <a href="tel:07710311165" className="hover:text-customRed">
                    Larry Lambert: 07710 311165
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Phone:</span>
                  <a href="tel:07866741261" className="hover:text-customRed">
                    Jason Wright: 07866 741261
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:info@lambertandwright.co.uk" className="hover:text-customRed">
                    info@lambertandwright.co.uk
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Address:</span>
                  <span>19 Warren Park Way, Leicester LE19 4SA</span>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-4">We Serve the Entire Midlands</h3>
                <p className="mb-6">
                  Whether you&apos;re in Leicestershire, Nottinghamshire, or anywhere else in the Midlands, we&apos;re here to bring your vision to life with expert property renovation and construction services.
                </p>
                <div className="w-full h-96">
                  <iframe
                    title="Midlands Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155440.56300528835!2d-1.3294966210923354!3d52.84471593002719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879f7c0f435c947%3A0xb924c7ff38bc4484!2sEast%20Midlands!5e0!3m2!1sen!2suk!4v1697373940732!5m2!1sen!2suk"
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
