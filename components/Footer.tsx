import Link from "next/link";
import { CONTACT_EMAIL, GOOGLE_FORM_URL, SITE_NAME } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Programs Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Programs</h3>
            <div className="space-y-2">
              <Link href="/internships" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Internship Programs
              </Link>
              <Link href="/how-it-works" className="block text-gray-300 hover:text-blue-400 transition-colors">
                How It Works
              </Link>
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Legal</h3>
            <div className="space-y-2">
              <Link href="/policies/privacy" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/policies/terms" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/policies/refund" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
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
                Tumsar, Bhandara District<br />
                Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="mt-10 p-4 bg-slate-900/50 rounded-lg">
          <p className="text-gray-400 text-sm text-center">
            SkyTech Digital Labs provides educational skill development programs designed for practical exposure and learning.
          </p>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

