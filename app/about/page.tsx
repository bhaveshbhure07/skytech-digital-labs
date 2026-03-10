import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description:
    "Learn about SkyTech Digital Labs, a technology-focused skill development initiative providing virtual internship programs.",
};

const pillars = [
  {
    title: "Practical Skill Development",
    description:
      "Participants work on practical projects that mirror real industry workflows and delivery standards.",
  },
  {
    title: "Structured Learning Path",
    description:
      "The program follows milestones, reviews, and evaluation checkpoints that keep progress visible.",
  },
  {
    title: "Professional Certification",
    description:
      "Successful participants receive completion documentation aligned with performance quality.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-blue-700 to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="uppercase tracking-[0.16em] text-blue-100 text-xs font-semibold mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{SITE_NAME}</h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            A technology-focused skill development initiative helping students gain practical exposure to modern technologies.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {SITE_NAME} is a technology-focused skill development initiative based in Maharashtra, India.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The platform focuses on providing structured virtual internship programs that help students bridge the gap between academic learning and practical industry experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our programs aim to provide exposure to modern technology tools, project-based learning, and career readiness guidance.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Location</h2>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-slate-900">Tumsar, Bhandara District</p>
                  <p className="text-gray-600">Maharashtra, India</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Important Clarification</h3>
              <p className="text-gray-700">
                {SITE_NAME} provides educational skill development programs and is not a placement agency. We do not guarantee employment offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Defines Our Program</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((item) => (
              <div key={item.title} className="glass card-hover rounded-2xl p-7">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

