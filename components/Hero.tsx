
import Link from "next/link";

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
          Technology Skill Development & Virtual Internship Programs
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-3xl mx-auto animate-fade-in-up delay-200">
          SkyTech Digital Labs provides structured virtual internship and skill development programs designed to help students gain practical exposure to modern technologies such as Data Science, Artificial Intelligence, and Web Development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300 mb-8">
          <Link
            href="/internships"
            className="btn-primary text-lg px-8 py-4"
          >
            Explore Programs
          </Link>
          <Link href="/how-it-works" className="btn-secondary text-lg px-8 py-4">
            How It Works
          </Link>
        </div>

        {/* Registration Fee Badge */}
        <div className="inline-block bg-blue-100 border border-blue-300 rounded-lg px-6 py-3 mb-8 animate-fade-in-up delay-300">
          <p className="text-blue-800 font-semibold">
            Registration Fee: <span className="text-blue-900">Rs 109</span>
          </p>
          <p className="text-blue-600 text-xs mt-1">
            *For documentation, onboarding & certification processing
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up delay-400">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">30-Day Structured Program</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">Practical Project Experience</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">Verified Internship Certificate</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">Performance-Based Stipend</span>
          </div>
        </div>

        {/* Compliance Text */}
        <p className="mt-8 text-sm text-gray-500 animate-fade-in-up delay-500">
          Educational skill development initiative designed for learning and project exposure.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

