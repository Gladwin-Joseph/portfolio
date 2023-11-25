import {
  firebase,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  python,
  git,
  nextjs,
  threejs,
  coinhood,
  hulu,
  beats,
  creator,
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
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Full Stack Developer",
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
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
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
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
];

const projects = [
  {
    name: "Coin Hood",
    description:
      "A crypto currency tracker made with react, usingfirebase as the back-end, successfully implemented multi-pagerouting using react-router, integrated the coin-gecko api, used tailwind-css for the front-end. The website also has authentication for a particular user, using firebase auth. Deployed using vercel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: coinhood,
    project_link: "https://coinhood.vercel.app/",
  },
  {
    name: "Hulu",
    description:
      "A clone based website on a popular video streaming platform, the website made implements next.js providing server side rendering, the website uses the TMDB api. The website was made mainly to test and learn my front end skills and it was deployed using vercel.",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hulu,
    project_link: "https://hulu-clone-kappa-nine.vercel.app/",
  },
  {
    name: "Beats",
    description:
      "Carefully observed the Beats headphone website, and came up with a sleek and modern remake of the landing page, used plain html, scss and javascript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: beats,
    project_link: "https://beats-hazel.vercel.app/",
  },
];

export { services, technologies, projects };
