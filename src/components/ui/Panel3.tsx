"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Panel3() {
  return (
    <motion.div
      initial={{
        rotate: 2.5,
      }}
      whileInView={{
        rotate: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="
        w-[95%] max-w-[1400px] h-[300px] md:h-[670px]
        my-16
        relative
        flex flex-col
        items-center
        justify-between
        gap-5
        p-4
        bg-[var(--background)]
        shadow-[0_4px_10px_#0000003D]
      "
    >
      <div className="relative w-full h-[90%]  ">
        <Image
          src="/banner/panel_image_3.png"
          alt="panel image"
          width={1000}
          height={1000}
          className="object-cover w-full h-full  "
          priority
        />
      </div>

      <h4 className="text-dark text-center text-xs! md:text-[16px]! flex-1 font-medium!">
        Panel
      </h4>
    </motion.div>
  );
}
