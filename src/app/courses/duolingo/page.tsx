import React from 'react';
import { FaCheckCircle, FaGlobe, FaUniversity, FaBook, FaMicrophone, FaHeadphones, FaChalkboardTeacher } from 'react-icons/fa';

const DETPage = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen mt-16">
        <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-3xl font-extrabold">Duolingo English Test (DET)</h1>
            <p className="mt-2 text-base md:text-lg">An alternative to traditional tests like TOEFL and IELTS.</p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Overview</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              The DET (Duolingo English Test) is an alternative to traditional tests like TOEFL and IELTS. It offers a flexible and affordable option for English language assessment. The test assesses a candidate&apos;s proficiency in English reading, writing, speaking, and listening. It is recognised by thousands of universities around the world.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Eligibility</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base leading-relaxed">
              <li>Test takers should be at least 13 years old. Minors might need parental consent depending on their country&apos;s laws.</li>
              <li>No academic qualifications or prerequisites required.</li>
              <li>Valid government-issued photo ID is required.</li>
              <li>A computer with a camera, microphone, speakers, and a reliable internet connection.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Syllabus</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">The Duolingo English Test assesses the following skills:</p>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base leading-relaxed">
              <li>Reading</li>
              <li>Writing</li>
              <li>Speaking</li>
              <li>Listening</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Duolingo Test Structure</h2>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Introduction and Onboarding - 5 minutes</h3>
              <p className="text-gray-700 mb-4">Ensure that your computer&apos;s camera, speaker, and microphone are working properly. Submit your ID and go through the rules and requirements thoroughly.</p>
              <h3 className="text-lg md:text-xl font-semibold mb-4">Adaptive Test - 45 minutes</h3>
              <p className="text-gray-700 mb-4">The test examines a student&apos;s adeptness with the English language by setting up different types of questions. The difficulty level changes as per the candidate&apos;s performance.</p>
              <h3 className="text-lg md:text-xl font-semibold mb-4">Writing and Speaking Sample - 10 minutes</h3>
              <p className="text-gray-700">Respond to a prompt with a time allocation of 1-3 minutes for speaking and 3-5 minutes for writing.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Duolingo Score Interpretation</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-gray-200 text-left">Scale</th>
                    <th className="py-2 px-4 bg-gray-200 text-left">CEFR</th>
                    <th className="py-2 px-4 bg-gray-200 text-left">Candidate Capabilities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4">10 - 55</td>
                    <td className="py-2 px-4">A1/A2</td>
                    <td className="py-2 px-4">Understand very basic English. Understand straightforward information.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">60 - 85</td>
                    <td className="py-2 px-4">B1</td>
                    <td className="py-2 px-4">Understand the main points of concrete speech or write a routine school or job-related matter.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">90 - 115</td>
                    <td className="py-2 px-4">B2</td>
                    <td className="py-2 px-4">Fulfil communication goals. Interact with proficient speakers.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">120 - 160</td>
                    <td className="py-2 px-4">C1/C2</td>
                    <td className="py-2 px-4">Understand demanding written and spoken language. Proficiency in the English language for both social, academic, and professional purposes.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Where is the Duolingo test result accepted?</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">The 2024 data says Duolingo test results are accepted in all continents, including North America, South America, Asia, Europe, Africa, and Oceania. Prominent countries like the USA, Canada, UK, South Africa, India, Japan, South Korea, New Zealand, Germany, France, and Italy accept Duolingo test results.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Our Salient Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <FaChalkboardTeacher className="text-blue-600 text-2xl md:text-3xl mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Certified Trainers</h3>
                <p className="text-gray-700 text-sm md:text-base">Qualified and experienced language instructors familiar with Duolingo&apos;s curriculum.</p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <FaBook className="text-blue-600 text-2xl md:text-3xl mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Interactive Learning Environment</h3>
                <p className="text-gray-700 text-sm md:text-base">Engaging learning activities that promote active participation and practical application of language skills.</p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <FaMicrophone className="text-blue-600 text-2xl md:text-3xl mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Speaking and Listening Practice</h3>
                <p className="text-gray-700 text-sm md:text-base">Dedicated sessions for speaking and listening practice, essential components of language proficiency.</p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <FaCheckCircle className="text-blue-600 text-2xl md:text-3xl mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Regular Progress Assessments</h3>
                <p className="text-gray-700 text-sm md:text-base">Regular assessments to track students&apos; progress, identifying areas for improvement and positive feedback.</p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <FaUniversity className="text-blue-600 text-2xl md:text-3xl mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Mock Duolingo Tests</h3>
                <p className="text-gray-700 text-sm md:text-base">Mock Duolingo Tests to familiarise students with the test environment.</p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <FaHeadphones className="text-blue-600 text-2xl md:text-3xl mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-700 text-sm md:text-base">Flexible scheduling to allow students to balance language learning with other responsibilities.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Why Choose Rudra Overseas?</h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">Rudra Overseas is one of the best Duolingo coaching providers in Hyderabad. Our training programs guarantee a superior preparation experience for the English language proficiency test. We specialise not only in Duolingo coaching but also in offering guidance to students and professionals regarding their career pathways and plans for education abroad.</p>
          </section>
        </main>
      </div>
    </>
  );
};

export default DETPage;