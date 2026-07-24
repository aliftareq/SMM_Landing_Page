"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

import footerbg from "../assets/images/footer-bg.png";

import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import youtube from "../assets/icons/youtube.png";
import linkedin from "../assets/icons/linkedin.png";

const socialLinks = [
  { icon: facebook, href: "#", alt: "Facebook" },
  { icon: instagram, href: "#", alt: "Instagram" },
  { icon: twitter, href: "#", alt: "Twitter / X" },
  { icon: linkedin, href: "#", alt: "LinkedIn" },
  { icon: youtube, href: "#", alt: "YouTube" },
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Services", href: "#" },
  { label: "FAQ", href: "#" },
];

const companyLinks = [
  { label: "Terms Of Services", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Contact Us", href: "#" },
];

const contactInfo = [
  { icon: Mail, text: "info@smmpanel.com" },
  { icon: Phone, text: "+880 1400715037" },
  { icon: MapPin, text: "4093 Overlook Drive, Richmond, IN 47374" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={footerbg}
          alt=""
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      <div className="max-w-[1200px] w-[90%] mx-auto pt-16 pb-10">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold">SMM Panel</h3>
            <p className="mt-4 text-sm leading-[1.7] text-white/70 max-w-[280px]">
              SMM PANEL is a leading and reliable social media marketing
              platform committed to providing fast, effective, and premium
              growth solutions across all popular social networks.
            </p>

            <h4 className="mt-8 text-base font-semibold">Follow Us</h4>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center hover:opacity-80 transition"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-base font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-base font-semibold">Company</h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-base font-semibold">Contact Info</h4>
            <ul className="mt-4 space-y-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 shrink-0 rounded-md bg-[#D8630A] flex items-center justify-center">
                      <Icon size={14} className="text-white" />
                    </span>
                    <span className="text-sm text-white/80 leading-[1.5]">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-4 text-center">
          <p className="text-xs md:text-sm text-white/70">
            © 2026 HQ Promo. We are not affiliated with any social media
            platforms mentioned on this website. We only provide social media
            marketing services.
          </p>
        </div>
      </div>
    </footer>
  );
}
