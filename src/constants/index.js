import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  AES,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  CarTech,
  threejs,
  python,
  mysql,
  tensorflow,
  ubuntu,
  scikitLearn,
  cpp,
  slmGame,
  stroke,
  dogBreed,
  emotion,
  todo,
} from "../assets";

import backendIcon from "../assets/backend icon.png";
import programming from "../assets/programming.png";
import frontend from "../assets/responsive-design.png";
import MLIcon from "../assets/machine-learning.png";
import scraping from "../assets/scraping.png";

export const skillsCards = [
  {
    title: "Front End",
    icon: frontend,
    skills: [
      {
        skill: "HTML, CSS",
        level: "Experienced",
      },
      {
        skill: "MUI",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "React",
        level: "Experienced",
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
      },
      {
        skill: "tailwind",
        level: "Experienced",
      },
    ],
  },
  {
    title: "Back End",
    icon: backendIcon,

    skills: [
      {
        skill: "Node",
        level: "Experienced",
      },
      {
        skill: "MongoDB",
        level: "Experienced",
      },
      {
        skill: "MySQL",
        level: "Experienced",
      },
      {
        skill: "Python",
        level: "Experienced",
      },
    ],
  },
  {
    title: "Machine Learning",
    icon: MLIcon,

    skills: [
      {
        skill: "TensorFlow",
        level: "Experienced",
      },
      {
        skill: "Scikit-Learn",
        level: "Experienced",
      },
      {
        skill: "Pandas",
        level: "Experienced",
      },
      {
        skill: "Numpy",
        level: "Experienced",
      },
      {
        skill: "MatplotLib",
        level: "Experienced",
      },
      {
        skill: "Keras",
        level: "Experienced",
      },
      {
        skill: "OpenCV",
        level: "Experienced",
      },
    ],
  },

  {
    title: "Web Scraping",
    icon: scraping,

    skills: [
      {
        skill: "Selenium",
        level: "Experienced",
      },
      {
        skill: "BeautifulSoup",
        level: "Experienced",
      },
      {
        skill: "Proxy",
        level: "Experienced",
      },
    ],
  },
  {
    title: "Another Skills",
    icon: programming,

    skills: [
      {
        skill: "Java",
        level: "Experienced",
      },
      {
        skill: "C++",
        level: "Experienced",
      },
      {
        skill: "Ubuntu",
        level: "Experienced",
      },
      {
        skill: "C",
        level: "Experienced",
      },
      {
        skill: "Git",
        level: "Experienced",
      },
    ],
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Scraper",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "CPP",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "ScikitLearn",
    icon: scikitLearn,
  },

  {
    name: "My SQL",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Tect",
    description:
      "Web-based platform that allows users to buy or rent car, and offers many services form different maintenance centers. It connects customers to car showrooms, service centers and maintenance centers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "text-[#ffff00]",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: CarTech,
    source_code_link: "https://github.com/MohamedSamir245/CarTech-mss-Website",
  },
  {
    name: "Advanced Encryption System",
    description:
      "The AES algorithm is capable of using cryptographic kays of 128, 192 and 256 bits to encrypt and decrypt data is blocks of 128 bits. This is a verilog project.",
    tags: [
      {
        name: "verilog",
        color: "blue-text-gradient",
      },
    ],
    image: AES,
    source_code_link:
      "https://github.com/MohamedSamir245/Advanced-Encryption-System",
  },
  {
    name: "S&L - Monopoly Game",
    description:
      "The project is a simple game application that combines aspects of Snakes & Ladders and Monopoly. There are two modes in the game, Design mode and Play mode. In Design mode, the user can build the game board, while in Play mode, the player aims to reach the last cell before the other players. The game board includes snakes, ladders, and cards that can help or hinder the player's progress. The code is written in C++ using object-oriented programming and adhere to the responsibilities of each class as outlined in the project requirements.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "OOP",
        color: "green-text-gradient",
      },
    ],
    image: slmGame,
    source_code_link:
      "https://github.com/MohamedSamir245/Enhanced-Snake-ladder-Game",
  },
  {
    name: "Stroke Prediction Model",
    description:
      "Machine learning model to predict whether person will have stroke or not based on data of more than 5000 person.",
    tags: [
      {
        name: "Scikit-Learn",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "text-[#ffff00]",
      },
      {
        name: "Numpy",
        color: "pink-text-gradient",
      },
    ],
    image: stroke,
    source_code_link: "https://github.com/MohamedSamir245/StrokePredectionML/",
  },
  {
    name: "Dog Breed Identifier",
    description:
      "Neural network model to predict the breed  of a dog out of 70 breeds from the image.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "text-[#ffff00]",
      },
      {
        name: "Numpy",
        color: "pink-text-gradient",
      },
    ],
    image: dogBreed,
    source_code_link:
      "https://github.com/MohamedSamir245/Dog_Breed_Classifier/",
  },
  {
    name: "Emotion Classifier",
    description:
      "Deep Learning Project: CNN model to classify the emotion from a face image.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "text-[#ffff00]",
      },
      {
        name: "Numpy",
        color: "pink-text-gradient",
      },
      {
        name: "pandas",
        color: "red-text-gradient",
      },
    ],
    image: emotion,
    source_code_link:
      "https://github.com/MohamedSamir245/Emotion-Classification",
  },
  {
    name: "ToDo Website",
    description: "Website built with react, and connected to data base",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "text-[#ffff00]",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/MohamedSamir245/ToDo-Website-React",
  },
];

export { services, technologies, experiences, testimonials, projects };
