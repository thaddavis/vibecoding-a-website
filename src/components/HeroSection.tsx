import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 xl:py-48 bg-darkred text-white text-center">
      <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-col items-center">
        {/* Headline & Subheadline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Reimagine Your Business with AI-Powered Automation</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">Unlock efficiency, save time, and scale faster with our tailored automation solutions.</p>
        {/* Visual */}
        <div className="mb-8">
          <Image src="/cursive_c_512x512.png" alt="COMMAND LABS" width={220} height={220} className="rounded-lg shadow-lg mx-auto" referrerPolicy="no-referrer" />
        </div>
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/get-started" className="inline-flex h-12 items-center justify-center rounded-full bg-red-500 px-8 text-lg font-semibold text-white shadow hover:bg-red-800 transition-all">Get Started</Link>
          <Link href="/how-it-works" className="inline-flex h-12 items-center justify-center rounded-full border border-white px-8 text-lg font-semibold text-white hover:bg-white hover:text-black transition-all">See How It Works</Link>
        </div>
      </div>
    </section>
  );
} 