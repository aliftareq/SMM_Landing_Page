/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import magazine from "../assets/icons/magazine.png";
import twitter from "../assets/icons/twitter.png";
import youtube from "../assets/icons/youtube.png";

const services = [
  {
    icon: twitter,
    name: "Twitter",
    rating: "(2,725)",
    price: "$189.95 per month",
    desc: "(500 to 5,000 followers, likes, and retweets)",
  },
  {
    icon: instagram,
    name: "Instagram",
    rating: "(2,725)",
    price: "$145.95 per month",
    desc: "(10,000 real Instagram followers, and real engagement)",
  },
  {
    icon: facebook,
    name: "Facebook",
    rating: "(2,725)",
    price: "$139.95 per month",
    desc: "(1,000 to 10,000 real Facebook followers, likes, and video views)",
  },
  {
    icon: youtube,
    name: "YouTube",
    rating: "(2,725)",
    price: "$189.95 per month",
    desc: "(220+ real YouTube subscribers, video views, likes and shares)",
  },
  {
    icon: magazine,
    name: "Magazine Placement",
    rating: "(2,725)",
    price: "$250.00",
    desc: "(Full Page, Q&A Interview, Photo Shoot)",
  },
];

function ServiceCard({ item }) {
  return (
    <div
      className="
        w-78.5
        max-sm:w-[calc(100vw-48px)]
        h-90
        bg-white
        rounded-[20px]
        border
        border-[#DFE0E4]
        p-6
        flex
        flex-col
        justify-between
        items-center
        text-center
        shrink-0
      "
    >
      <div className="flex flex-col items-center">
        <div
          className="
            w-14
            h-14
            flex
            items-center
            justify-center
          "
        >
          <img
            src={item.icon.src}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>

        <h3
          className="
            mt-5
            font-outfit
            text-[18px]
            font-semibold
            leading-6.75
            text-black
          "
        >
          {item.name}
        </h3>

        <div
          className="
            mt-5
            flex
            items-center
          "
        >
          <span className="text-[#FF9800] text-[22px]">★★★★</span>

          <span className="text-[#BFC5D0] text-[22px]">★</span>

          <span
            className="
              ml-3
              text-[12px]
              text-gray-600
            "
          >
            {item.rating}
          </span>
        </div>

        <p
          className="
            mt-3
            font-outfit
            text-[18px]
            font-bold
            text-black
          "
        >
          {item.price}
        </p>
      </div>

      <div className="w-full">
        <div
          className="
            w-full
            min-h-14.5
            rounded-lg
            bg-[#DDF5EB]
            px-4
            py-3
            flex
            items-center
            justify-center
            text-center
            text-[11px]
            text-gray-600
          "
        >
          {item.desc}
        </div>

        <button
          className="
            mt-5
            w-full
            h-10
            rounded-full
            text-white
            text-[14px]
            font-medium
            bg-linear-to-r
            from-[#FFB800]
            via-[#F04B24]
            to-[#4B075A]
          "
        >
          Buy now
        </button>
      </div>
    </div>
  );
}

export default function PromotionServices() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const slidePositions = isMobile
    ? [0, -334, -668, -1002, -1336]
    : [0, -350, -700];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFF9F3]
        py-20
      "
    >
      <div
        className="
          max-w-3xl
          mx-auto
          px-5
          text-center
        "
      >
        <h2
          className="
            text-[34px]
            md:text-[42px]
            font-semibold
            leading-tight
            text-black
          "
        >
          Promotion Services for
          <br />
          Every Stage of Your Growth
        </h2>

        <p
          className="
            mt-5
            text-sm
            md:text-base
            text-gray-600
          "
        >
          Supporting artists, creators, businesses, and brands with professional
          promotion across social media, music, radio, digital publications, and
          marketing channels.
        </p>
      </div>

      <div
        className="
          mt-12
          overflow-hidden
          cursor-grab
          active:cursor-grabbing
        "
      >
        <motion.div
          drag="x"
          dragConstraints={{
            left: isMobile ? -1336 : -700,
            right: 0,
          }}
          animate={{
            x: slidePositions[activeSlide],
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          onDragEnd={(event, info) => {
            if (info.offset.x < -80) {
              setActiveSlide((prev) =>
                Math.min(prev + 1, slidePositions.length - 1),
              );
            }

            if (info.offset.x > 80) {
              setActiveSlide((prev) => Math.max(prev - 1, 0));
            }
          }}
          className="
            flex
            gap-5
            w-max
            pl-6
            md:pl-16
          "
        >
          {services.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </motion.div>
      </div>

      <div
        className="
          flex
          justify-center
          gap-2
          mt-8
        "
      >
        {slidePositions.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`
              h-2
              rounded-full
              transition-all
              ${
                activeSlide === index
                  ? "w-6 bg-linear-to-r from-[#FFB800] to-[#4B075A]"
                  : "w-4 bg-gray-300"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}
