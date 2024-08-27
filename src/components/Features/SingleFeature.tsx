import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-lg">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-300">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;