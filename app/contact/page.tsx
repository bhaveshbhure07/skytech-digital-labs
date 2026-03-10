import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us | ${SITE_NAME}`,
  description: "Get in touch with SkyTech Digital Labs for internship-related queries and support.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-blue-700 to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="uppercase tracking-[0.16em] text-blue-100 text-xs font-semibold mb-4">Support</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg">Our team is available to assist you with program questions.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
                  <p className="text-gray-600">Tumsar, Maharashtra, India</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Response Time</h3>
                  <p className="text-gray-600">24-48 business hours</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
