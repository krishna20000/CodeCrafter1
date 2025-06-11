"use client";

import { MessageSquare } from 'lucide-react'; // Using MessageSquare as a stand-in for WhatsApp icon
import { cn } from '@/lib/utils';
import Link from 'next/link';

// A generic WhatsApp icon SVG as lucide-react doesn't have one.
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16.517 12.3604C16.2714 12.2476 15.3021 11.7788 15.0938 11.6983C14.8856 11.6177 14.7322 11.5708 14.5788 11.8486C14.4255 12.1264 13.9875 12.6604 13.8341 12.845C13.6808 13.0295 13.5274 13.0618 13.2818 12.949C13.0363 12.8361 12.1808 12.5464 11.1653 11.6604C10.3801 10.9673 9.86797 10.1042 9.71463 9.82643C9.56128 9.54863 9.69893 9.40475 9.81997 9.29191C9.92728 9.19033 10.0704 9.00023 10.2081 8.85079C10.3457 8.70134 10.3903 8.5885 10.4822 8.40406C10.574 8.21962 10.5274 8.06735 10.4507 7.92291C10.374 7.77847 10.0003 6.87841 9.79203 6.40956C9.59128 5.94956 9.38307 5.99084 9.22218 5.99084C9.14552 5.99084 8.99218 5.99084 8.83883 5.99084C8.68549 5.99084 8.42549 6.05212 8.21728 6.32992C8.00907 6.60772 7.42549 7.1417 7.42549 8.21962C7.42549 9.29753 8.23463 10.3432 8.37228 10.5277C8.50994 10.7121 10.0003 12.9809 12.1984 13.8614C12.7402 14.0968 13.1434 14.2285 13.4507 14.3301C13.9803 14.4934 14.409 14.4668 14.7546 14.1238C15.1484 13.7332 15.4255 13.2071 15.5631 12.949C15.7008 12.691 15.7008 12.5781 15.6546 12.4653C15.6084 12.3604 15.2052 12.2361 14.9596 12.1232L16.517 12.3604Z" />
  </svg>
);


export function WhatsAppButton() {
  const phoneNumber = "+910000000000"; // Replace with actual phone number
  const message = "Hello CodeCrafter! I'm interested in your website services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-xl",
        "hover:bg-green-600 transition-all duration-300 animate-pulse-glow",
        "focus:outline-none focus:ring-4 focus:ring-green-300"
      )}
      aria-label="Chat on WhatsApp"
      style={{ '--accent': '120 60% 50%' } as React.CSSProperties} // Green glow for WhatsApp
    >
      <WhatsAppIcon />
    </Link>
  );
}
