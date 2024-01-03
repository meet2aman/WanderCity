"use client";

import Image from "next/image";
import Button from "./Button";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { month, weekday } from "@/app/constants/constants.index";
import hover3d from "@/app/utils/hover";

const Hero = () => {
  const date = new Date();
  const year = date.getFullYear();
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const d = date.getDate();
  const day = weekday[date.getDay()];
  const months = month[date.getMonth()];
  // const months = date.getMonth() + 1;

  const heroRef = useRef<HTMLDivElement>(null);
  //@ts-ignore
  const hoverHero = hover3d(heroRef, {
    x: 30,
    y: -40,
    z: 30,
  });

  const { toast } = useToast();
  const [selectedId, setSelectedId] = React.useState(null);

  useEffect(() => {
    toast({
      title: "🎊 Welcome you Sir 🎊 ",
      description: `${day}, ${months} ${d}, ${year} at ${hours}:${minutes} ${ampm} | ⏰   Hope We can Serve You better !
      `,
    });
  }, []);

  //  whileHover={{ scale: 1.1 }}
  //   whileTap={{ scale: 1 }}
  return (
    <section
      ref={heroRef}
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 max-md:pb-4 md:gap-28 lg:py-20 xl:flex-row"
    >
      <div
        className="hero-map"
        style={{
          transform: hoverHero.transform,
          transition: hoverHero.transtion,
        }}
      />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          style={{
            transform: hoverHero.transform,
            transition: hoverHero.transtion,
          }}
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-10px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">
          India<span className="text-green-500">'</span>s Amazing places to
          Visit
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Discover the tapestry of{" "}
          <span className="text-green-500 font-semibold text-lg">
            India's rich heritage, vibrant cultures, and breathtaking
            landscapes.
          </span>{" "}
          Let our guide lead you through the hidden gems and iconic landmarks,
          painting a vivid picture of this incredible land. Unearth the magic
          that lies within the heart of India's tourist treasures.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative max-md:top-[-3rem] top-[3rem] flex flex-1 items-start">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ damping: 100, stiffness: 100 }}
          className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8"
        >
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Bharat as India</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
