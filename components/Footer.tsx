import Link from "next/link";
import { CONTACT_EMAIL, GOOGLE_FORM_URL, SITE_NAME } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">{SITE_NAME}</h3>
            <p className="text-gray-300 mb-5">
              Structured remote internship programs designed for practical execution and measurable
              skill development.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <span className="font-semibold">Email:</span>
                <br />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-blue-400 transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>
                <span className="font-semibold">Location:</span>
                <br />
                Tumsar, Maharashtra, India
              </p>
              <p>
                <span className="font-semibold">Response Time:</span>
                <br />
                24-48 business hours
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/internships" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Internship Program
              </Link>
              <Link href="/how-it-works" className="block text-gray-300 hover:text-blue-400 transition-colors">
                How It Works
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
            <div className="mt-4 space-y-2">
              <Link href="/policies/refund" className="block text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Refund Policy
              </Link>
              <Link href="/policies/terms" className="block text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms and Conditions
              </Link>
              <Link href="/policies/privacy" className="block text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 text-center">
          <p className="text-gray-400">
            Copyright {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
