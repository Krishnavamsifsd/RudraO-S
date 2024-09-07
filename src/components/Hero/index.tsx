"use client";
import Link from "next/link";
import heroBg from "../../../public/images/hero/hero-bg.jpeg";
import planeImage from "../../../public/images/logo/plane.png";
import Image from "next/image";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/UseIsMobile";

const Hero = () => {
  const isMobile = useIsMobile()
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-cover bg-center bg-no-repeat pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        height: "130vh",
      }}
    >
      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slide-in 1s ease-out;
        }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      <div className="container relative z-20">
        <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-between">
      {/* Heading and Text */}
      <h1 className="animate-slide-in via-yellow-400 mb-5 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
        Unlock Your Potential with <br />
        <span className="via-yellow-400 bg-gradient-to-r from-red-500 to-purple-800 bg-clip-text text-transparent">
          Rudra Overseas
        </span>
      </h1>

      {/* Rotating Plane Logo */}
      {!isMobile &&   <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }} 
        className="ml-4"
      >
        <Image
          src={planeImage} 
          alt="plane logo"
          width={200} 
          height={100} 
        />
      </motion.div>}
    
    </div>
    <p className="text-shadow mb-8 text-lg text-white sm:text-xl md:text-2xl font-medium">
  Take the first step towards a brighter future with world-class
  education and career opportunities abroad.
</p>

          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link href="/about">
              <div className="flex transform items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:from-blue-600 hover:to-purple-600">
                <span>About Us</span>
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            </Link>
            <Link href="/about/services">
              <div className="flex transform items-center rounded-full bg-blue-700 px-6 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-800">
                <span>Our Services</span>
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            </Link>
            <Link href="/contact">
              <div className="flex transform items-center rounded-full bg-white px-6 py-3 text-lg font-semibold text-blue-900 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-200">
                <span>Contact Us</span>
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
