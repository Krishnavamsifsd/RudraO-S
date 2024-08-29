// src/pages/page.tsx
import React from 'react';
import Services from '@/components/Services';

const Page = () => {
  return (
    <div>
      {/* <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
        <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
          Stay Updated with Rudra Overseas
        </h3>
        <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
          Subscribe for updates on study abroad opportunities and visa guidance. Stay informed about your education journey.
        </p>
      </div> */}
      <br />
      <br />
      <Services />
    </div>
  );
};

export default Page;