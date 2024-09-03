import React from 'react';
import { FaGlobe, FaBook, FaHome, FaLaptop, FaClipboardCheck } from 'react-icons/fa';

const TOEFLPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-16">
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold">Why TOEFL?</h1>
          <p className="mt-2 text-sm md:text-base">Understand the importance and details of the TOEFL exam.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">What is TOEFL?</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            TOEFL or the Test of English as a Foreign Language is an English proficiency test that is undertaken by students who want to study abroad in English speaking countries. TOEFL is conducted by ETS (Educational Testing Services) to judge candidates who are proficient in all four academic English skills: Reading, Listening, Speaking and Writing.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
            The TOEFL exam can be undertaken in the computer delivered method called the TOEFL iBT or internet-based test. TOEFL exam can now be taken on paper. Also ETS has launched TOEFL Home Edition for students to take the exam from the safety of their homes.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
            TOEFL scores are commonly accepted by the American and Canadian universities and educational institutions abroad.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Why TOEFL?</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            TOEFL is undertaken by students who want to study overseas. If you want to pursue higher education from an overseas university, you can take TOEFL. Qualifying the TOEFL exam will open doors for several scholarship options and help you clear your visa application procedures.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
            TOEFL exam is one of the most preferred English language tests for lakhs of Indian students. Furthermore, the TOEFL scores are accepted in over 11,000 institutions and universities throughout the world. Countries like the USA, UK, New Zealand accept TOEFL scores for admission into their universities.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
            The test is a medium to assess and judge a student’s reading, writing, speaking, and listening abilities in the English language.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Types of TOEFL Exams</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaGlobe className="text-blue-600 text-2xl md:text-3xl mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">TOEFL iBT</h3>
              <p className="text-gray-700 text-sm md:text-base">The preferred mode of the exam, representing more than 98% of the TOEFL tests given worldwide.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaBook className="text-blue-600 text-2xl md:text-3xl mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">TOEFL Test on Paper</h3>
              <p className="text-gray-700 text-sm md:text-base">A convenient way of taking the exam, launched in selected countries including India.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaHome className="text-blue-600 text-2xl md:text-3xl mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">TOEFL Home Edition</h3>
              <p className="text-gray-700 text-sm md:text-base">The TOEFL iBT test conducted from the safety of home with a proctor to supervise.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">What is TOEFL iBT?</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            TOEFL Internet-Based Test (TOEFL iBT) is the online version of the TOEFL test. India has TOEFL exam centres in all its major cities. Students prefer TOEFL iBT as it is convenient.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">What is the TOEFL Test on Paper?</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            The TOEFL iBT Test on Paper is a convenient way of taking the exam. This version of the TOEFL has been launched in selected countries including India. The exam is taken in 2 sessions and will be delivered on paper.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
            The TOEFL Reading, Listening, and Writing sections are taken on paper at a test centre. The TOEFL Speaking section is taken at home on the computer and supervised online by a human proctor. It is important for the test taker to have the necessary environment at home before taking the speaking test.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">What is TOEFL Paper Based Test (PBT)?</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            TOEFL paper based test is discontinued from 2021. However, the scores of the test will remain valid for 2 years.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">What is TOEFL Home Edition?</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            ETS has set certain standards for students who want to take the TOEFL Home Edition. This test was designed during the covid pandemic to ease the way students take the test.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">TOEFL Eligibility</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Candidates who have passed their 10+2 from a recognized board are eligible to take the TOEFL iBT. Apart from this there is no eligibility criteria set by the ETS for students who want to take the TOEFL.
          </p>
        </section>
      </main>

    </div>
  );
};

export default TOEFLPage;