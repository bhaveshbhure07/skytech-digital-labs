import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Refund Policy | ${SITE_NAME}`,
  description: "Refund policy for SkyTech Digital Labs internship program.",
};

export default function RefundPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-blue-700 to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Refund Policy</h1>
          <p className="text-blue-100 text-lg">Refunds are governed by the conditions below.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-4xl space-y-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Eligible Refund Cases</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Duplicate payment transactions</li>
              <li>Technical transaction failures with valid proof</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Request a Refund</h2>
            <p className="text-gray-700">
              Send your refund request from your registered email address to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 hover:underline">
                {CONTACT_EMAIL}
              </a>{" "}
              with payment proof and transaction details.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Processing Timeline</h2>
            <p className="text-gray-700">Approved refund requests are typically processed within 5-7 business days.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
