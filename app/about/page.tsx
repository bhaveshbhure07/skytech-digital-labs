import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description:
    "Learn about SkyTech Digital Labs, a remote internship platform focused on practical execution and measurable skill development.",
};

const pillars = [
  {
    title: "Execution Over Theory",
    description:
      "Participants work on practical assignments that mirror real workflows and delivery standards.",
  },
  {
    title: "Structured Accountability",
    description:
      "The program follows milestones, reviews, and evaluation checkpoints that keep progress visible.",
  },
  {
    title: "Professional Outcomes",
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
            A focused remote internship platform built to help students develop practical, career-ready skills.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {SITE_NAME} provides remote internship programs designed for measurable progress through practical
              assignments, guided reviews, and structured evaluation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Founded by Bhavesh Bhure and operating from Tumsar, Maharashtra, India, our focus is to create a
              professional training environment with clear expectations and real execution standards.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Enable students to transition from theoretical understanding to practical capability by completing real
              tasks under structured guidance.
            </p>
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Important Clarification</h3>
              <p className="text-gray-700">
                {SITE_NAME} is not a placement agency and does not guarantee employment offers.
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
