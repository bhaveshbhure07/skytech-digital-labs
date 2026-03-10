import type { Metadata } from "next";
import { GOOGLE_FORM_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `How It Works | ${SITE_NAME}`,
  description: "Understand the internship journey from application to certification.",
};

const steps = [
  {
    step: 1,
    title: "Submit Application",
    description: "Complete the official form and choose your preferred internship domain.",
  },
  {
    step: 2,
    title: "Application Review",
    description: "Your profile is reviewed for domain fit, commitment level, and readiness.",
  },
  {
    step: 3,
    title: "Shortlisting and Interview",
    description: "Shortlisted candidates move to interview and selection screening.",
  },
  {
    step: 4,
    title: "Program Onboarding",
    description: "Selected participants receive onboarding details and task workflow instructions.",
  },
  {
    step: 5,
    title: "Execution and Certification",
    description: "Complete assignments, pass evaluation, and receive program completion credentials.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-blue-700 to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="uppercase tracking-[0.16em] text-blue-100 text-xs font-semibold mb-4">Process</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-blue-100 text-lg">A transparent internship journey from start to finish.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            {steps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-7">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-950">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start?</h2>
          <p className="text-slate-300 mb-8">
            Submit your application and begin a structured path to practical, job-relevant experience.
          </p>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
