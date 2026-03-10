import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import CTASection from "../components/CTASection";
import { GOOGLE_FORM_URL } from "@/lib/site";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Real Project Exposure",
    description: "Work on structured assignments simulating real workflows.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Performance Based Evaluation",
    description: "Weekly task evaluation and progress tracking.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Professional Certification",
    description: "Receive certificate and performance report upon successful completion.",
  },
];

const domains = [
  { name: "AI Tools Intern", description: "Work with AI tools and automation" },
  { name: "Data Support Intern", description: "Data management and analysis" },
  { name: "HR Research Intern", description: "Human resources research" },
  { name: "Content & Social Intern", description: "Content creation and social media" },
  { name: "Operations Intern", description: "Business operations support" },
  { name: "Python Developer Intern", description: "Python programming projects" },
  { name: "Frontend Developer Intern", description: "Web development with modern frameworks" },
  { name: "Data Analytics Intern", description: "Data analysis and visualization" },
];

const faqs = [
  {
    question: "Who should apply for this internship program?",
    answer:
      "This program is best for students and recent graduates who want practical, guided execution experience instead of theory-only learning.",
  },
  {
    question: "Is the internship remote and structured?",
    answer:
      "Yes. It is fully remote with clearly defined weekly tasks, submission timelines, and evaluation checkpoints.",
  },
  {
    question: "How is participant performance evaluated?",
    answer:
      "Performance is evaluated on task quality, consistency, communication, and deadline discipline across the internship cycle.",
  },
  {
    question: "What do participants receive after completion?",
    answer:
      "Participants who complete program requirements receive a completion certificate and a structured performance summary.",
  },
  {
    question: "Is stipend guaranteed for all applicants?",
    answer:
      "No. Stipend is merit-based and only available to top performers who clear interview and selection criteria.",
  },
  {
    question: "How can I start the application process?",
    answer:
      "Click Apply and submit the official form with accurate details. Shortlisted candidates are contacted for the next stage.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose <span className="gradient-text">SkyTech Digital Labs</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a structured learning experience that focuses on practical execution, not
              just theory.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Built for Practical Learning - Not Just Theory
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our internship model focuses on execution. Participants complete guided tasks, submit
              deliverables and receive structured evaluation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Task-based assignments</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Weekly progress tracking</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Structured evaluation</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Professional certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Internship Domains</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of high-demand domains to kickstart your career.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => (
              <div key={index} className="glass card-hover p-6 rounded-xl text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{domain.name}</h3>
                <p className="text-sm text-gray-600">{domain.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transparent & Structured Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A transparent workflow with clearly defined stages, timelines, and certification criteria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Apply</h3>
              <p className="text-gray-600">Submit your application through our portal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Learn</h3>
              <p className="text-gray-600">Complete tasks and receive evaluation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Certificate</h3>
              <p className="text-gray-600">Receive your internship certificate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Registration Fee: Rs 109</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            This fee only makes the applicant eligible for the interview process. Stipend between
            Rs 10,000 - Rs 20,000 is available for top performers who pass the interview and
            selection process.
          </p>
          <p className="text-blue-200 text-sm mb-8">
            Stipend is performance-based and not guaranteed for all applicants.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Apply for Internship
          </a>
        </div>
      </section>

      <CTASection />

      <section className="section bg-slate-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-blue-300 uppercase tracking-[0.16em] text-xs font-semibold mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-300">
              Clear answers to help you evaluate the program with confidence.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-slate-800 bg-slate-900/80 px-6 py-5 transition-all duration-300 hover:border-blue-400/50"
              >
                <summary className="cursor-pointer list-none text-base md:text-lg font-semibold text-white flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-blue-300 transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-slate-300 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
