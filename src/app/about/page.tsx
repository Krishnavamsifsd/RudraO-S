import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import aboutUs from "../../../public/images/about/aboutUs.jpg";
import Image from "next/image";
import { FaHandHoldingHeart, FaEye, FaGraduationCap, FaUserShield, FaHandshake } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";

export const metadata: Metadata = {
  title: "About Us | Rudra Overseas",
  description:
    "Learn more about Rudra Overseas, a leading overseas education consulting firm in Anand and Kheda (Charotar).",
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
            Welcome to Rudra Overseas Educational Consultancy
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
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="mb-6 text-lg text-gray-700">
                We are a leading Educational Consultancy firm, established in 2023, with a passion for empowering students to achieve their academic dreams globally. Our mission is to provide personalized guidance and support to students seeking higher education opportunities abroad.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                Rudra Overseas Educational Consultancy was founded by Dr. Ekaveera Bandarupalli and Mr. Lokesh Madineni, a seasoned education expert with a vision to bridge the gap between Indian students and top international universities. With a deep understanding of the complexities involved in studying abroad, our team is dedicated to simplifying the process and making it accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-center">
            <h2 className="text-center text-4xl font-bold text-blue-900">
              Our Values
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center space-y-4 p-6 bg-blue-50 rounded-lg shadow-lg max-w-xs">
              <FaHandHoldingHeart className="text-4xl text-blue-500" />
              <h3 className="text-xl font-semibold text-blue-900">Student-Centric Approach</h3>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-blue-50 rounded-lg shadow-lg max-w-xs">
              <FaUserShield className="text-4xl text-blue-500" />
              <h3 className="text-xl font-semibold text-blue-900">Transparency and Integrity</h3>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-blue-50 rounded-lg shadow-lg max-w-xs">
              <FaGraduationCap className="text-4xl text-blue-500" />
              <h3 className="text-xl font-semibold text-blue-900">Expert Knowledge and Guidance</h3>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-blue-50 rounded-lg shadow-lg max-w-xs">
              <FaHandshake className="text-4xl text-blue-500" />
              <h3 className="text-xl font-semibold text-blue-900">Personalized Support and Care</h3>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-blue-50 rounded-lg shadow-lg max-w-xs">
              <GiDiploma className="text-4xl text-blue-500" />
              <h3 className="text-xl font-semibold text-blue-900">Building Trust and Relationships</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-center">
            <h2 className="text-center text-4xl font-bold text-blue-900">
              Our Services
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg max-w-xs">
              <FaEye className="text-4xl text-blue-500" />
              <h3 className="text-xl font-semibold text-blue-900">University Selection and Application Assistance</h3>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg max-w-xs">
              <GiDiploma className="text-4xl text-blue-500" />
              <h3 className="text-xl font-semibold text-blue-900">Course Guidance and Career Counseling</h3>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg max-w-xs">
              <FaHandshake className="text-4xl text-blue-500" />
              <h3 className="text-xl font-semibold text-blue-900">Scholarship and Visa Guidance</h3>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg max-w-xs">
              <FaGraduationCap className="text-4xl text-blue-500" />
              <h3 className="text-xl font-semibold text-blue-900">Pre-Departure Support and Orientation</h3>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-blue-900">
            Our Goal
          </h2>
          <p className="text-center text-lg text-gray-700">
            At Rudra Overseas Educational Consultancy, we aim to be the trusted partner for students, parents, and universities, fostering a community of global learners and leaders.
          </p>
        </div>
      </section>

      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
