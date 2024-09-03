"use client"
import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-white">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary border border-gray-400">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="relative pt-16 md:pt-20 lg:pt-28">
      <div className="absolute inset-0 z-0 h-[50vh] md:h-[75vh] lg:h-full">
        <Image
          src="https://img.freepik.com/premium-photo/parents-congratulate-student-who-finis_1279821-9673.jpg?w=826"
          alt="about-background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-700 to-red-600 opacity-60"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="flex flex-wrap -mx-4 ">
            <div className="w-full px-4 lg:w-3/4">
              <div className="glassmorphism-container p-8 rounded-lg">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-lime-400 mb-6 drop-shadow-md">
                  Discover the Excellence of Rudra Overseas
                </h2>
                <p className="text-lg text-white mb-6">
                  At Rudra Overseas, we excel in providing unparalleled services in international trade and logistics. Our commitment is to ensure smooth and efficient global commerce through our expertise and innovative solutions.
                </p>

                <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Global Reach" />
                      <List text="Expert Team" />
                      <List text="Reliable Services" />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Innovative Solutions" />
                      <List text="Customer Focused" />
                      <List text="Sustainable Practices" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .glassmorphism-container {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0)
          );
        }
        @media (max-width: 768px) {
          .absolute.inset-0.z-0.h-[50vh] {
            height: 100vh;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSectionOne;