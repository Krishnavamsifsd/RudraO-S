import { Feature } from "@/types/feature";
import { FaUserGraduate, FaBookOpen, FaChalkboardTeacher, FaCogs, FaGlobe, FaHandsHelping } from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaUserGraduate size={40} className="fill-current" />,
    title: "Personalized Counseling",
    paragraph:
      "Get tailored advice and guidance for your educational journey abroad. Our experts help you choose the right course and university.",
  },
  {
    id: 2,
    icon: <FaBookOpen size={40} className="fill-current" />,
    title: "High-quality Courses",
    paragraph:
      "We partner with top universities to offer high-quality courses that meet international standards and enhance your career prospects.",
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher size={40} className="fill-current" />,
    title: "Latest Curriculum",
    paragraph:
      "Stay ahead with the latest curriculum designed to meet the evolving demands of the global job market.",
  },
  {
    id: 4,
    icon: <FaChalkboardTeacher size={40} className="fill-current" />,
    title: "Expert Faculty",
    paragraph:
      "Learn from experienced faculty members who are experts in their fields and committed to your academic success.",
  },
  {
    id: 5,
    icon: <FaCogs size={40} className="fill-current" />,
    title: "Customizable Programs",
    paragraph:
      "Choose from a variety of customizable programs that fit your career goals and academic interests.",
  },
  {
    id: 6,
    icon: <FaHandsHelping size={40} className="fill-current" />,
    title: "Expert Guidance",
    paragraph:
      "Receive expert guidance from our experienced counselors to navigate your study abroad journey successfully.",
  },
];

export default featuresData;