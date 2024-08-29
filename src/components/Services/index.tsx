// src/components/Services.tsx
import React from 'react';

const services = [
  {
    title: "Student Analysis",
    description: "Our team of counselors is committed to analyzing students' profiles.",
    icon: "📊",
  },
  {
    title: "Info & Guidance",
    description: "Complete information on different courses and guidance.",
    icon: "ℹ️",
  },
  {
    title: "University Selection",
    description: "We represent reputed universities to help you choose the best fit.",
    icon: "🏫",
  },
  {
    title: "Application & Documents",
    description: "Assistance with the entire application process to universities.",
    icon: "📄",
  },
  {
    title: "Follow Up",
    description: "We follow up on students' applications to ensure timely processing.",
    icon: "🔄",
  },
  {
    title: "Scholarship Assistance",
    description: "Guidance on scholarship availability and application.",
    icon: "🎓",
  },
  {
    title: "Bank Loan Assistance",
    description: "Complete assistance with securing bank loans for education.",
    icon: "🏦",
  },
  {
    title: "Forex Services",
    description: "Assistance with foreign exchange services once finances are sorted.",
    icon: "💱",
  },
  {
    title: "Visa Application",
    description: "Guidance on visa application once the offer letter arrives.",
    icon: "🛂",
  },
  {
    title: "Interview Preparations",
    description: "Preparation for visa interviews to ensure success.",
    icon: "🎤",
  },
  {
    title: "Airlines Booking",
    description: "We provide air tickets at concessional rates.",
    icon: "✈️",
  },
  {
    title: "Pre Departure Briefings",
    description: "Briefings to help students understand their destination.",
    icon: "🗺️",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="ml-4 text-xl font-semibold text-black dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;