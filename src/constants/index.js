import { web, carrent, mobile, jobit, tripguide } from "../assets";

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
    title: "Frontend Software Engineer",
    icon: web,
  },
];

const experiences = [
  {
    title: "Frontend Software Engineer",
    company_name: "commercetools",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "June 2021 - Present",
    points: [
      "Collaborated with cross-functional teams to develop and maintain web applications using TypeScript, and React, and Recharts",
      "Designed and implemented intuitive user interface templates, enabling streamlined creation and management of discounts within the application.",
      "Developed a versatile export feature, allowing customers to conveniently generate PDF and CSV/TSV files of their dashboard data for further analysis.",
      "Refined unit tests and end-to-end tests using React Testing Library and Cypress, ensuring the highest quality of code.",
    ],
  },
  {
    title: "Senior Technical Support Engineer",
    company_name: "Kustomer(acquired by Meta)",
    icon: mobile,
    iconBg: "#383E56",
    date: "November 2019 - June 2021",
    points: [
      "Developed an efficient Dashboard using React Hooks, leveraging Kustomer's API to streamline processes and save the Technical Support Team 30 minutes per task, enhancing productivity. ",
      "Actively mentored new hires, providing guidance and insights on platform usage and API documentation, facilitating a smooth onboarding process and accelerating their acclimation to the company's technology stack.",
    ],
  },
  {
    title: "Frontend Software Engineer",
    company_name: "FightPandemics",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "July 2020 - Feb 2020",
    points: [
      "Skillfully engineered the frontend for private messaging and notification functionalities, ensuring seamless communication and timely alerts for users within the platform.",
      "Tackled complex UX challenges, implementing innovative solutions to improve user experience and drive product success.",
      "Conducted user research to gather feedback and insights, informing design decisions and enhancing application usability.",
    ],
  },
];

const projects = [
  {
    name: "Placeholder",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Placeholder",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Placeholder",
    description: "",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, projects };
