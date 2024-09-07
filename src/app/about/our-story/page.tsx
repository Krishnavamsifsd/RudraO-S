import React from "react";
import {
  FaUniversity,
  FaPassport,
  FaChartLine,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="relative">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/graduating-studying-abroad-international-concept_996201-28394.jpg?ga=GA1.1.2054148804.1721838972&semt=ais_hybrid')",
        }}
      ></div>
      <div className="relative mt-16 bg-gray-100 bg-opacity-90 py-12 text-gray-900 dark:bg-gray-900 dark:bg-opacity-90 dark:text-gray-100">
        <div className="container mx-auto px-4">
        <section className="mb-16 text-left">
  <h2 className="mb-6 text-4xl font-extrabold text-blue-600 dark:text-blue-400">
  Welcome to Rudra Overseas Educational Consultancy
    </h2>
  <p className="mx-auto  text-lg leading-relaxed">
  Established in September 2023, Rudra Overseas Educational Consultancy is dedicated to helping students fulfill their dreams of studying abroad. The consultancy offers comprehensive training and guidance to ensure students are well-prepared for the challenges and opportunities of International Education.
  </p>
</section>


          <section className="mb-16">
            <h3 className="mb-4  text-3xl font-bold text-blue-600 dark:text-blue-400">
              Our Values
            </h3>
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
                  className="transform rounded-lg bg-white p-6 shadow-md transition hover:scale-105 dark:bg-gray-800"
                >
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {value}
                  </h4>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
  <div className="mx-auto  px-4">
    <h3 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400">
      More Details
    </h3>
    <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
      With increasing attribution over incredible educational and employment opportunities abroad, the ratio of aspirants dreaming to study abroad or migrate is increasing every day.
    </p>
    <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
      We started with a mission in 2023 to lend a hand to such young and ambitious students with a clear understanding of the international universities and educational institutions that offer courses and post-study prospects that best suit their requirements and interests. We offer comprehensive classroom training for tests such as GMAT®, GRE®, SAT®, TOEFL™, IELTS™, and PTE. Rudra Overseas partners with more than 1000+ universities worldwide to assist in test preparation, admissions, and visa counselling, making us a one-stop solution for students aspiring to study abroad.
    </p>
    <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
  As part of the aspirant&apos;s overseas education journey, we handle everything from advising on course selection and applications to helping with the right visa. Our qualified admission experts will support you in making the most important and critical decision of your life.
</p>

    <div
      className="mb-6 h-auto w-full rounded-lg bg-cover bg-center shadow-md"
      style={{ backgroundImage: "url('/aboutus-pic1.jpg')" }}
    ></div>
    <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
      We have established strong working relationships with our university partners and offer scholarships to deserving students to help offset their study costs overseas. Rudra Overseas is the fastest-emerging leader in overseas education services. Choosing Rudra Overseas as your international study partner means you can focus on planning your overseas education and career while we handle all the paperwork.
    </p>
    <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
      We have three centers across cities in India, and this number is set to rise in the coming years. Each center follows a consistent curriculum and boasts outstanding faculty, all trained at our head office by master trainers, ensuring the same high teaching standards across locations.
    </p>

    <div className="mb-6">
      <p className="mb-4 text-xl font-bold text-blue-600 dark:text-blue-400">
        Our Centers
      </p>
      <div className="space-y-4">
      {/* Card for Guntur */}
      <div className="flex items-start justify-between rounded-lg bg-white p-4 shadow-lg transition hover:scale-105 hover:shadow-xl dark:bg-gray-800">
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-4 text-3xl text-blue-600 dark:text-blue-400" />
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Guntur
          </span>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500 dark:text-gray-400">Lokesh Madineni</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">9885234150</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">9035721357</p>
        </div>
      </div>

      {/* Card for Narsaropet */}
      <div className="flex items-start justify-between rounded-lg bg-white p-4 shadow-lg transition hover:scale-105 hover:shadow-xl dark:bg-gray-800">
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-4 text-3xl text-blue-600 dark:text-blue-400" />
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Narsaropet <span className="text-sm text-gray-500">(launch)</span>
          </span>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500 dark:text-gray-400">Bandarupalli Subba Rao</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">9390510101</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">9885234150</p>
        </div>
      </div>

      {/* Card for Kothagudem */}
      <div className="flex items-start justify-between rounded-lg bg-white p-4 shadow-lg transition hover:scale-105 hover:shadow-xl dark:bg-gray-800">
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-4 text-3xl text-blue-600 dark:text-blue-400" />
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Kothagudem
          </span>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500 dark:text-gray-400">Madineni Kalpana</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">8247451462</p>
        </div>
      </div>
    </div>
    </div>

    <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
      Rudra Overseas is focused on developing innovative solutions to make overseas education more accessible and attainable for all categories of students.
    </p>
  </div>
</section>


<section className="mb-16">
  <h3 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400">
    Vision
  </h3>
  <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
    Our vision is to provide quality service to every abroad aspirant
    and grow to be a leading light in Test-prep and Student Admissions.
  </p>
</section>

<section className="mb-16">
  <h3 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400">
    Mission
  </h3>
  <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
    We aim to reformulate the notion of studying abroad into a
    pragmatic view and make it more accessible to every aspirant in India by making it
    more affordable without any cumbersome processes.
  </p>
</section>

<section className="mb-16">
  <h3 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400">
    Integrity
  </h3>
  <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
  We will not compromise on our individual or organization&apos;s
  integrity for any reason. We will hold ourselves to the highest
  ethical standards in all of our dealings, both within and outside
  the organization.
</p>

</section>

<section className="mb-16">
  <h3 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400">
    Values
  </h3>
  <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
    We never compromise on delivering appropriate information and
    required procedures to students. This remains the driving force
    behind our unmatched achievements in this competitive field. Our
    prime motto is to streamline the process of approaching universities
    abroad and help deserving students achieve their dreams.
  </p>
</section>

<section className="mb-16">
  <h3 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400">
    Happy to Serve Our Students!
  </h3>
  <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
    Given that seeking education abroad has become increasingly complex
    and information overload for students, we are committed to providing
    a seamless experience and effective procedures. Our commitment to
    offering students a modernized level of training strategies sets us
    apart and enhances our approach towards standardized tests for
    abroad education.
  </p>
  <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
    Our ability to deliver outstanding results starts with our team of
    smart and capable experts. Although our team has diverse experiences
    and backgrounds, we are united by the organizational vision of
    maintaining stakeholder satisfaction and delivering premium test prep
    and admissions services. We pride ourselves on our strategic,
    integrated, and personalized approach to marketing and the results it delivers.
  </p>
  <p className="mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
    Our holistic and integral experience in the international domain
    makes achieving your overseas dreams as easy as falling off a log.
  </p>
</section>


          <section className="mb-16">
            <h3 className="mb-8 text-center text-3xl font-bold text-blue-600 dark:text-blue-400">
              Achievements
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="transform rounded-xl bg-white p-8 shadow-lg transition hover:scale-105 dark:bg-gray-800">
                <FaUniversity className="mx-auto mb-4 text-5xl text-blue-600 dark:text-blue-400" />
                <h4 className="text-center text-lg font-semibold text-blue-600 dark:text-blue-400">
                  Representing over 1000+ International Universities
                </h4>
              </div>
              <div className="transform rounded-xl bg-white p-8 shadow-lg transition hover:scale-105 dark:bg-gray-800">
                <FaPassport className="mx-auto mb-4 text-5xl text-blue-600 dark:text-blue-400" />
                <h4 className="text-center text-lg font-semibold text-blue-600 dark:text-blue-400">
                  High Visa Success rate
                </h4>
              </div>
              <div className="transform rounded-xl bg-white p-8 shadow-lg transition hover:scale-105 dark:bg-gray-800">
                <FaChartLine className="mx-auto mb-4 text-5xl text-blue-600 dark:text-blue-400" />
                <h4 className="text-center text-lg font-semibold text-blue-600 dark:text-blue-400">
                  Rapid Branch proliferation in short period of time
                </h4>
              </div>
              <div className="transform rounded-xl bg-white p-8 shadow-lg transition hover:scale-105 dark:bg-gray-800">
                <FaUsers className="mx-auto mb-4 text-5xl text-blue-600 dark:text-blue-400" />
                <h4 className="text-center text-lg font-semibold text-blue-600 dark:text-blue-400">
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
