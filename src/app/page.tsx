"use client";

import { Bot, Code, Zap } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { LogoCarousel } from "@/components/LogoCarousel";
import { OptInForm } from "@/components/OptInForm";

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
            <div className="relative">
              <OptInForm />
            </div>
          </div>
        </section>

        {/* Social Proof / Trust Badges Section */}
        <section className="bg-red-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <LogoCarousel />
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
                <h3 className="text-xl font-bold">Technical Solutions</h3>
                <p className="text-grey">
                  Leverage cutting-edge technology to automate and optimize your business processes.
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
                  Quick deployment and seamless integration into your existing workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Cue Section */}
        <section className="bg-red-800 text-white py-8">
          <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-col items-center">
            <span className="block text-3xl animate-bounce">↓</span>
          </div>
        </section>

        {/* Benefits List Section */}
        <section id="next-section" className="bg-white text-grey py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-col items-center">
            <ul className="flex flex-col md:flex-row justify-center gap-4 text-base mb-8">
              <li>Save 10+ hours/week</li>
              <li>Boost revenue by 30%</li>
              <li>No technical skills required</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-red-800 text-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <button
              onClick={() => {
                window.open("https://cal.com/cmdlabs", "_blank");
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
