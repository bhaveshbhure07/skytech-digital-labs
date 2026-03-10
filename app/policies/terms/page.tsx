import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms and Conditions | ${SITE_NAME}`,
  description: "Terms and conditions for the SkyTech Digital Labs internship program.",
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-blue-700 to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms and Conditions</h1>
          <p className="text-blue-100 text-lg">Please review these terms before applying.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Program Nature</h2>
              <p className="text-gray-700">
                Participation in this internship program does not constitute employment. The program is designed for
                structured skill development and practical training.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Placement Disclaimer</h2>
              <p className="text-gray-700">
                {SITE_NAME} does not guarantee job offers or placement outcomes. The internship is focused on learning
                quality and practical execution.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Certification Criteria</h2>
              <p className="text-gray-700">
                Certification is issued to participants who complete required tasks and meet evaluation standards
                defined by the program.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Code of Conduct</h2>
              <p className="text-gray-700">
                Participants are expected to maintain professional conduct throughout the internship. Misconduct may
                lead to removal from the program.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Registration Fee</h2>
              <p className="text-gray-700">
                The registration fee of Rs 109 is non-refundable, except in valid duplicate payment or transaction
                failure cases covered under the refund policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
