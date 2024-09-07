const menuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Courses",
    submenu: [
      { title: "IELTS", path: "/courses/ielts" },
      { title: "IELTS General", path: "/courses/ielts-general" },
      { title: "Duolingo", path: "/courses/duolingo" },
      { title: "GRE", path: "/courses/gre" },
      { title: "TOEFL", path: "/courses/toefl" },
      { title: "Interview Questions", path: "/courses/interview-questions" },
    ],
  },
  {
    title: "Study In",
    submenu: [
      // { title: "Australia", path: "/study-in/australia" },
      // { title: "UK", path: "/study-in/uk" },
      // { title: "USA", path: "/study-in/usa" },
      // { title: "Canada", path: "/study-in/canada" },
      { title: "Australia", path: "/universities-list" },
      { title: "UK", path: "/universities-list" },
      { title: "USA", path: "/universities-list" },
      { title: "Canada", path: "/universities-list" }
    ],
  },
  // {
  //   title: "Immigration",
  //   submenu: [
  //     { title: "Australia", path: "/study-in/australia" },
  //     { title: "UK", path: "/study-in/uk" },
  //     { title: "USA", path: "/study-in/usa" },
  //     { title: "Canada", path: "/study-in/canada" },
  //   ],
  // },
  {
    title: "About",
    submenu: [
      { title: "Services", path: "/about/services" },
      { title: "Our Story", path: "/about/our-story" },
      { title: "Team", path: "/about/team" },
      { title: "Careers", path: "/about/careers" },
    ],
  },
  {
    title: "Contact",
    submenu: [
      { title: "Guntur", contactName: "Lokesh Madineni", phone1: "9885234150", phone2: "9035721357"  , path:""},
      { title: "Nerseropeta", contactName: "Bandarupalli Subba Rao", phone1: "9390510101", phone2: "9885234150" ,path:""},
      { title: "Kothagudem", contactName: "Madineni Kalpana", phone1: "8247451462" ,path:""},
    ],
  },
];

export default menuData;
