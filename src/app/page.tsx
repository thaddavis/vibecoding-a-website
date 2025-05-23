"use client";

import { Bot, Code, Zap } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { LogoCarousel } from "@/components/LogoCarousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-red-800 text-white">
          <HeroSection />
        </section>

        {/* Opt-in/Lead Magnet Section */}
        <section className="bg-white text-grey py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-col items-center">
            <form className="flex flex-col sm:flex-row gap-2 justify-center mb-8 w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full rounded-l-full-sm border border-red-800 text-grey placeholder-grey focus:outline-none focus:ring-2 focus:ring-red-800"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full rounded-r-full-sm bg-red-500 text-white font-semibold hover:bg-red-800 transition-all"
              >
                Join Newsletter
              </button>
            </form>
          </div>
        </section>

        {/* Social Proof / Trust Badges Section */}
        <section className="bg-red-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <LogoCarousel />
          </div>
        </section>

        {/* Benefits List Section */}
        <section className="bg-white text-grey py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-col items-center">
            <ul className="flex flex-col md:flex-row justify-center gap-4 text-base mb-8">
              <li>Save 10+ hours/week</li>
              <li>Boost revenue by 30%</li>
              <li>No technical skills required</li>
            </ul>
          </div>
        </section>

        {/* Scroll Cue Section */}
        <section className="bg-red-800 text-white py-8">
          <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-col items-center">
            <a href="#next-section" className="block text-3xl animate-bounce">↓</a>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24 bg-white text-grey">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI-Powered Solutions</h3>
                <p className="text-grey">
                  Leverage cutting-edge artificial intelligence to automate and optimize your business processes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Custom Development</h3>
                <p className="text-grey">
                  Tailored software solutions designed to meet your specific business needs and challenges.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Rapid Implementation</h3>
                <p className="text-grey">
                  Quick deployment and seamless integration of automation solutions into your existing workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-red-800 text-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <button
              onClick={() => {
                window.location.href = "https://cal.com/cmdlabs";
              }}
              className="inline-flex h-10 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-red-800 border border-red-800 shadow transition-all duration-200 hover:bg-grey hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Book a Call
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
