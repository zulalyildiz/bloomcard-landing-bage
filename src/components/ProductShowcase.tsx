"use client";
import Image from "next/image";
import appScreen from "../assets/images/appScreen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const {scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"]
  });
  const rotateX = useTransform(scrollYProgress, [0,1], [15,0])
  const opacity = useTransform(scrollYProgress, [0,1], [.5, 1])
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#def241] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Gelişmiş Yönetim Paneli
        </h2>
        <div className='max-w-xl mx-auto'>
          <p className="text-center mt-5 text-xl text-white/70">
            Tüm bilgilerinizi kolayca güncelleyebilmeniz için tasarlandı
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
        <Image
          src={appScreen} 
          alt="Dashboard" 
          className="mt-14"
          ref = {appImage}
        />
        </motion.div>
      </div>
      

    </div>
  );
};
