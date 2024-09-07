import React from 'react';
import { FaUserGraduate, FaSchool, FaCalendarAlt, FaPassport, FaChalkboardTeacher, FaGlobe, FaAward } from 'react-icons/fa';

const milestones = [
  // { title: 'Students Trained', value: '1,50,000+', icon: <FaUserGraduate /> },
  // { title: 'Number of Admissions', value: '12,500+', icon: <FaSchool /> },
  // { title: 'Years of Experience', value: '15+', icon: <FaCalendarAlt /> },
  { title: 'Visa Success Rate', value: '98%', icon: <FaPassport /> },
  { title: 'Courses Offered', value: '500', icon: <FaChalkboardTeacher /> },
  { title: 'Countries Covered', value: '30+', icon: <FaGlobe /> },
  // { title: 'Awards Won', value: '50+', icon: <FaAward /> },
];

const Milestone = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Our Milestones and Achievements
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 place-items-center">
  {milestones.map((milestone, index) => (
    <div key={index} className="relative flex flex-col items-center text-center">
      <div className="w-16 h-16 sm:w-24 sm:h-24 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl mb-2">
        {milestone.icon}
      </div>
      <div className="text-xl sm:text-2xl font-bold text-indigo-600 mb-1">
        {milestone.value}
      </div>
      <div className="text-sm sm:text-lg font-medium text-gray-700 text-center">
        {milestone.title}
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Milestone;