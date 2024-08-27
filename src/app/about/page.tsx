import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us | Rudra Overseas",
  description: "Learn more about Rudra Overseas, a leading overseas education consulting firm in Anand and Kheda (Charotar).",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="About Us"
        description="Rudra Overseas is one of the leading overseas education consulting firms in Anand and Kheda (Charotar). Over 300 satisfied clients are the strength of Rudra Overseas."
      /> */}
      <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Rudra Overseas is one of the leading overseas education consulting firms in Anand and Kheda (Charotar). It was not that easy to reach where we are today. Over 300 satisfied clients are the strength of Rudra Overseas.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We treat all our clients as a part of the family and we see to it that they are the most benefited by the above services. We can say our transparency and blessings that we truly deserve have been instrumental milestones in our journey to success.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to emphasize equal opportunities and a flow of knowledge, expertise, and ideas regardless of borders, directing them to anywhere and everywhere worthy of recognition and rewards.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">Our Goal</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our goal is to understand the basic requirements of the students and help them choose the right course and university/college accordingly. We aim to be a perfect link between the universities/colleges and the aspiring students who wish to study in a foreign land. Our knowledge, professional behavior, commitment, infrastructure, and highly experienced team at Rudra Overseas shall be instrumental in achieving our goal of student satisfaction.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg shadow-lg h-full">
        <FaCheckCircle className="text-blue-500 text-3xl mb-4" />
        <p className="text-base text-gray-700 flex-grow">
          We counsel you to pick and grab the best opportunity to study in a foreign university. We realize that different individuals have different needs and therefore you need various options to choose the right one to realize your dreams.
        </p>
      </div>
      <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg shadow-lg h-full">
        <FaCheckCircle className="text-blue-500 text-3xl mb-4" />
        <p className="text-base text-gray-700 flex-grow">
          A student visa is a golden opportunity for any individual to go abroad and learn not only about the chosen course but also about life at large. The international education and exposure have changed the lives of millions around the world, and the benefits are manifold.
        </p>
      </div>
      <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg shadow-lg h-full">
        <FaCheckCircle className="text-blue-500 text-3xl mb-4" />
        <p className="text-base text-gray-700 flex-grow">
          We ensure that the students who wish to have foreign education get maximum benefit from our expertise and exposure. As the management of the firm has international qualifications and experience, they can share the same with all the aspiring students willing to study abroad. We are a student-oriented firm committed to providing fair and accurate assistance and guidance to students seeking admission in educational institutions/universities in the United Kingdom, USA, Australia, Canada, New Zealand, and more.
        </p>
      </div>
      <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg shadow-lg h-full">
        <FaCheckCircle className="text-blue-500 text-3xl mb-4" />
        <p className="text-base text-gray-700 flex-grow">
          The following services will help the students not only to secure admissions but also to get a visa and ensure they receive a warm welcome as and when they land in their chosen country.
        </p>
      </div>
    </div>
  </div>
</section>

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;