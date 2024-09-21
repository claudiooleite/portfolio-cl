import {
  faCloud,
  faCode,
  faMobileAlt,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

export const personalInfo = {
  personalDetails: [
    {
      name: "Claudio Leite",
      phoneNumber: "+4917679002154",
      email: "claudio.leite@hotmail.com",
      location: "Merzig, Germany",
    },
    {
      gitHub: "https://github.com/claudiooleite",
      linkedin: "https://www.linkedin.com/in/claudio-leite-bb2a3262/",
      leetCode: "https://leetcode.com/u/claudiooleite/",
      codeWars: "https://www.codewars.com/users/claudiooleite",
    },
  ],
  aboutMe: {
    bio: "I'm a Frontend Developer who loves crafting clean, responsive, and intuitive user interfaces. My journey into tech is a bit unconventional. I come from a background in sports science, which gave me a strong sense of discipline, attention to detail, and a knack for problem-solving. I’m always eager to dive into new challenges, collaborate with others, and grow my skills in HTML, CSS, JavaScript, and React. Whether it’s coding or life, I believe in pushing boundaries and staying curious. Let's create something great together!",
    whatIDo: {
      WebDevelopment: {
        name: "Web Development",
        description:
          "Creating responsive, fast, and user-friendly websites using modern frameworks like React, Next.js, and TailwindCSS. Ensuring cross-browser compatibility and optimizing for performance.",
        icon: faCode,
      },
      AppDevelopment: {
        name: "App Development",
        description:
          "Building dynamic, single-page applications (SPA) with React, integrating APIs, and handling complex state management using tools like Redux or Context API.",
        icon: faMobileAlt,
      },
      UIUXDesign: {
        name: "UI/UX Design",
        description:
          "Designing intuitive and accessible user interfaces with a focus on usability, employing tools like Chakra UI and TailwindCSS to enhance the user experience.",
        icon: faPaintBrush,
      },
      CloudIntegration: {
        name: "Cloud Integration",
        description:
          "Leveraging platforms like Netlify and GitHub for seamless deployment and version control, ensuring websites and apps are optimized for cloud environments.",
        icon: faCloud,
      },
    },
  },
  resume: {
    education: {
      university: {
        degree: "Bachelor of Science (BS), Sports Science",
        school: "Universidade da Beira Interior",
        duration: "2009 – 2013",
      },
      courses: {
        degree: "Meta Front-End Developer Professional Certificate",
        school: "Coursera Plus",
        duration: "Feb - Jun 2024",
      },
    },

    experience: [
      {
        company: "Wish-Lift Online Coaching",
        role: "Founder and Coach",
        duration: "Dec. 2019 - Present",
        description: [
          "Successfully launched and scaled an online fitness coaching business.",
          "Leveraged web development, SEO, and social media strategies to reach clients worldwide.",
          "Designed and managed the business website, contributing to increased client engagement.",
        ],
      },
      {
        company: "PureGym",
        role: "Personal Trainer",
        duration: "Mar. 2015 – Dec. 2019",
        description: [
          "Delivered personalised fitness training sessions.",
          "Developed and implemented progress tracking systems, leading to a 25% increase in client satisfaction and retention.",
        ],
      },
    ],
    skills: {
      "Technical Skills": ["HTML", "CSS", "JavaScript"],
      "Frameworks and Libraries": [
        "React",
        "Chakra UI",
        "Formik",
        "Next.js",
        "Tailwindcss",
      ],
      "Tools and Platforms": ["GitHub", "VS Code", "Netlify", "Git"],
      "Languages": [
        "Portuguese (native)",
        "English (fluent)",
        "Spanish (advanced)",
        "German (working proficiency)",
      ],
    },
  },
  portfolio: [
    {
      name: "PantryPal - Smart Kitchen Inventory App",
      description:
        "An inventory management app to track pantry items, suggest recipes, and notify users of expiring products. Built with React, it integrates a public recipe API for tailored meal suggestions.",
      liveDemo: "https://pantrypall.netlify.app/",
      gitHub: "https://github.com/claudiooleite/pantrypall",
      image: "",
    },
    {
      name: "E-Commerce Music Store Web Application",
      description:
        "A full-featured e-commerce platform for music products. Includes a responsive design, a dynamic product carousel, and an intuitive checkout process.",
      liveDemo: "",
      gitHub: "",
      image: "",
    },
    {
      name: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio website to showcase projects and skills, focusing on responsive design and accessibility.",
      liveDemo: "https://claudioportfolio.netlify.app/",
      gitHub: "",
      image: "",
    },
    {
      name: "The Little Lemon Restaurant Web App",
      description:
        "A web application featuring table reservations and weekly specials. Includes a responsive navbar and user-centered design.",
      liveDemo: "https://restaurantbookingproject.netlify.app/",
      gitHub: "https://github.com/claudiooleite/litle_lemon",
      image: "",
    },
  ],
};
