import Link from "next/link";

export default function ContactSuccess() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4 py-16">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Thank you</h1>
        <p className="text-lg text-gray-700">
          We have received your message and will be in touch soon.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-[#1A1F24] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#2A2F35]"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
