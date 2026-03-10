import Link from "next/link";
import { GOOGLE_FORM_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up delay-100">
          Structured Remote Internship Programs
          <span className="block gradient-text">Engineered for Career-Ready Skills</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
          A high-accountability internship experience focused on practical execution, measurable
          progress, and professional outcomes across high-demand domains.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 animate-pulse-glow"
          >
            Apply for Internship
          </a>
          <Link href="/internships" className="btn-secondary text-lg px-8 py-4">
            View Program Details
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">8+</div>
            <div className="text-sm text-gray-600">Internship Domains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">30 Days</div>
            <div className="text-sm text-gray-600">Program Duration</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">Rs 10K-20K</div>
            <div className="text-sm text-gray-600">Stipend Opportunity</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">Certificate</div>
            <div className="text-sm text-gray-600">On Completion</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
