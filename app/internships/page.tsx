
import type { Metadata } from "next";
import { GOOGLE_FORM_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Virtual Internship Learning Programs | ${SITE_NAME}`,
  description:
    "Explore our structured virtual internship programs focused on technology skill development in Data Science, AI, ML, Web Development, and Software Development.",
};

const domains = [
  { name: "AI Tools Intern", description: "Work with AI tools and automation" },
  { name: "Data Support Intern", description: "Data management and analysis" },
  { name: "HR Research Intern", description: "Human resources research" },
  { name: "Content & Social Intern", description: "Content creation and social media" },
  { name: "Operations Intern", description: "Business operations support" },
  { name: "Python Developer Intern", description: "Python programming projects" },
  { name: "Data Analytics Intern", description: "Data analysis and visualization" },
  { name: "Frontend Developer Intern", description: "Web development with modern frameworks" },
];

const structure = [
  { title: "Project-Based Assignments", detail: "Participants complete practical projects each week." },
  { title: "Weekly Progress Reviews", detail: "Progress is monitored through structured checkpoints." },
  { title: "Mentor Feedback", detail: "Focused review to improve quality and execution skills." },
  { title: "Final Evaluation", detail: "Final assessment based on delivery quality and consistency." },
];

const outcomes = [
  "Verified Internship Certificate",
  "Internship ID",
  "Performance Evaluation Report",
  "Letter of Recommendation (Top Performers)",
];

export default function InternshipsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-blue-700 to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="uppercase tracking-[0.16em] text-blue-100 text-xs font-semibold mb-4">Programs</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Virtual Internship Learning Programs</h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Build practical skills through structured programs with measurable evaluation and professional certification.
          </p>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Internship Domains</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Choose from our diverse range of internship programs designed to provide practical exposure in high-demand fields.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <p className="text-blue-100 mb-6">
            A registration fee of Rs 109 is charged for documentation, onboarding, and certification processing.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 mb-6 text-left">
            <p className="text-white font-medium mb-3">Stipend & Interview Process:</p>
            <ul className="text-blue-100 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>Stipend opportunities are performance-based</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>Only top-performing participants may receive an opportunity to appear for an evaluation interview</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>Candidates who clear the interview may be considered for performance-based stipend opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>Stipend is not guaranteed and depends on interview performance</span>
              </li>
            </ul>
          </div>
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

