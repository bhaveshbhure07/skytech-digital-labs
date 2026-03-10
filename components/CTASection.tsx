
import { GOOGLE_FORM_URL } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Real Experience?</h2>
        <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
          Join a structured internship track with clear deliverables, evaluation checkpoints, and professional certification upon successful completion.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 inline-block">
          <p className="text-white font-medium">
            Registration Fee: <span className="font-bold">Rs 109</span>
          </p>
          <p className="text-blue-200 text-sm mt-1">
            *For documentation, onboarding & certification processing
          </p>
        </div>
        <div className="mt-2 mb-8">
          <p className="text-blue-200 text-sm">
            Interview opportunity for top performers only | Stipend: Rs 10,000 - Rs 20,000 per month for selected candidates
          </p>
        </div>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}

