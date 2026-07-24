"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UserRoundPlus } from "lucide-react";

import addFund from "../assets/icons/add-fund.png";
import selectService from "../assets/icons/select-service.png";
import placeOrder from "../assets/icons/place-order.png";

const steps = [
  {
    step: "STEP 01",
    title: "SIGN UP FOR FREE",
    icon: UserRoundPlus, // lucide icon (unchanged)
    active: true,
    badgeColor: "#ff7a16",
    description:
      "Sign up for your account, fill in the required information, and get instant access to powerful social media growth services.",
  },
  {
    step: "STEP 02",
    title: "ADD FUNDS",
    image: addFund, // custom PNG icon (static import)
    active: false,
    badgeColor: "#dc2736",
    description:
      "Securely add funds to your account using your preferred payment method and keep your balance ready for instant orders.",
  },
  {
    step: "STEP 03",
    title: "SELECT SERVICE",
    image: selectService, // custom PNG icon (static import)
    active: false,
    badgeColor: "#941845",
    description:
      "Browse our wide range of social media services, choose the platform and package that fits your goals, then proceed with confidence.",
  },
  {
    step: "STEP 04",
    title: "PLACE YOUR ORDER",
    image: placeOrder, // custom PNG icon (static import)
    active: false,
    badgeColor: "#43205c",
    description:
      "Enter your target link, confirm your order, and watch your social media growth begin with fast, reliable delivery.",
  },
];

// Hexagon icon — renders either a lucide <Icon /> (step 1, gradient bg)
// or a custom PNG image (steps 2-4, white bg), same hexagon shape/size for all
function HexagonIcon({ Icon, image, active }) {
  return (
    <div className="relative z-20 mx-auto w-16 h-16 flex items-center justify-center">
      <div
        className={`absolute inset-0 ${
          active
            ? "bg-gradient-to-br from-[#ff9a3c] via-[#ff4d6d] to-[#7b2ff7]"
            : "bg-white border border-[#efefef] shadow-sm"
        }`}
        style={{
          clipPath:
            "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
        }}
      />
      {Icon ? (
        <Icon
          size={24}
          strokeWidth={2.2}
          className={`relative z-10 ${active ? "text-white" : "text-[#941845]"}`}
        />
      ) : (
        <Image
          src={image}
          alt=""
          width={28}
          height={28}
          className="relative z-10 object-contain"
        />
      )}
    </div>
  );
}

// The "bowl" vector: a wide, deep, symmetric curve traced from the Figma guide.
// Fill sits ABOVE the curve line (between the card's top edge and the dip).
// Same path reused on every card; only fill color/opacity changes.
function CardVector({ active }) {
  return (
    <svg
      aria-hidden
      className="absolute top-0 left-0 w-full pointer-events-none"
      style={{ height: "220px" }}
      viewBox="0 0 318 220"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 L0,20 C 70,190 248,190 318,20 L318,0 Z"
        fill={active ? "rgba(255,255,255,0.15)" : "rgba(109,109,109,0.2)"}
      />
    </svg>
  );
}

export default function WorkingProcess() {
  return (
    <section className="w-full bg-[#fffaf5] py-24 overflow-hidden">
      <div className="max-w-[1200px] w-[90%] mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-[16px] font-bold text-black">
            <span className="text-lg">✦</span> WORKING PROCESS
          </p>
          <h2 className="mt-4 text-[32px] md:text-[40px] font-bold leading-tight text-black">
            Easy Steps to Social Media
            <br />
            Growth By HQ PROMO
          </h2>
        </motion.div>

        {/* PROCESS AREA */}
        <div className="relative grid lg:grid-cols-4 md:grid-cols-2 gap-y-16 gap-x-6">
          {/* HORIZONTAL LINE BEHIND BADGES */}
          <div className="hidden lg:block absolute top-[26px] left-[8%] right-[8%] h-[1px] bg-black/80 z-0" />

          {steps.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 80,
                  damping: 14,
                }}
                className="relative z-10 pt-14"
              >
                {/* STEP BADGE */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -rotate-[18deg] px-5 py-[6px] rounded-full text-[11px] font-semibold tracking-wide text-white z-20 whitespace-nowrap shadow-sm"
                  style={{ backgroundColor: item.badgeColor }}
                >
                  {item.step}
                </div>

                {/* VERTICAL CONNECTOR */}
                <div
                  className="absolute top-[24px] left-1/2 w-[1px] h-[32px] z-10"
                  style={{ backgroundColor: item.badgeColor }}
                />

                {/* CARD — 318 x 387, radius 20, overflow hidden so the vector clips cleanly */}
                <div
                  className={`relative overflow-hidden mx-auto w-full max-w-[318px] h-[387px] rounded-[20px] border text-center ${
                    item.active
                      ? "bg-gradient-to-b from-black to-[#D8630A] border-white/10 text-white"
                      : "bg-white border-[#DFE0E4] text-black"
                  }`}
                >
                  <CardVector active={item.active} />

                  {/* Content — icon centered inside the vector shape, text unchanged below */}
                  <div className="relative z-10 px-8 pt-[50px]">
                    <HexagonIcon
                      Icon={item.icon}
                      image={item.image}
                      active={item.active}
                    />

                    <h3 className="mt-16 text-[18px] font-semibold uppercase tracking-wide">
                      {item.title}
                    </h3>

                    <p
                      className={`mt-5 text-[13px] leading-[1.6] ${
                        item.active ? "text-white/85" : "text-black/60"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
