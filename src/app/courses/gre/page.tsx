import React from 'react';
import { FaCheckCircle, FaUniversity, FaBook, FaMicrophone, FaHeadphones, FaChalkboardTeacher } from 'react-icons/fa';

const GREPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-16">
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-extrabold">Best GRE Coaching Centre in Hyderabad</h1>
          <p className="mt-2 text-sm md:text-base">Choose the best that matches your criteria. Invest in your future with a trusted partner.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Why Choose Rudra Overseas?</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl">
            We let our actions speak loud about our quality, care, and service. Don’t just judge us on a paper, come talk to us. Our counselors and faculty are always there to guide you through the process. Make your decision after you speak with us.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">GRE Coaching in Hyderabad</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl">
            <li>Personalized one-on-one coaching for 20 days</li>
            <li>45 days of comprehensive training</li>
            <li>Updated materials on a quarterly basis</li>
            <li>Best pool of faculty specialized in GRE training</li>
            <li>Flexible timing</li>
            <li>Guided assignments</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">What is GRE Exam?</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl">
            The Graduate Record Examinations (GRE) is a standardized test that is an enrollment requirement for many graduate schools overseas. It assesses candidates' analytical writing, quantitative ability, and verbal reasoning skills.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">GRE Exam Overview</h2>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Types of GRE Test</h3>
            <p className="text-gray-700 mb-4">There are two types of GRE tests:</p>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base leading-relaxed">
              <li>GRE General Test</li>
              <li>GRE Subject Test</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">GRE Syllabus</h2>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl">
            <h3 className="text-lg md:text-xl font-semibold mb-4">GRE General Test Syllabus</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base leading-relaxed">
              <li>Analytical Writing</li>
              <li>Verbal Reasoning</li>
              <li>Quantitative Reasoning</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">GRE Exam Pattern</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-lg max-w-4xl">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-gray-200 text-left">Section</th>
                  <th className="py-3 px-4 bg-gray-200 text-left">Duration</th>
                  <th className="py-3 px-4 bg-gray-200 text-left">Question Types</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4">Quantitative Reasoning</td>
                  <td className="py-3 px-4">1 hour 10 mins</td>
                  <td className="py-3 px-4">Quant Comparisons, Numeric Entry</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Verbal Reasoning</td>
                  <td className="py-3 px-4">1 hour</td>
                  <td className="py-3 px-4">Reading Comprehension, Text Completion, Sentence Equivalence</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Analytical Writing</td>
                  <td className="py-3 px-4">1 hour</td>
                  <td className="py-3 px-4">Issue Analyzing, Argument Analyzing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Salient Features of Rudra Overseas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaChalkboardTeacher className="text-blue-600 text-2xl md:text-3xl mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Certified Trainers</h3>
              <p className="text-gray-700 text-sm md:text-base">Qualified and experienced language instructors familiar with GRE curriculum.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaBook className="text-blue-600 text-2xl md:text-3xl mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Interactive Learning Environment</h3>
              <p className="text-gray-700 text-sm md:text-base">Engaging learning activities that promote active participation and practical application of skills.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaMicrophone className="text-blue-600 text-2xl md:text-3xl mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Speaking and Listening Practice</h3>
              <p className="text-gray-700 text-sm md:text-base">Dedicated sessions for speaking and listening practice, essential components of language proficiency.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaCheckCircle className="text-blue-600 text-2xl md:text-3xl mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Regular Progress Assessments</h3>
              <p className="text-gray-700 text-sm md:text-base">Regular assessments to track students' progress, identifying areas for improvement and positive feedback.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaUniversity className="text-blue-600 text-2xl md:text-3xl mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Mock GRE Tests</h3>
              <p className="text-gray-700 text-sm md:text-base">Mock GRE Tests to familiarise students with the test environment.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaHeadphones className="text-blue-600 text-2xl md:text-3xl mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-700 text-sm md:text-base">Flexible scheduling to allow students to balance language learning with other responsibilities.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Rudra Overseas Offerings</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl">
            <li>Online Coaching</li>
            <li>Offline Coaching</li>
            <li>Customized Training</li>
            <li>Personalised Feedback</li>
            <li>Convenience</li>
            <li>Round-the-Clock Assistance</li>
            <li>Access to GRE Online Study Materials</li>
            <li>Mock Tests</li>
            <li>Personalised Training</li>
            <li>Time Management</li>
            <li>Live Classes</li>
            <li>Perpetual Assistance</li>
            <li>Direct Communication with Classroom Instructors</li>
            <li>Study Materials</li>
            <li>Motivated Atmosphere of Learning</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Study Abroad</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl">
            Rudra Overseas takes care of your entire admission process and leaves no stone unturned in getting you scholarships, teaching assistantships, and research assistantships. We partner with more than 300 universities throughout the world to assist you in your journey to study abroad.
          </p>
        </section>
      </main>


    </div>
  );
};

export default GREPage;