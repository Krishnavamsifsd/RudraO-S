const menuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Courses",
    submenu: [
      { title: "Course 1", path: "/courses/course1" },
      { title: "Course 2", path: "/courses/course2" },
      { title: "Course 3", path: "/courses/course3" },
    ],
  },
  {
    title: "Study In",
    submenu: [
      { title: "Country 1", path: "/study-in/country1" },
      { title: "Country 2", path: "/study-in/country2" },
      { title: "Country 3", path: "/study-in/country3" },
    ],
  },
  {
    title: "Immigration",
    submenu: [
      { title: "Service 1", path: "/immigration/service1" },
      { title: "Service 2", path: "/immigration/service2" },
      { title: "Service 3", path: "/immigration/service3" },
    ],
  },
  {
    title: "About",
    submenu: [
      { title: "Our Story", path: "/about/our-story" },
      { title: "Team", path: "/about/team" },
      { title: "Careers", path: "/about/careers" },
    ],
  },

];

export default menuData;