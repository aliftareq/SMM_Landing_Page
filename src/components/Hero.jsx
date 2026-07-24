/* eslint-disable @next/next/no-img-element */
"use client";

import Navbar from "./Navbar";
import { motion } from "framer-motion";
import heroImage from "../assets/images/hero-image.png";
import { UserRound, LockKeyhole } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fff8f3]"
    >
      {/* Background Gradient Layer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #fff8f3 0%, #ffe9dd 40%, #ffcdb0 75%, #ffb092 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(248,92,0,0.4) 0%, rgba(248,92,0,0.15) 15%, rgba(248,92,0,0) 35%)",
        }}
      />

      {/* Decorative Vector Art */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute" style={{ top: "20%", right: "16%" }}>
          <div
            className="absolute rounded-full bg-white"
            style={{
              top: 0,
              left: 0,
              width: "9px",
              height: "9px",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 22px 8px rgba(255,140,100,0.5)",
            }}
          />

          <div
            className="absolute"
            style={{
              top: 0,
              left: 0,
              width: "260px",
              height: "1px",
              transformOrigin: "left center",
              transform: "rotate(-40deg)",
              background:
                "linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 85%)",
            }}
          />
        </div>

        <div className="absolute" style={{ top: "23%", right: "11%" }}>
          <div
            className="absolute rounded-full bg-white"
            style={{
              top: 0,
              left: 0,
              width: "8px",
              height: "8px",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 20px 7px rgba(255,140,100,0.45)",
            }}
          />

          <div
            className="absolute"
            style={{
              top: 0,
              left: 0,
              width: "210px",
              height: "1px",
              transformOrigin: "left center",
              transform: "rotate(-40deg)",
              background:
                "linear-gradient(to right, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 85%)",
            }}
          />
        </div>
      </div>

      {/* Navbar */}

      <div className="fixed top-0 left-0 w-full z-100">
        <Navbar />
      </div>

      {/* Hero Content */}

      <div
        className="
          relative
          z-10
          container
          mx-auto
          px-6
          pt-36
          pb-16
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-stretch
            gap-8
            lg:gap-10
            max-w-6xl
            mx-auto
          "
        >
          {/* LEFT CONTENT */}

          <motion.div
            className="w-full lg:w-[55%]"
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <h1
              className="
                text-4xl
                md:text-5xl
                font-extrabold
                text-gray-900
                leading-tight
              "
            >
              Grow Faster with SMM
              <br />
              PANEL Across Every
              <br />
              <span>Social Platform</span>
            </h1>

            <p
              className="
                mt-6
                text-gray-600
                max-w-md
              "
            >
              SMM PANEL helps you grow on Instagram, TikTok, YouTube, Facebook,
              X, Spotify, Telegram, Discord, Twitch, and more with fast
              delivery, affordable pricing, and reliable SMM services.
            </p>

            {/* LOGIN FORM */}

            <div className="mt-7">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-black">
                    User Name
                  </label>

                  <div
                    className="
                      mt-2
                      h-10
                      border
                      border-orange-400
                      rounded-xl
                      bg-white
                      flex
                      items-center
                      px-4
                      text-sm
                      text-gray-500
                    "
                  >
                    <div className="flex items-center gap-2">
                      <UserRound
                        size={16}
                        strokeWidth={1.8}
                        className="text-gray-500"
                      />

                      <span>user name</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-black">
                    Password
                  </label>

                  <div
                    className="
                      mt-2
                      h-10
                      border
                      border-orange-400
                      rounded-xl
                      bg-white
                      flex
                      items-center
                      justify-between
                      px-4
                      text-sm
                      text-gray-500
                    "
                  >
                    <div className="flex items-center gap-2">
                      <LockKeyhole
                        size={16}
                        strokeWidth={1.8}
                        className="text-gray-500"
                      />

                      <span>********</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="
                  flex
                  justify-between
                  items-center
                  mt-3
                  text-xs
                "
              >
                <label className="flex items-center gap-2">
                  <span
                    className="
                      w-3
                      h-3
                      border
                      border-orange-400
                      rounded-full
                    "
                  />
                  Remember me
                </label>

                <span className="text-red-500">Forgot password?</span>
              </div>

              <div
                className="
                  flex
                  gap-4
                  mt-6
                "
              >
                <button
                  className="
                    w-1/2
                    font-bold
                    h-10
                    rounded-xl
                    text-white
                    text-sm
                    bg-[linear-gradient(90deg,#FBBD08_0%,#F47B20_25%,#C4272E_45%,#8B1A4A_70%,#3D1053_100%)]
                  "
                >
                  Sign In
                </button>

                <button
                  className="
                    w-1/2
                    h-10
                    rounded-xl
                    border
                    font-bold
                    border-orange-400
                    bg-white
                    text-sm
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >
                  <GoogleIcon className="w-5 h-5" />
                  Sign In with Google
                </button>
              </div>

              <p
                className="
                  mt-3
                  text-xs
                  text-gray-600
                "
              >
                Don&apos;t have an account?
                <span
                  className="
                    text-orange-500
                    ml-1
                    font-medium
                    underline
                  "
                >
                  Create an Account
                </span>
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            className="
              w-full
              lg:w-[45%]
              flex
              justify-center
              lg:justify-end
            "
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            <div
              className="
                relative
                w-full
                h-full
                min-h-125
              "
            >
              <img
                src={heroImage.src}
                alt="Character"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  rounded-3xl
                "
              />

              {/* Google Review Badge */}

              <div
                className="
                  absolute
                  top-20
                  left-0
                  bg-white
                  rounded-xl
                  shadow-lg
                  px-4
                  py-2
                  flex
                  items-center
                  gap-2
                  z-10
                "
              >
                <GoogleIcon className="w-5 h-5" />

                <div>
                  <div className="text-yellow-400 text-xs leading-none">
                    ★★★★★
                  </div>

                  <div className="text-xs text-gray-500">4.9 Reviews</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GoogleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />

      <path
        fill="#34A853"
        d="M12 23c2.97 0 2.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />

      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z"
      />

      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
