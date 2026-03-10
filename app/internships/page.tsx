import type { Metadata } from "next";
import { GOOGLE_FORM_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Internship Program | ${SITE_NAME}`,
  description:
    "Explore our 30-day remote internship programs across AI, Data, HR, Content, Operations, Python, Frontend, and Analytics.",
};

const domains = [
  { name: "AI Tools & Automation", description: "Work with modern AI tools and workflow automation." },
  { name: "Data Support", description: "Handle structured data, reporting workflows, and data quality tasks." },
  { name: "HR Research", description: "Support people operations through process and research tasks." },
  { name: "Content & Social Media", description: "Create communication assets for digital channels." },
  { name: "Operations", description: "Assist with process tracking and operational coordination." },
  { name: "Python Development", description: "Build practical programming assignments in Python." },
  { name: "Frontend Development", description: "Develop responsive web interfaces using modern frameworks." },
  { name: "Data Analytics", description: "Analyze datasets and present insights through visual reports." },
];

const structure = [
  { title: "Task-Based Assignments", detail: "Participants complete practical assignments each week." },
  { title: "Weekly Progress Reviews", detail: "Progress is monitored through structured checkpoints." },
  { title: "Mid-Program Feedback", detail: "Focused review to improve quality and execution speed." },
  { title: "Final Evaluation", detail: "Final assessment based on delivery quality and consistency." },
];

const outcomes = [
  "Internship Certificate",
  "Internship ID",
  "Performance Evaluation Report",
  "Letter of Recommendation (Top Performers)",
];

export default function InternshipsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-blue-700 to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="uppercase tracking-[0.16em] text-blue-100 text-xs font-semibold mb-4">Program</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">30-Day Remote Internship Program</h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Build practical skills through a structured program with measurable evaluation and certification.
          </p>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Domains Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain) => (
              <div key={domain.name} className="glass card-hover p-6 rounded-xl text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{domain.name}</h3>
                <p className="text-sm text-gray-600">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Program Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {structure.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-950">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What Participants Receive</h2>
          <ul className="space-y-4">
            {outcomes.map((item) => (
              <li key={item} className="flex items-center space-x-3 text-slate-200">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-blue-700 to-cyan-700">
        <div className="container-custom text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-4">Registration Fee: Rs 109</h2>
          <p className="text-blue-100 mb-4">
            The fee only makes the applicant eligible for the interview and selection process.
          </p>
          <p className="text-blue-200 text-sm mb-8">
            Stipend is merit-based and available only to top performers after final selection.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
