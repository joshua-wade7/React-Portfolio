import devloreCafe from "../images/devLore.PNG";
import encoded from "../images/encoded.PNG";
import digitalLibrarian from "../images/digital_librarian.PNG";
import jate from "../images/Jate.PNG";
import employeeTracker from "../images/employee_tracker.PNG";
import socialNetwork from "../images/social_network_api.PNG";

export const projects = [
  {
    image: encoded,
    title: "Encoded",
    description:
      "Alternative to linkedIn with an emphasis on the tech industry and enabling the user to make deeper connections.",
    repo: "https://github.com/therealsweven/magnificent-mustache-men",
    technologies:
      " React, JavaScript, Tailwind CSS, GraphQL, MongoDB, Mongoose",
    id: 0,
  },
  {
    image: devloreCafe,
    title: "Devlore Cafe",
    description:
      "A web app that enables a restaurant to have their menu reviewed before its official release.",
    repo: "https://github.com/joshua-wade7/beta-tasters",
    technologies: " Handlebars, MySQL, Sequelize, JavaScript, Bootstrap",
    id: 1,
  },
  {
    image: digitalLibrarian,
    title: "Digital Librarian",
    description:
      "Allows users to be able to research books by searching based on title or author.",
    repo: "https://github.com/joshua-wade7/book-search",
    technologies:
      " HTML, CSS, Materialize, JavaScript, JQuery, Google Books API",
    id: 2,
  },
  {
    image: socialNetwork,
    title: "Social Network API",
    description:
      "An API that allows users to add, update, and delete friends within a social networking database.",
    repo: "https://github.com/joshua-wade7/Social-Network-Api",
    technologies: " Node.js, MongoDB, Express.js, Insomnia",
    id: 3,
  },
  {
    image: jate,
    title: "Jate",
    description:
      "A PWA that enables the user to create notes or code snippets with or without an internet connection.",
    repo: "https://github.com/joshua-wade7/PWA-Text-Editor",
    technologies: " PWA, Service Workers, Express.js, HTML",
    id: 4,
  },
  {
    image: employeeTracker,
    title: "Employee Tracker",
    description:
      "A back-end application that allows a business owner to be able to view and track employees within every department of their business as well as the manager head(s).",
    repo: "https://github.com/joshua-wade7/Employee-Tracker",
    technologies: " Inquirer, MySQL, Node.js, JavaScript",
    id: 5,
  },
];
