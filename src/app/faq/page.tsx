"use client"
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import faqImage from '../../../public/images/faq/faq.png';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What are the eligibility criteria for admission into a US university?',
      answer: `For entry into a Master's program, the entry requirement is a Bachelor's degree awarded by a recognized institution, with a minimum GPA of 3.0 on a 4.0 scale. Most programs will require candidates to clear the GRE examination or other subject-specific exams like GMAT.
  The acceptance of the Indian 3-year Bachelor's degree, i.e., BA, BSc, or BCom, varies as per the university. In some instances, an additional minimum 1-year postgraduate degree may also be required for admission.`,
    },
    {
      question: 'What are the Popular Courses in the USA?',
      answer: `The Popular courses in the USA are:
  • Engineering: Bio-Medical Engineering, Chemical Engineering, Civil Engineering, Computer Engineering, Mechanical Engineering, Aeronautical Engineering
  • Business & Management: Business Analytics, International Management, Finance, Marketing
  • Public Health: Environmental Health Sciences, Epidemiology Population, Family & Health, Biostatistics
  • Sciences: Biology, Mathematics, Physics, Data Science`,
    },
    {
      question: 'What is the difference between a Public and Private University?',
      answer: `Public universities, also called state universities, receive funding from the state government through public means. This financing helps improve the infrastructure and education opportunities for these universities and their students.
  Private universities are not funded or run by the government. Instead, they rely on funding from students, donations from benefactors, and private sources. These institutions are among the most prominent in the world.`,
    },
    {
      question: 'What documents do I need to apply to the US universities?',
      answer: `Academic Documents: (10th, 12th, and B.tech Transcripts)
  Test Scores: (SAT /GRE /GMAT and IELTS/TOEFL/PTE)
  Personalized Documents: (SOP, Resume, and 3 Letters of Recommendation)
  Extracurricular Documents: (Internship, Work Experience related documents, and Projects / Merit Certificate / Sports Certificate.)`,
    },
    {
      question: 'What is I-20 and How long does it normally take to get an I-20?',
      answer: `The I-20 is the document you need to apply for the F-1 or J-1 student visa at a consulate outside the US. Once the student submits the financial documents (Sponsor Bank Certificate and Sponsor Affidavit of Support) and deposit, the University will issue the I-20 for visa purposes.
  I-20 Processing time is approximately 2 weeks once the university receive your complete application.`,
    },
    {
      question: 'Which states have similar Indian climates in the USA?',
      answer: `Alabama, Arkansas, Florida, Georgia, Kentucky, Louisiana, Maryland, Mississippi, North Carolina, Oklahoma, Texas, Virginia, West Virginia, Arizona, California`,
    },
    {
      question: 'Is 15 years of Education accepted for the USA?',
      answer: `Yes, 15 years of education accepted to study master’s programs in the US. But it is important to note that not all US universities accept 15 years of education.`,
    },
    {
      question: 'Career opportunities after completing a Master\'s in the USA',
      answer: `After completing their masters in the USA, international students have several post-study work options. There are many career opportunities in the USA after masters in the fields like Computer Science, Finance, Data Science, Business and Pharmacy`,
    },
    {
      question: 'What are the language requirements for admission into a US university?',
      answer: `Language requirements for admission to U.S. universities vary depending on the institution and the academic program.
  The most commonly accepted English language proficiency tests are the TOEFL (Test of English as a Foreign Language) and IELTS (International English Language Testing System). Some universities may also accept other tests such as the Duolingo English Test or the Pearson Test of English (PTE).
  Universities typically have minimum score requirements for these tests. The required scores vary by institution and sometimes by academic program. It's essential to check the specific requirements of the university and program you are interested in.
  *Test-Optional Policies:
  *In some cases, applicants may be exempt from English language proficiency tests if they have completed a certain level of education in a country where English is the official language, or if they have studied in an English-medium institution.
  *Some universities offer English language programs or conditional admission, allowing students to improve their language skills before beginning their academic programs.
  It's important to carefully review the admission requirements of the specific university and program you are interested in.`,
    },
    {
      question: 'When can I start (Intakes) my course in the US?',
      answer: `The fall semester is the primary intake for most academic programs. It usually begins in August or September. The application process for fall admission often starts a year in advance, and application deadlines are typically in the preceding fall.
  Spring Semester: The spring semester is the secondary intake and begins in January. While not as common as fall admission, many universities offer the opportunity for students to start their programs in the spring. Application deadlines for spring admission are usually in the preceding spring or summer.`,
    },
    {
      question: 'What are Duolingo Accepted Universities in USA for 2024 Intake?',
      answer: `Duolingo accepted few universities are listed below:
  University of New Haven, University of Dayton, University of Illinois Springfield, UMass Boston, University of Illinois Chicago, Saint Louis University, University of Alabama at Birmingham, Hofstra University, Montclair State University, Cleveland State University, University Of Pacific, Oregon State University, Golden Gate University, Northern Arizona University, University of Central Oklahoma, Lewis University, Mercer University, UMass Amherst, Roosevelt University, Miami University`,
    },
    {
      question: 'Universities in USA Without GRE for Masters',
      answer: `GRE waiver few universities in the USA are listed below:
  Drexel University, Florida Atlantic University, Kennesaw State University, Texas A & M University - Corpus Christi, Pittsburg State University, Colorado State University, Oklahoma City University, California State University Long Beach, North Eastern University, DePaul University, Sacred Heart University, Arizona State University, NJIT, Missouri University of Science and Technology, St Cloud State University, Baylor University, Long Island University (Brooklyn), James Madison University, Lipscomb University, University of Hartford`,
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-20">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
      <div className="flex flex-col md:flex-row items-start">
      <div className="md:w-1/3 w-full mb-8 md:mb-0">
          <Image src={faqImage} alt="FAQ" className="w-full h-auto" />
        </div>
        <div className="md:w-2/3 w-full">
  <div className="divide-y divide-gray-200 dark:divide-gray-700">
    {faqs.map((faq, index) => (
      <div key={index} className="divide-y divide-gray-200 dark:divide-gray-700">
        <button
          className={`w-full flex justify-between items-center text-left text-base font-semibold text-gray-800 dark:text-gray-200 p-4 focus:outline-none transition-colors duration-300 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm ${
            activeIndex === index ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-600'
          }`}
          onClick={() => toggleAccordion(index)}
        >
          {faq.question}
          {activeIndex === index ? (
            <FaChevronUp className="text-white transition-transform transform rotate-180" />
          ) : (
            <FaChevronDown className="text-gray-500 transition-transform transform rotate-0" />
          )}
        </button>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: activeIndex === index ? 'auto' : 0, opacity: activeIndex === index ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {activeIndex === index && (
            <div className="p-4 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-lg shadow-inner">
              {faq.answer.split('\n').map((line, i) => (
                <p key={i} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default FAQ;