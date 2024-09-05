import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { FaCheckCircle } from "react-icons/fa";
import aboutUs from "../../../public/images/about/aboutUs.jpg";
import Image from "next/image";
import { FiEye, FiTarget } from 'react-icons/fi';

export const metadata: Metadata = {
  title: "About Us | Rudra Overseas",
  description:
    "Learn more about Rudra Overseas, a leading overseas education consulting firm in Anand and Kheda (Charotar).",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="About Us"
        description="Rudra Overseas is one of the leading overseas education consulting firms in Anand and Kheda (Charotar). Over 300 satisfied clients are the strength of Rudra Overseas."
      /> */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-blue-900">
            About Us
          </h2>
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <Image
                src={aboutUs}
                alt="About Us"
                className="h-auto w-full rounded-lg shadow-lg"
                layout="responsive"
                width={700} // Adjust the width as needed
                height={475} // Adjust the height as needed
              />{" "}
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="mb-6 text-lg text-gray-700">
                It tells the tale of two young, vibrant, and incredibly driven
                professionals (Dr. Ekaveera Bandarupalli & Lokesh Madineni) who
                aspire to provide highly personalised solutions and genuine,
                caring advice to the student community who are ready to take
                risks and step outside of their comfort zones in order to become
                independent and self-assured and to overcome all obstacles in
                order to succeed dramatically on a worldwide scale.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                In September 2023, Rudra Overseas Educational Consultancy opened
                its first location in Guntur and second in Kothagudem and now in
                Nerseropeta in Andhra Pradesh. In the past, our tiny team
                focused solely on meeting the demands of the Guntur city's
                student population. We now have the honour of providing services
                to the student population in Andhra Pradesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 lg:py-28">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-center mb-8">
      <FiEye className="text-blue-900 mr-2" size={32} />
      <h2 className="text-center text-4xl font-bold text-blue-900">
        Our Vision
      </h2>
    </div>
    <div className="flex flex-col items-center">
      <p className="mb-6 max-w-2xl text-center text-lg italic text-gray-700">
        "To be a global leader in educational consultancy, empowering
        students to achieve their academic and professional dreams by
        providing exceptional guidance, resources, and support for
        international studies."
      </p>
    </div>
  </div>
</section>

<section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-20 lg:py-28">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-center mb-8">
      <FiTarget className="text-blue-900 mr-2" size={32} />
      <h2 className="text-center text-4xl font-bold text-blue-900">
        Our Mission
      </h2>
    </div>
    <div className="flex flex-col items-center">
      <p className="mb-6 max-w-2xl text-center text-lg text-gray-700">
        "Our mission is to inspire and assist students in pursuing
        world-class education abroad by offering personalized counseling,
        expert guidance, and comprehensive services. We strive to simplify
        the application process, ensure successful admissions, and support
        students in their journey towards academic excellence and global
        career opportunities. Through integrity, dedication, and
        innovation, we aim to bridge the gap between students and top
        educational institutions worldwide."
      </p>
    </div>
  </div>
</section>

      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-blue-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex h-full flex-col items-center rounded-lg bg-blue-50 p-6 text-center shadow-lg">
              <FaCheckCircle className="mb-4 text-3xl text-blue-500" />
              <p className="flex-grow text-base text-gray-700">
                We counsel you to pick and grab the best opportunity to study in
                a foreign university. We realize that different individuals have
                different needs and therefore you need various options to choose
                the right one to realize your dreams.
              </p>
            </div>
            <div className="flex h-full flex-col items-center rounded-lg bg-blue-50 p-6 text-center shadow-lg">
              <FaCheckCircle className="mb-4 text-3xl text-blue-500" />
              <p className="flex-grow text-base text-gray-700">
                A student visa is a golden opportunity for any individual to go
                abroad and learn not only about the chosen course but also about
                life at large. The international education and exposure have
                changed the lives of millions around the world, and the benefits
                are manifold.
              </p>
            </div>
            <div className="flex h-full flex-col items-center rounded-lg bg-blue-50 p-6 text-center shadow-lg">
              <FaCheckCircle className="mb-4 text-3xl text-blue-500" />
              <p className="flex-grow text-base text-gray-700">
                We ensure that the students who wish to have foreign education
                get maximum benefit from our expertise and exposure. As the
                management of the firm has international qualifications and
                experience, they can share the same with all the aspiring
                students willing to study abroad. We are a student-oriented firm
                committed to providing fair and accurate assistance and guidance
                to students seeking admission in educational
                institutions/universities in the United Kingdom, USA, Australia,
                Canada, New Zealand, and more.
              </p>
            </div>
            <div className="flex h-full flex-col items-center rounded-lg bg-blue-50 p-6 text-center shadow-lg">
              <FaCheckCircle className="mb-4 text-3xl text-blue-500" />
              <p className="flex-grow text-base text-gray-700">
                The following services will help the students not only to secure
                admissions but also to get a visa and ensure they receive a warm
                welcome as and when they land in their chosen country.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
