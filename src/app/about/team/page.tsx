import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import ceoImage from "../../../../public/images/team/ceo.jpg";

const Team = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      <br />
      <br />
      <div className="relative flex flex-col items-center p-4 md:p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 rounded-lg shadow-lg overflow-hidden max-w-xs md:max-w-sm lg:max-w-md">
        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative rounded-full overflow-hidden border-4 md:border-6 lg:border-8 border-gradient-to-r from-pink-500 to-orange-500">
          <Image
            src={ceoImage}
            alt="CEO Photo"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-1">Dr. Ekaveera Bandarupalli</h2>
          <p className="text-sm md:text-base mb-4">CEO & Founder</p>
          <div className="flex justify-center space-x-4 md:space-x-6">
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
              <FaLinkedin className="text-xl md:text-2xl" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors duration-300">
              <FaTwitter className="text-xl md:text-2xl" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors duration-300">
              <FaInstagram className="text-xl md:text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
