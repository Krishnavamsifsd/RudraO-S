import React from "react";
import { FaUniversity, FaPassport, FaChartLine, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="relative">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/graduating-studying-abroad-international-concept_996201-28394.jpg?ga=GA1.1.2054148804.1721838972&semt=ais_hybrid')" }}
      ></div>
      <div className="relative bg-gray-100 bg-opacity-90 py-12 text-gray-900 dark:bg-gray-900 dark:bg-opacity-90 dark:text-gray-100 mt-16">
        <div className="container mx-auto px-4">
          <section className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-extrabold text-blue-600 dark:text-blue-400">
              About Rudra Overseas
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed">
              We&apos;re The Trusted Educational Consultant. Rudra Overseas is the flag
              bearer in the fields of test preparation, study abroad programmes,
              and immigration services. As an emerging leader in test
              preparation, Rudra Overseas takes pride in our high success rate.
              Through our years of experience in imparting quality coaching
              services, we have guided thousands of aspirants in achieving their
              dreams of studying at universities abroad.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">Our Values</h3>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Trust",
                "Excellence",
                "Collaboration",
                "Service",
                "Gratitude",
              ].map((value, index) => (
                <li
                  key={index}
                  className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 transition transform hover:scale-105"
                >
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{value}</h4>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h3 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">More Details</h3>
            <p className="mb-6 text-lg leading-relaxed">
              With increasing attribution over incredible educational and
              employment opportunities abroad, the ratio of aspirants dreaming
              to study abroad or Migration is puffing with every passing day.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              We started with a mission in 2023 to lend a hand to such young and
              ambitious students with a pellucid clarity of the international
              universities and educational institutions that offer courses and
              post-study prospects that best suit requirements and spheres of
              interest. We offer comprehensive classroom training for tests such
              as the GMAT®, GRE®, SAT®, TOEFL™, IELTS™ and PTE. Rudra
              Overseas partners with more than 1000+ universities throughout the
              world to assist in test preparation, admissions and visa
              counselling thereby becoming the one stop solution for the
              students aspiring education abroad.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              As a part of the aspirant&apos;s overseas education journey, we take
              charge of everything right from advising on course selection and
              applications, to helping him get the right visa. Our qualified
              admission experts will stand up for you in taking the most
              important and critical decision you will ever make in your life.
            </p>
            <div className="mb-6 h-auto w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: "url('/aboutus-pic1.jpg')" }}></div>
            <p className="mb-6 text-lg leading-relaxed">
              We&apos;ve developed persistent working relationships with our
              university partners and offer scholarships to deserving students
              to help offset their costs of studying overseas. Rudra Overseas is
              the fastest emerging leader in the overseas education services.
              Choosing Rudra Overseas as your international study partner means
              you can focus on planning your overseas education and career while
              we take care of all the paperwork.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
  We have 3 centers spread across cities in India, and this figure
  is set to rise in the coming years. Every center follows a consistent
  curriculum and boasts outstanding faculty, all of whom are trained
  at our head office by master trainers, ensuring the same high teaching
  standards across locations.
</p>

<div className="mb-6">
  <p className="mb-4 text-xl font-bold text-blue-600 dark:text-blue-400">Our Centers</p>
  <div className="space-y-4">
    <div className="p-4 bg-white shadow-lg rounded-lg flex items-center dark:bg-gray-800 hover:shadow-xl transition transform hover:scale-105">
      <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-3xl mr-4" />
      <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">Guntur</span>
    </div>
    <div className="p-4 bg-white shadow-lg rounded-lg flex items-center dark:bg-gray-800 hover:shadow-xl transition transform hover:scale-105">
      <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-3xl mr-4" />
      <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">Narsaropet <span className="text-sm text-gray-500">(launch)</span></span>
    </div>
  </div>
</div>


            <p className="mb-6 text-lg leading-relaxed">
              Rudra Overseas is focused predominantly developing innovative
              solutions to bring Abroad Education more accessible and attainable
              to all categories of students.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">Vision</h3>
            <p className="mb-6 text-lg leading-relaxed text-center">
              Our vision is to provide quality service to every abroad aspirant
              and grow to be leading light in Test-prep, Student Admissions.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">Mission</h3>
            <p className="mb-6 text-lg leading-relaxed text-center">
              We aim to reformulate the notion of studying abroad into a
              pragmatic view and handy to every aspirant in India by making it
              more affordable without any weighty processes.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">Integrity</h3>
            <p className="mb-6 text-lg leading-relaxed text-center">
              We will not compromise on our individual or organization&apos;s
              integrity for any reason. We will hold ourselves to the highest
              ethical standards in all of our dealings, both within and outside
              the organization.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">Values</h3>
            <p className="mb-6 text-lg leading-relaxed text-center">
              We never compromise in delivering appropriate information and
              required procedure to the students. This remained as the impelling
              cause for our matchless achievements in this cutthroat field. Our
              prime motto is to smoothen the process of approaching universities
              abroad and make the deserved students pull off their dreams.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">
              Happy to serve our Students!
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-center">
              In the view of fact that Seeking for abroad education has become
              more complex and over informative for a student to choose the
              right one.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-center">
              A Cordial commitment to give our students a seamless experience
              and furnish the most effective procedure has been our driving
              force since outset and will always be. We bring in new approach to
              support students with a modernised level of training Strategies
              that reinforce students to a whole new level and also aggregates
              best approach towards standardized tests for abroad education.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-center">
              Our ability to deliver outstanding results for the students starts
              with our team of smart and capable experts. Although we have a
              team of diverse set of experiences and backgrounds, we are united
              by organizational vision of maintaining stakeholder satisfaction
              in the forefront and deliver premium best test prep and admissions
              services. We pride ourselves on our strategic, integrated &amp;
              personalized approach to marketing and the results it delivers.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-center">
              Our holistic and integral experience in the international domain
              makes attaining your overseas dreams as easy as falling off a log.
            </p>
          </section>

          <section className="mb-16">
  <h3 className="mb-8 text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">Achievements</h3>
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
  <div className="bg-white p-8 shadow-lg dark:bg-gray-800 transition transform hover:scale-105 rounded-xl">
  <FaUniversity className="text-blue-600 dark:text-blue-400 text-5xl mb-4 mx-auto" />
      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 text-center">
        Representing over 1000+ International Universities
      </h4>
    </div>
    <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800 transition transform hover:scale-105">
      <FaPassport className="text-blue-600 dark:text-blue-400 text-5xl mb-4 mx-auto" />
      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 text-center">
        High Visa Success rate
      </h4>
    </div>
    <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800 transition transform hover:scale-105">
      <FaChartLine className="text-blue-600 dark:text-blue-400 text-5xl mb-4 mx-auto" />
      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 text-center">
        Rapid Branch proliferation in short period of time
      </h4>
    </div>
    <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800 transition transform hover:scale-105">
      <FaUsers className="text-blue-600 dark:text-blue-400 text-5xl mb-4 mx-auto" />
      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 text-center">
        Team of 10 experienced industry professionals
      </h4>
    </div>
  </div>
</section>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;