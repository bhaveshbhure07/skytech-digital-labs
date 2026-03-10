import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import CTASection from "../components/CTASection";
import { GOOGLE_FORM_URL } from "@/lib/site";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Practical Project Experience",
    description: "Work on structured assignments simulating real industry workflows.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Performance-Based Evaluation",
    description: "Weekly task evaluation and progress tracking for skill development.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Professional Certification",
    description: "Receive verified certificate and performance report upon successful completion.",
  },
];

const internshipDomains = [
  { name: "AI Tools Intern", description: "Work with AI tools and automation" },
  { name: "Data Support Intern", description: "Data management and analysis" },
  { name: "HR Research Intern", description: "Human resources research" },
  { name: "Content & Social Intern", description: "Content creation and social media" },
  { name: "Operations Intern", description: "Business operations support" },
  { name: "Python Developer Intern", description: "Python programming projects" },
  { name: "Data Analytics Intern", description: "Data analysis and visualization" },
  { name: "Frontend Developer Intern", description: "Web development with modern frameworks" },
];

const howItWorks = [
  { step: 1, title: "Apply for the Program", description: "Submit your application and choose your preferred skill development area." },
  { step: 2, title: "Get Program Access", description: "Receive onboarding materials and access to learning resources." },
  { step: 3, title: "Work on Assigned Projects", description: "Complete practical projects under guided supervision and mentorship." },
  { step: 4, title: "Complete Evaluation", description: "Undergo structured assessment based on project quality and consistency." },
  { step: 5, title: "Receive Certificate", description: "Get your verified internship certificate and performance report." },
];

const faqs = [
  { question: "Who should apply for this skill development program?", answer: "This program is best for students and recent graduates who want practical, guided execution experience instead of theory-only learning." },
  { question: "Is the program remote and structured?", answer: "Yes. It is fully remote with clearly defined weekly tasks, submission timelines, and evaluation checkpoints." },
  { question: "How is participant performance evaluated?", answer: "Performance is evaluated on task quality, consistency, communication, and deadline discipline throughout the program cycle." },
  { question: "What do participants receive after completion?", answer: "Participants who complete program requirements receive a verified internship certificate and a structured performance summary." },
  { question: "Is stipend guaranteed for all applicants?", answer: "No. Stipend is merit-based and only available to exceptional performers who clear the evaluation interview." },
  { question: "How can I start the application process?", answer: "Click Apply and submit the official form with accurate details. Shortlisted candidates are contacted for the next stage." },
];

const programPolicies = [
  { title: "Educational Purpose", description: "The internship program is designed for educational and skill development purposes.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { title: "Registration Fee", description: "A registration fee of Rs 109 is charged for documentation, onboarding, and certification processing.", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
  { title: "No Employment Guarantee", description: "Participation in the internship does not guarantee stipend or employment.", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
  { title: "Evaluation Interview", description: "Top-performing participants may receive an opportunity to appear for an evaluation interview.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Stipend Consideration", description: "Candidates who clear the interview may be considered for performance-based stipend opportunities.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Digital Certificate", description: "Certificates are issued digitally after successful completion of the program.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Virtual Internship Program</h2>
            <p className="text-lg text-gray-600 mb-8">SkyTech Digital Labs offers structured 30-day virtual internship programs aimed at helping students gain hands-on experience in emerging technology domains.</p>
            <p className="text-lg text-gray-600">The program focuses on skill development, project-based learning, and industry exposure.</p>
          </div>
        </div>
      </section>
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose <span className="gradient-text">SkyTech Digital Labs</span>?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide a structured learning experience that focuses on practical execution, not just theory.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (<FeatureCard key={index} {...feature} />))}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Internship Domains</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from our diverse range of internship programs designed to provide practical exposure in high-demand fields.</p>
            <p className="text-blue-600 mt-2 font-medium">Click on any domain to apply now</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {internshipDomains.map((domain, index) => (
              <a key={index} href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="glass card-hover p-6 rounded-xl text-center hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{domain.name}</h3>
                <p className="text-sm text-gray-600">{domain.description}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Apply Now <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How the Program Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A transparent workflow with clearly defined stages, timelines, and certification criteria.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-white font-bold">{item.step}</span></div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Performance-Based Opportunities</h2>
            <p className="text-lg text-gray-600 mb-4">SkyTech Digital Labs encourages innovation and project participation.</p>
            <p className="text-lg text-gray-600 mb-6">Exceptional interns may receive performance-based stipend opportunities depending on their project contributions and overall participation during the program.</p>
            <div className="inline-block bg-green-50 border border-green-200 rounded-lg px-6 py-4">
              <p className="text-green-800 font-semibold">Stipend Range: Rs 10,000 - Rs 20,000 per month</p>
              <p className="text-green-600 text-sm mt-1">*Available for top performers after evaluation interview</p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
      <section className="section bg-slate-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-blue-300 uppercase tracking-[0.16em] text-xs font-semibold mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-300">Clear answers to help you evaluate the program with confidence.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-xl border border-slate-800 bg-slate-900/80 px-6 py-5 transition-all duration-300 hover:border-blue-400/50">
                <summary className="cursor-pointer list-none text-base md:text-lg font-semibold text-white flex items-center justify-between gap-4">{item.question}<span className="text-blue-300 transition-transform duration-300 group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-slate-300 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Program Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programPolicies.map((policy, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={policy.icon} /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{policy.title}</h3>
                    <p className="text-sm text-gray-600">{policy.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Program Disclaimer</h3>
            <p className="text-gray-600">SkyTech Digital Labs provides technology learning and skill development initiatives designed for educational purposes. Internship programs are intended to provide practical exposure to modern technology tools and project-based learning.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

