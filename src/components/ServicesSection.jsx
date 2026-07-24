"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import youtube from "../assets/icons/youtube.png";
import tiktok from "../assets/icons/tiktok.png";
import linkedin from "../assets/icons/linkedin.png";
import telegram from "../assets/icons/telegram.png";
import discord from "../assets/icons/discord.png";
import spotify from "../assets/icons/spotify.png";
import soundcloud from "../assets/icons/soundcloud.png";
import snapchat from "../assets/icons/snapchat.png";
import traffic from "../assets/icons/traffic.png";

import Avatar from "../assets/images/avatar pic.png";

export default function ServicesSection() {
  const platforms = [
    { name: "Facebook", icon: facebook },
    { name: "Instagram", icon: instagram },
    { name: "X (Twitter)", icon: twitter },
    { name: "YouTube", icon: youtube },
    { name: "TikTok", icon: tiktok },
    { name: "LinkedIn", icon: linkedin },
    { name: "Telegram", icon: telegram },
    { name: "Discord", icon: discord },
    { name: "Spotify", icon: spotify },
    { name: "SoundCloud", icon: soundcloud },
    { name: "Snapchat", icon: snapchat },
    { name: "Website Traffic", icon: traffic },
  ];

  return (
    <section
      id="services"
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
        "
      >
        {/* HEADER */}

        <div
          className="
            text-center
            mb-10
          "
        >
          <div
            className="
              flex
              justify-center
              items-center
              gap-2
              text-sm
              font-bold
              text-black
              mb-4
            "
          >
            <span className="text-[#ff9d00]">✦</span>
            our services
          </div>

          <h2
            className="
              text-[32px]
              md:text-[38px]
              font-bold
              text-black
              leading-tight
            "
          >
            Powerful SMM Services for Fast Growth
          </h2>

          <p
            className="
              mt-4
              max-w-162.5
              mx-auto
              text-sm
              text-gray-500
              leading-relaxed
            "
          >
            Explore our comprehensive range of social media marketing services
            designed to help you grow your presence across all major platforms.
            From Facebook to TikTok, we&apos;ve got you covered.
          </p>
        </div>

        {/* PLATFORM BUTTONS */}

        <motion.div
          initial={{
            opacity: 0,
            y: -40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-6
            gap-3
            mb-8
          "
        >
          {platforms.map((item, index) => (
            <button
              key={item.name}
              className={`
                h-12.5
                rounded-md
                border
                flex
                items-center
                justify-center
                gap-2
                px-2
                text-[13px]
                font-semibold
                transition-all

                ${
                  index === 0
                    ? `
                  text-white
                  border-none
                  bg-linear-to-r
                  from-[#ffbd08]
                  via-[#f47b20]
                  to-[#37092a]
                  `
                    : `
                  bg-white
                  text-black
                  border-[#f4b08d]
                  `
                }
              `}
            >
              {/* HEXAGON ICON */}

              <div
                className="
                  relative
                  w-8.5
                  h-8.5
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <div
                  className="
                    absolute
                    w-8.5
                    h-8.5
                    bg-black
                  "
                  style={{
                    clipPath:
                      "polygon(50% 0%,92% 25%,92% 75%,50% 100%,8% 75%,8% 25%)",
                  }}
                />

                <div
                  className="
                    absolute
                    w-8.25
                    h-8.25
                    bg-white
                  "
                  style={{
                    clipPath:
                      "polygon(50% 0%,92% 25%,92% 75%,50% 100%,8% 75%,8% 25%)",
                  }}
                />

                <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="
                    relative
                    z-10
                    object-contain
                  "
                />
              </div>

              <span className="whitespace-nowrap">{item.name}</span>
            </button>
          ))}
        </motion.div>

        {/* SERVICE CONTENT CARD */}

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-gray-200
            p-5
            md:p-8
            grid
            lg:grid-cols-2
            gap-10
            items-center
          "
        >
          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              w-full
              h-62.5
              md:h-87.5
              lg:h-103
              rounded-2xl
              overflow-hidden
              relative
              flex
              justify-center
              items-end
            "
            style={{
              background:
                "linear-gradient(145deg,#DF681B 0%,#D04A17 25%,#9C0D13 55%,#37092A 100%)",
            }}
          >
            <Image
              src={Avatar}
              alt="Avatar"
              fill
              className="
                object-contain
                object-bottom
              "
            />
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="
              pr-2
            "
          >
            <h3
              className="
                text-[22px]
                font-bold
                text-black
                mb-4
              "
            >
              Facebook SMM Panel
            </h3>

            <p
              className="
                text-gray-600
                text-[14px]
                leading-relaxed
                mb-7
              "
            >
              Facebook is still the biggest social media platform in Bangladesh
              with millions of active users. Our Facebook SMM Panel helps you
              increase page likes, post engagement, and video views quickly. It
              is perfect for businesses, shops, and creators. You can grow your
              audience fast, get real attention, and improve your online
              presence with simple and effective services.
            </p>

            <button
              className="
                px-5
                py-3
                rounded-lg
                text-white
                font-medium
                text-sm
                bg-[linear-gradient(90deg,#FBBD08_0%,#F47B20_25%,#C4272E_45%,#8B1A4A_70%,#3D1053_100%)]
                flex
                items-center
                gap-2
              "
            >
              View Facebook Services
              <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
