import { GOOGLE_FORM_URL } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Real Experience?</h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Join a structured internship track with clear deliverables, evaluation checkpoints, and professional
          certification upon successful completion.
        </p>
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
