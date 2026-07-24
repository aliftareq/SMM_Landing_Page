"use client";

import { useEffect, useState } from "react";
import { LockKeyhole, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "API",
    href: "#api",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "#home";

      NAV_ITEMS.forEach((item) => {
        const section = document.querySelector(item.href);

        if (section) {
          const sectionTop = section.offsetTop - 150;

          const sectionBottom = sectionTop + section.offsetHeight;

          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = item.href;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="w-full flex justify-center pt-8">
        <div
          className={`
            w-[90%]
            max-w-300
            rounded-xl
            px-6
            py-3
            flex
            items-center
            justify-between
            transition-all
            duration-300

            ${
              scrolled
                ? `
                  bg-white/30
                  backdrop-blur-xl
                  border
                  border-white/40
                  shadow-lg
                `
                : `
                  bg-white
                `
            }

          `}
        >
          {/* Logo */}

          <a href="#home">
            <h1
              className="
                text-[24px]
                font-bold
                text-black
              "
            >
              SMM Panel
            </h1>
          </a>

          {/* Desktop Navigation */}

          <div
            className="
              hidden
              lg:flex
              items-center
              gap-8
            "
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`
                  text-[16px]
                  font-bold
                  transition-colors
                  duration-300

                  ${active === item.href ? "text-[#F47B20]" : "text-black"}

                `}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Sign In */}

          <button
            className="
              hidden
              lg:flex
              w-36
              h-12
              items-center
              justify-center
              gap-2
              px-6
              py-3
              rounded-xl
              whitespace-nowrap
              text-white
              text-[16px]
              font-medium
              bg-[linear-gradient(90deg,#FBBD08_0%,#F47B20_25%,#C4272E_45%,#8B1A4A_70%,#3D1053_100%)]
              shadow-[0_2px_6px_rgba(200,8,61,0.2),0_24.72px_32.26px_rgba(200,8,61,0.08)]
            "
          >
            <LockKeyhole size={20} strokeWidth={2} color="white" />

            <span className="font-bold">Sign In</span>
          </button>

          {/* Mobile Menu Button */}

          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay */}

      {open && (
        <div
          className="
            fixed
            inset-0
            bg-black/40
            z-40
          "
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-full
          w-70
          bg-white
          z-50
          p-8
          transform
          transition-transform
          duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}

        `}
      >
        <div
          className="
            flex
            justify-between
            items-center
          "
        >
          <h2 className="text-xl font-bold">SMM Panel</h2>

          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div
          className="
            flex
            flex-col
            gap-6
            mt-10
          "
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className={`
                font-bold
                transition-colors
                duration-300

                ${active === item.href ? "text-[#F47B20]" : "text-black"}

              `}
            >
              {item.label}
            </a>
          ))}

          <button
            className="
              mt-5
              w-full
              h-12
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              text-white
              font-bold
              bg-[linear-gradient(90deg,#FBBD08_0%,#F47B20_25%,#C4272E_45%,#8B1A4A_70%,#3D1053_100%)]
            "
          >
            <LockKeyhole size={20} />
            Sign In
          </button>
        </div>
      </aside>
    </>
  );
}
