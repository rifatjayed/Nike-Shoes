import React, { useState } from "react";
import Shoe1 from "../assets/Shoes1.png";
import Shoe2 from "../assets/Shoes2.png";

import Shoe3 from "../assets/Shoes3.png";

import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Navbar from "./Navbar";
import { UpdateFollower } from "react-mouse-follower";
import { div } from "motion/react-client";

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },

    // hidden: {
    //   opacity: 0,
    //   x: 100,
    // },
    // show: {
    //   opacity: 1,
    //   x: 0,
    //   transition: {
    //     duration: 0.5,
    //     delay: delay,
    //     ease: easeInOut,
    //   },
    // },
    // exit: {
    //   opacity: 0,
    //   x: -50,
    //   transition: {
    //     duration: 0.2,
    //     ease: easeInOut,
    //   },
    // },
  };
};
const ShoesData = [
  {
    id: 1,
    image: Shoe1,
    title: "Jordan Luka 3 PF",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$40",
    modal: "Sports",
    bgColor: "#138695",
  },
  {
    id: 2,
    image: Shoe2,
    title: "Nike G.T. Cut 3 EP",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Running",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: Shoe3,
    title: "Nike G.T. Cut Academy EP",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Sports",
    bgColor: "#698869",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = useState(ShoesData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <div>
      <motion.section
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
        className="bg-branDark text-white"
      >
        {/* navbar components */}

        <Navbar></Navbar>

        {/* Hero section */}

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
          <div className=" flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] text-white order-2 md:order-1">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} alt="" />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={SlideRight(0.6)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ color: activeData.bgColor }}
                    className="px-4 py-2 bg-white inline-block front-semibold rounded-md "
                  >
                    Order Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* list separator */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
              >
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="text-sm">Top Recommendation</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
