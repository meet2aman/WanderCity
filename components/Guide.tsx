"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Guide = () => {
  return (
    <section className="flexCenter flex-col ">
      <div className="  padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are Here For Your
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold:64 xl:max-w-[390px] ">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Discover the tapestry of India's rich heritage, vibrant cultures,
            and breathtaking landscapes. Let our guide lead you through the
            hidden gems and iconic landmarks, painting a vivid picture of this
            incredible land. Unearth the magic that lies within the heart of
            India's tourist treasures.
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full ">
        <Image
          src="/boat.png "
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <motion.div
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20"
        >
          <Image
            alt="track"
            src="/meter.svg"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20  mr-1">Destination</p>
                <p className="bold-16  text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Dalhaousie</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20  ">Start Track</p>
              <p className="bold-20 mt-2 whitespace-nowrap ">Delhi</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guide;
