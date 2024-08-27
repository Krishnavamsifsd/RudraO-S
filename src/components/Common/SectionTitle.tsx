const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "60px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-3 text-2xl font-semibold leading-snug text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="text-sm leading-normal text-gray-600 dark:text-gray-300 md:text-base">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;