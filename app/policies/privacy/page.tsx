import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: "Privacy policy for SkyTech Digital Labs internship program.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-blue-700 to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-blue-100 text-lg">How we collect, use, and protect applicant data.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Data We Collect</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Education details</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">How We Use Data</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Communication related to internship application and program updates</li>
                <li>Application review and evaluation</li>
                <li>Program administration and support</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Third-Party Services</h2>
              <p className="text-gray-700">
                We may use trusted third-party tools such as Google Forms for application collection and payment
                gateway providers for transaction processing.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Data Security</h2>
              <p className="text-gray-700">
                We take reasonable administrative and technical measures to protect personal information. Data access is
                restricted to authorized personnel only.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Contact</h2>
              <p className="text-gray-700">
                For privacy concerns, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 hover:underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
