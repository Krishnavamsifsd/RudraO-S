// pages/download.js

import Head from 'next/head';
import { FaFileExcel } from 'react-icons/fa';

const DownloadPage = () => {
  return (
    <div>
      <Head>
        <title>Download University List</title>
        <meta name="description" content="Download the list of universities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-10 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400">
  <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 drop-shadow-lg text-center">
    Download Universities List
  </h1>
  <div className="flex flex-col items-center mt-8 px-4 sm:px-0">
    <a
      href="/files/universities.xlsx"
      download="universities-list.xlsx"
      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-full shadow-xl hover:bg-green-700 transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      <FaFileExcel className="mr-3 text-xl sm:text-2xl" />
      <span className="text-base sm:text-lg font-semibold">Download Now</span>
    </a>
    <p className="mt-4 text-white text-base sm:text-lg max-w-md text-center">
      Get access to our comprehensive list of universities. Just click the button to download the Excel file!
    </p>
  </div>
</main>



      <footer className="flex items-center justify-center py-4">
        <p className="text-sm text-gray-500">© 2024 Rudra Overseas</p>
      </footer>
    </div>
  );
};

export default DownloadPage;
