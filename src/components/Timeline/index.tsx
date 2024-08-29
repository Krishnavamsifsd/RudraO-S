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
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <div className="text-lg font-medium text-gray-700">
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
  );
};

export default TimeLine;