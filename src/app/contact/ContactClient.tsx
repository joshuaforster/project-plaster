"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "@/app/customComponents/buttons";
import { getCopyText, type CopyPayload } from "@/lib/contentful/copy";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface ContactClientProps {
  copy?: CopyPayload;
}

function getTelHref(phone: string): string {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export default function ContactClient({ copy }: ContactClientProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState("");

  const heading = getCopyText(copy, "heading", "Contact Project Plaster");
  const intro = getCopyText(
    copy,
    "intro",
    "Whether it is a small patch repair or a full house re-skim, we would be happy to hear from you. You can call, email or use the form below.",
  );

  const formLabels = {
    name: getCopyText(copy, "form.labels.name", "Name"),
    email: getCopyText(copy, "form.labels.email", "Email"),
    message: getCopyText(copy, "form.labels.message", "Message"),
    consent: getCopyText(
      copy,
      "form.labels.consent",
      "I agree that my data may be collected and stored to respond to my enquiry.",
    ),
    submitIdle: getCopyText(copy, "form.labels.submitIdle", "Send Message"),
    submitLoading: getCopyText(copy, "form.labels.submitLoading", "Sending..."),
  };

  const feedbackSuccess = getCopyText(
    copy,
    "form.feedback.success",
    "Thanks. Your message has been sent and we will be in touch soon.",
  );
  const feedbackErrorDefault = getCopyText(
    copy,
    "form.feedback.error",
    "Unable to submit your message. Please call or email us directly.",
  );

  const phoneLabel = getCopyText(copy, "details.phone.label", "Phone:");
  const phoneValue = getCopyText(copy, "details.phone.value", "07946 057841");
  const emailLabel = getCopyText(copy, "details.email.label", "Email:");
  const emailValue = getCopyText(copy, "details.email.value", "jack@projectplaster.com");
  const areasLabel = getCopyText(copy, "details.areas.label", "Areas Covered:");
  const areasValue = getCopyText(copy, "details.areas.value", "Norwich, Norfolk & Suffolk");

  const mapHeading = getCopyText(copy, "map.heading", "Where We Work");
  const mapIntro = getCopyText(
    copy,
    "map.intro",
    "We cover Norfolk and Suffolk, including Norwich, Wymondham, Ipswich and Lowestoft.",
  );
  const mapTitle = getCopyText(copy, "map.title", "Norfolk and Suffolk Map");

  const heroImageUrl = getCopyText(copy, "hero.imageUrl", "/images/jack1.webp");
  const heroImageAlt = getCopyText(
    copy,
    "hero.imageAlt",
    "Project Plaster working on a property in Norfolk",
  );

  const inputClasses =
    "mt-2 block h-11 w-full rounded-sm border border-gray-300 px-3 text-[#1A1F24] shadow-sm transition-colors focus:border-[#D7BFA4] focus:ring-2 focus:ring-inset focus:ring-[#D7BFA4]";
  const textareaClasses =
    "mt-2 block w-full rounded-sm border border-gray-300 px-3 py-2.5 text-[#1A1F24] shadow-sm transition-colors focus:border-[#D7BFA4] focus:ring-2 focus:ring-inset focus:ring-[#D7BFA4]";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        payload.append(key, value);
      }
    });

    setSubmitStatus("submitting");
    setSubmitError("");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error(feedbackErrorDefault);
      }

      setSubmitStatus("success");
      form.reset();
      setIsChecked(false);
    } catch (error) {
      setSubmitStatus("error");
      setSubmitError(
        error instanceof Error
          ? error.message
          : feedbackErrorDefault,
      );
    }
  };

  return (
    <div className="relative bg-white text-[#1A1F24]">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <Image
          className="h-64 w-full object-cover sm:h-80 lg:absolute lg:h-full lg:top-0"
          src={heroImageUrl}
          alt={heroImageAlt}
          width={1200}
          height={800}
          priority
        />
      </div>

      <div className="py-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="flex flex-col mt-4">
              <h1 className="text-4xl font-bold mb-4">{heading}</h1>
              <p className="text-lg">{intro}</p>
            </div>

            <div className="mt-12">
              <form
                name="contact"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label htmlFor="bot-field">
                    Don&apos;t fill this out if you&apos;re human:
                    <input
                      id="bot-field"
                      name="bot-field"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold">
                    {formLabels.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold">
                    {formLabels.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold">
                    {formLabels.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    minLength={15}
                    className={textareaClasses}
                  />
                </div>

                <div>
                  <label className="flex items-start text-sm">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => setIsChecked((prev) => !prev)}
                      required
                      className="h-4 w-4 border-gray-300 text-[#D7BFA4] focus:ring-[#D7BFA4]"
                    />
                    <span className="ml-2">
                      {formLabels.consent}
                    </span>
                  </label>
                </div>

                <Button
                  disabled={!isChecked || submitStatus === "submitting"}
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  {submitStatus === "submitting" ? formLabels.submitLoading : formLabels.submitIdle}
                </Button>
              </form>
              <div aria-live="polite" className="mt-4 text-sm">
                {submitStatus === "success" && (
                  <p className="text-green-700">
                    {feedbackSuccess}
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-700">{submitError}</p>
                )}
              </div>

              <div className="mt-16 space-y-4">
                <div>
                  <span className="font-semibold">{phoneLabel}</span>{" "}
                  <a href={getTelHref(phoneValue)} className="hover:text-[#D7BFA4]">
                    {phoneValue}
                  </a>
                </div>
                <div>
                  <span className="font-semibold">{emailLabel}</span>{" "}
                  <a href={`mailto:${emailValue}`} className="hover:text-[#D7BFA4]">
                    {emailValue}
                  </a>
                </div>
                <div>
                  <span className="font-semibold">{areasLabel}</span>{" "}
                  {areasValue}
                </div>
              </div>

              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-4">{mapHeading}</h2>
                <p className="mb-6">
                  {mapIntro}
                </p>
                <div className="w-full h-96 overflow-hidden shadow-md ring-1 ring-[#D7BFA4]/40">
                  <iframe
                    title={mapTitle}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d613463.3043177434!2d0.754!3d52.517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9b09f9b7cbff9%3A0x78b3ff2c32cfeb7d!2sNorfolk!5e0!3m2!1sen!2suk!4v1697373940732!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
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
