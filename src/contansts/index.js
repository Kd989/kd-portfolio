import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ct,
  trycatch,
  finacus,
  mg,
  kanban,
  boomerang,
  gymfit

} from "../assets";



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
    title: "Photographer",
    icon: mobile,
  },
  {
    title: "computer retail",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Visualizer and Photographer",
    company_name: "ClassToppers",
    icon: ct,
    iconBg: "#383E56",
    date: "June 2019 - October 2020",
    points: [
      "Creating branding projects from the ground up providing quality art and creative direction design website and onsite digital experirence",
      "Presenting and explaning visual to collefauges and clients",
      "Ensuring all ideas are represented as accurately and attractively as possible",
    ],
  },
  {
    title: "React.js Intern",
    company_name: "TRY CATCH",
    icon: trycatch,
    iconBg: "#E6DEDD",
    date: "June-2019 - November 2019",
    points: [
      "Initially, I was introduced to the company's development environment, tools, and processes. This included familiarizing myself with programming languages, frameworks, version control systems, and project management tools. I attended training sessions and collaborated with experienced developers to grasp the fundamentals.",
      "Once I gained basic proficiency, I was assigned small tasks and gradually given more significant responsibilities. I worked on real-world projects under the guidance of senior developers. This hands-on experience allowed me to apply my skills and learn new ones in a practical setting",
      "As a web developer, I encountered various challenges and obstacles while working on projects. Whether it was debugging code, optimizing performance, or implementing new features, problem-solving became an integral part of my daily routine. These experiences honed my critical thinking abilities and taught me to approach challenges with a systematic mindset",
      " Being part of an IT company exposed me to a network of professionals in the industry. ",
    ],
  },
  {
    title: "frontend Developer",
    company_name: "Mindmajic",
    icon: mg,
    iconBg: "white",
    date: "Nov 2020 - Nov 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Finacus Solution",
    icon: finacus,
    iconBg: "white",
    date: "Feb 2023 - Present",
    points: [
      "Working as a software developer in the BFSI domain involves utilizing skills in React.js and various Javasript libraies to create application and system for the finance industry",
      "Migration of banking softwares which are based on silverlite and then migrated to React.js",
      "Implementation of real life Problems in the application",
      "Fulling client requirement and optimizing the application",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Deepa Gupta",
    designation: "founder",
    company: "mindMajic",
    image:mg,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Nikhil Surve",
    designation: "ceo",
    company: "Nikhil Transport",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Bhavik Gaikwad",
    designation: "Founder",
    company: "Sea Water Sports",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kanban Board",
    description:
      "A Kanban board is a project management tool that visualize work using columns to represent different stages of a project.A React.js based Kanban board utilize Framer motion for smooth animations and transition while pure css handles the styling .Reaj.js manges the boards component and state, which include redux framer mtion motion adds dynamics animations and pure css styles the boards appreanece providing an interactive and visually appealing interface for organizing tasks in a kanban layout",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Framer motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: kanban,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Boomerang",
    description:
      "Boomerang is web application designed to empower business by providing a platform to showcase their work effectively.this platform enables buisness to highlight their product services or porject fostering growth opportunities by presenting their work  to potential clients or customers.boomerrang offers a user freindly interface",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material ui",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: boomerang,
    // source_code_link: "https://github.com/",
  },
  {
    name: "GYMfit",
    description:
    "GymFit is a comprehensive web application designed specifically for gyms, offering a seamless platform for managing memberships, scheduling classes, tracking workouts, and connecting with members. With user-friendly interfaces for both gym administrators and clients, GymFit streamlines gym operations while enhancing member engagement through personalized fitness plans, progress tracking, and social interaction features.",

    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "white-text-gradient",
      },
    ],
    image: gymfit,
    // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
