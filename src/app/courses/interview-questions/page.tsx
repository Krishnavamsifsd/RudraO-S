"use client";
import { FiHelpCircle } from "react-icons/fi";

const questions = [
  "Which course will you be undertaking in your master's program?",
  "Why did you choose this university for your studies?",
  "Why did you choose this specific course?",
  "What specialization are you intending to pursue?",
  "Can you describe your project work?",
  "What is the annual income and occupation of your financial sponsor?",
  "With a background in mechanical engineering, why have you chosen this particular course?",
  "How does this course align with your previous academic background?",
  "Which college did you attend for your UG studies, and what was your GPA?",
  "What activities or employment have you engaged in since then?",
  "When did you complete your graduation?",
  "Considering the cold climate, how do you plan to adapt and manage?",
  "Are you aware of the climate conditions at the university location?",
  "What have you done since completing your graduation?",
  "How did you learn about this university?",
  "Who are the clients you have worked with at past company?",
  "What programming languages are you proficient in?",
  "Could you explain the difference between a list and a tuple?",
  "Why are you pursuing further education after 2.5 years of professional experience?",
  "What motivates you to study this particular course?",
  "Why did you not apply for further studies immediately after graduation, and why are you applying now?",
];

const InterviewQuestions = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-4xl font-bold text-blue-900">
          F-1 Student Visa Interview Questions
        </h2>
        <p className="mb-12 text-center text-lg text-gray-700">
          Securing an F-1 student visa is an important part of studying in the
          United States. To increase your chances of success, it&apos;s
          essential to prepare for the interview questions you may be asked.
        </p>
        <p className="mb-12 text-center text-lg text-gray-700">
          There are no shortcuts to passing your US visa interview. It requires
          thorough preparation, much like your university application and the
          other components of the visa process. To get ready, practice answering
          potential interview questions you might face at the American embassy
          for your student visa.
        </p>
        <p className="mb-8 text-center text-xl font-semibold text-blue-900">
          Here are some common F-1 student visa interview questions:
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {questions.map((question, index) => (
            <div
              key={index}
              className="relative transform rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 -mr-4 -mt-4 rounded-full bg-blue-900 p-2 text-white">
                <FiHelpCircle size={24} />
              </div>
              <p className="text-gray-700">{question}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewQuestions;
