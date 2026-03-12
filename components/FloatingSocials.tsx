"use client";

import Link from 'next/link';
import { Instagram, Linkedin, Send } from 'lucide-react';
import { INSTAGRAM_URL, LINKEDIN_URL, TELEGRAM_URL } from '@/lib/site';

const socials = [
  { icon: Instagram, href: INSTAGRAM_URL, label: 'Instagram' },
  { icon: Linkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
  { icon: Send, href: TELEGRAM_URL, label: 'Telegram' },
];

export default function FloatingSocials() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3 z-50 md:space-y-4 lg:bottom-8 lg:right-8">
      {socials.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-navy-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:-translate-y-1 group"
          aria-label={label}
        >
          <Icon className="w-6 h-6 md:w-7 md:h-7" />
        </Link>
      ))}
    </div>
  );
}
