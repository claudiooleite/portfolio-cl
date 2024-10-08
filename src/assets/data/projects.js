import img from "../images/Acer_Wallpaper_04_3840x2400.jpg";
import desktopLittleLemon from "@/assets/images/little-lemon/desktop-view-screenshot.png";
import mobileHArmonyHub from "@/assets/images/harmony-hub/mobile-home.png";
import mobilePAntrypall from "@/assets/images/pantry-pall/dektop-home-pantrypall..png";
import dashboard from "@/assets/images/dashboard/desktop-dashboard.png";
import sketch from "@/assets/images/sketch/sketch.png";
import memeGeneratorImage from "@/assets/images/meme/meme-project-claudio.netlify.app_.png";
import tenzies from "@/assets/images/tenzies/tenzies-game-project-claudio.netlify.app_.png";

export const projects = [
  {
    title: "Restaurant Website",
    description:
      "Thi is a dynamic, responsive Web App developed as part of a Meta Professional Frontend course. It features a flexible navigation system that adapts to different screen sizes, a visually appealing hero section, and a showcase of special dishes using a sleek card layout. The app also includes a user-friendly booking form for table reservations and seamless page routing powered by React Router. Built with React, Chakra UI, and responsive CSS, this project demonstrates my ability to create engaging and functional web applications.",
    image: desktopLittleLemon,
    url: "https://restaurantbookingproject.netlify.app/",
    // video: video1,
    stack: ["React", "JavaScript", "HTML", "CSS", "React Router"],
    github: "https://github.com/claudiooleite/litle_lemon",
    category: "Web",
  },
  {
    title: "Harmony Hub Music Store",
    description:
      "E-commerce platform designed for purchasing musical instruments and accessories. It showcases a comprehensive understanding of front-end development, offering users a smooth shopping experience. The project includes a full product catalog, detailed product pages, a shopping cart, and an integrated checkout process. Stock updates dynamically on individual item pages.    image: img,",
    image: mobileHArmonyHub,
    url: "https://harmonyhubproject.netlify.app/",
    // video: video2,
    stack: ["React", "JavaScript", "HTML", "CSS", "React Router"],
    github: "https://github.com/claudiooleite/monogram-project",
    category: "E-commerce",
  },
  {
    title: "Pantry Pall",
    description:
      "Smart recipe management app that helps users discover meals based on their pantry items and dietary preferences. Whether you're looking for high-protein meals, fiber-rich options, or simply want to whip up something with what's on hand, PantryPal has you covered. With API integration, users can search, filter, and explore recipes with ease.",
    image: mobilePAntrypall,
    url: "https://pantrypall.netlify.app",
    stack: ["React", "API Integration", "Tailwindcss", "Next.js"],
    github: "https://github.com/claudiooleite/pantrypall",
    category: "App",
  },
  {
    title: "Personal Dashboard",
    description:
      "A simple dashboard built with HTML, CSS, and JavaScript to practice API calls. The dashboard displays a dynamic background image, live cryptocurrency prices, weather data based on the user's geolocation, and a real-time clock. It integrates with Unsplash for background images, CoinGecko for cryptocurrency prices, and OpenWeather for live weather updates.",
    image: dashboard,
    url: "https://personal-dashboard-claudio.netlify.app/", // Replace with actual URL
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "API Integration",
      "Unsplash API",
      "CoinGecko API",
      "OpenWeather API",
    ],
    github: "https://github.com/claudiooleite/personal_dashboard",
    category: "Web",
  },
  {
    title: "Etch-a-sketch",
    description:
      "In this project, I built a browser-based toy that combines the features of a sketchpad and an Etch-A-Sketch! This challenge was an opportunity for me to hone my skills in DOM manipulation, JavaScript methods, and CSS techniques.",
    image: sketch,
    url: "https://claudiooleite.github.io/etch-a-sketch/",
    stack: ["JavaScript", "DOM Manipulation", "HTML", "CSS"],
    github: "https://github.com/claudiooleite/etch-a-sketch",
    category: "Game",
  },
  {
    title: "Meme Generator",
    description:
      "A fun meme generator built with React to practice API calls and state management. It fetches meme images from the Imgflip API, allowing users to generate random memes and customize the text on the top and bottom of the images.",
    image: memeGeneratorImage,
    url: "https://meme-project-claudio.netlify.app/",
    stack: [
      "React",
      "JavaScript",
      "API Integration",
      "Imgflip API",
      "useEffect",
      "useState",
    ],
    github: "https://github.com/claudiooleite/meme-generator",
    category: "App",
  },
  {
    title: "Tenzies",
    description:
      "Tenzies is a dice game built with React where players roll dice and hold numbers to match all dice values. It includes state management and uses React Confetti for an interactive winning animation.",
    image: tenzies,
    url: "https://tenzies-game-project-claudio.netlify.app/",
    stack: ["React", "JavaScript", "State Management", "HTML", "CSS"],
    github: "https://github.com/claudiooleite/tenzies-game",
    category: "Game",
  },
];
