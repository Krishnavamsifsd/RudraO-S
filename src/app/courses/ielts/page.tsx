import React from "react";
import { FaGraduationCap, FaBook, FaGlobe, FaUniversity, FaBriefcase, FaPlane, FaPassport } from 'react-icons/fa';
import Image from 'next/image';

const IELTSInfo = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-12 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/4 mb-8 lg:mb-0 lg:mr-8">
          <div className="relative p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg">
            <div className="bg-white p-1 rounded-lg">
              <Image
                src="https://ielts.thescorebooster.com/images/what-is-ielts.jpg"
                alt="What is IELTS"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-3/4">
          <h1 className="mb-8 text-center text-4xl font-extrabold text-white">
            What is IELTS?
          </h1>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <FaGlobe className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">What is IELTS?</h2>
              </div>
              <p className="text-gray-700 text-sm">
                IELTS is the International English Language Testing System, trusted by over 10,000 institutions worldwide. It evaluates Listening, Reading, Writing, and Speaking skills. Over 3 million people take the test annually for education, professional registration, and residency.
              </p>
            </div>
            <hr className="border-gray-300 my-6" />
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <FaBook className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">IELTS Exam</h2>
              </div>
              <p className="text-gray-700 text-sm">
                IELTS offers two types: Academic and General Training. Choose the type based on your goals.
              </p>
            </div>
            <hr className="border-gray-300 my-6" />
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">IELTS Test Types</h2>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Academic Test</h3>
                <p className="text-gray-700 text-sm">
                  For students seeking education in international institutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">General Training Test</h3>
                <p className="text-gray-700 text-sm">
                  For those seeking employment or work in international institutions.
                </p>
              </div>
            </div>
            <hr className="border-gray-300 my-6" />
            <div>
              <div className="flex items-center mb-4">
                <FaUniversity className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">IELTS Test Centers in India</h2>
              </div>
              <p className="text-gray-700 text-sm">
                IELTS Listening, Speaking, and Writing are scored similarly for both test types, but Reading is scored differently. Choose the right test type for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="mt-12 px-4">
  <h2 className="text-center text-4xl font-extrabold text-white mb-8">
    How IELTS Score Can Help You?
  </h2>
  <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
    {/* Study Card */}
    <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
      <div className="flex items-center mb-4">
        <FaGraduationCap className="text-blue-500 text-2xl mr-3 transition-transform duration-300 hover:rotate-12" />
        <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-500">Study</h3>
      </div>
      <p className="text-gray-700 text-sm transition-opacity duration-300 hover:opacity-75">
        Using the IELTS score, you can apply for students VISA in the countries like the USA, the UK, Canada, Australia etc.to study Under-graduate and Master degree programs in the best universities there.A student should aim for a high score in IELTS to choose high rated universities abroad.
      </p>
    </div>
    {/* Work Card */}
    <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
      <div className="flex items-center mb-4">
        <FaBriefcase className="text-blue-500 text-2xl mr-3 transition-transform duration-300 hover:rotate-12" />
        <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-green-500">Work</h3>
      </div>
      <p className="text-gray-700 text-sm transition-opacity duration-300 hover:opacity-75">
        IELTS test is the prerequisite for applicants who are seeking professional registration abroad to work in the ultimate workspaces abroad. Many employers, associates, and professional group bodies accept IELTS.
      </p>
    </div>
    {/* Immigration Card */}
    <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
      <div className="flex items-center mb-4">
        <FaPassport className="text-blue-500 text-2xl mr-3 transition-transform duration-300 hover:rotate-12" />
        <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-yellow-500">Immigration (PR)</h3>
      </div>
      <p className="text-gray-700 text-sm transition-opacity duration-300 hover:opacity-75">
        IELTS score is essential to apply PR(Permanent Visa) abroad to settle there and live. Countries like Australia, Canada, the UK, New zealand demands IELTS score to migrate.
      </p>
    </div>
  </div>
</div>
    </div>
  );
};

export default IELTSInfo;