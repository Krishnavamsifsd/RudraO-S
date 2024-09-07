"use client"
import React from 'react';
import { FaFileAlt, FaPaperPlane, FaEnvelopeOpenText, FaCheckCircle, FaMoneyCheckAlt, FaPassport, FaUniversity } from 'react-icons/fa';

const steps = [
  { title: 'Document Shared', icon: <FaFileAlt /> },
  { title: 'Application Submitted', icon: <FaPaperPlane /> },
  { title: 'Offer Received', icon: <FaEnvelopeOpenText /> },
  { title: 'Offer Accepted', icon: <FaCheckCircle /> },
  { title: 'Deposit Paid', icon: <FaMoneyCheckAlt /> },
  { title: 'Visa Approved', icon: <FaPassport /> },
  { title: 'Registered at University', icon: <FaUniversity /> },
];

const TimeLine = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/graduating-studying-abroad-international-concept_996201-28572.jpg?ga=GA1.1.2054148804.1721838972&semt=ais_hybrid')" }}></div>
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative bg-opacity-90 py-12 text-gray-900 dark:bg-gray-900 dark:bg-opacity-90 dark:text-gray-100">
        <div className="relative bg-pastel-blue">
          <svg className="absolute top-0 left-0 w-full h-16" viewBox="0 0 1440 320">
            <path fill="#a8dadc" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,122.7C960,96,1056,96,1152,122.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
              Ideal Student Journey
            </h2>
            <div className="relative">
              <div className="border-l-4 border-indigo-600 absolute h-full left-1/2 transform -translate-x-1/2"></div>
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}>
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-1/2`}>
                      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                        <div className="text-indigo-600 text-4xl">
                          {step.icon}
                        </div>
                        <div>
                        <div className="text-base md:text-md font-medium text-gray-700">
  {step.title}
</div>

                        </div>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white rounded-full w-8 h-8 items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;