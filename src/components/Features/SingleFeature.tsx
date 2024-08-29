import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
 <div className="w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-lg">
  <div className="wow fadeInUp" data-wow-delay=".15s">
    <div className="mb-4 flex items-center">
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        {icon}
      </div>      </div>
      <h3 className="ml-4 text-lg font-bold text-gray-900 dark:text-white sm:text-xl lg:text-lg xl:text-xl">
        {title}
      </h3>
    </div>
    <p className="text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-300">
      {paragraph}
    </p>
  </div>
</div>
  );
};

export default SingleFeature;