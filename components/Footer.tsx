import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME, INSTAGRAM_URL, LINKEDIN_URL, TELEGRAM_URL, MSME_NUMBER } from "@/lib/site";
import { Instagram, Linkedin, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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

          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Follow Us</h3>
            <div className="flex flex-row space-x-4 md:justify-start">
              <Link 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8 text-gray-300 group-hover:text-pink-400 transition-colors duration-300" />
              </Link>
              <Link 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
              </Link>
              <Link 
                href={TELEGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                aria-label="Telegram"
              >
                <Send className="w-8 h-8 text-gray-300 group-hover:text-blue-500 transition-colors duration-300" />
              </Link>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <p className="text-sm text-gray-400 mb-2">
                Email: <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-blue-400">{CONTACT_EMAIL}</a>
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

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p className="text-gray-400 mb-2">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-gray-500">
            MSME Registered: {MSME_NUMBER}
          </p>
        </div>
      </div>
    </footer>
  );
}
