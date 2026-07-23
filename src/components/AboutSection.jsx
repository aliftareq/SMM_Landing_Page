"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import heroImage from "../assets/images/hero-image.png";

export default function AboutSection() {
  const points = [
    "Fast Delivery with Smooth and Reliable Performance",
    "Real & High-Quality Engagement to Build Strong Social Proof",
    "Safe, Secure & High Retention for Long-Term Growth",
  ];

  return (
    <section
      className="
        w-full
        bg-[#fffaf5]
        py-24
      "
    >
      <div
        className="
          max-w-300
          w-[90%]
          mx-auto
          lg:translate-x-15
          grid
          lg:grid-cols-2
          gap-14
          items-stretch
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            flex
            flex-col
            justify-center
            order-2
            lg:order-1
          "
        >
          {/* Label */}
          <div
            className="
              flex
              items-center
              gap-2
              mb-5
            "
          >
            <span className="text-lg">✦</span>

            <p
              className="
                text-[12px]
                font-medium
                text-black
              "
            >
              About SMM PANEL
            </p>
          </div>

          {/* Heading */}
          <h2
            className="
              text-[38px]
              leading-[1.1]
              font-bold
              text-black
              mb-5
            "
          >
            Who We Are
          </h2>

          {/* Description */}
          <p
            className="
              max-w-130
              text-[15px]
              leading-[1.6]
              text-[#555]
              mb-8
            "
          >
            At SMM PANEL, we believe social media growth is more than just likes
            and followers. We provide fast, reliable, and affordable SMM
            services that help creators, businesses, agencies, and resellers
            build a stronger online presence across every major platform.
          </p>

          {/* Features */}
          <div
            className="
              flex
              flex-col
              gap-5
              mb-8
            "
          >
            {points.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <CheckCircle2
                  size={16}
                  className="
                    text-[#00d47e]
                    stroke-[2.5]
                  "
                />

                <p
                  className="
                    text-[14px]
                    text-[#555]
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            className="
              w-fit
              px-5
              py-3
              rounded-lg
              text-white
              text-[13px]
              font-semibold
              flex
              items-center
              gap-2
              bg-[linear-gradient(90deg,#FBBD08_0%,#F47B20_25%,#C4272E_45%,#8B1A4A_70%,#3D1053_100%)]
            "
          >
            Learn More About Us
            <span>✦</span>
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            flex
            items-center
            justify-center
            min-h-122.5
            order-1
            lg:order-2
          "
        >
          {/* Character */}
          <Image
            src={heroImage}
            alt="SMM Panel"
            className="
              relative
              z-10
              object-contain
              h-full
              w-auto
              max-h-157.5
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
