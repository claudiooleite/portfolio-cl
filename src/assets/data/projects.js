import img from "../images/Acer_Wallpaper_04_3840x2400.jpg";
import desktopLittleLemon from "@/assets/images/little-lemon/desktop-view-screenshot.png";
import mobileHArmonyHub from "@/assets/images/harmony-hub/mobile-home.png";

export const projects = [
  {
    title: "Restaurant Website",
    description:
      "Thi is a dynamic, responsive Web App developed as part of a Meta Professional Frontend course. It features a flexible navigation system that adapts to different screen sizes, a visually appealing hero section, and a showcase of special dishes using a sleek card layout. The app also includes a user-friendly booking form for table reservations and seamless page routing powered by React Router. Built with React, Chakra UI, and responsive CSS, this project demonstrates my ability to create engaging and functional web applications.",
    image: desktopLittleLemon,
    url: "https://restaurantbookingproject.netlify.app/",
    // video: video1,
    stack: ["React", "JavaScript", "HTML", "CSS", "React Router"],
    github: "https://github.com/claudiooleite/litle_lemon", // Fill in with GitHub link
    category: "Web", // You can change the category as needed
  },
  {
    title: "Harmony Hub Music Store",
    description:
      "E-commerce platform designed for purchasing musical instruments and accessories. It showcases a comprehensive understanding of front-end development, offering users a smooth shopping experience. The project includes a full product catalog, detailed product pages, a shopping cart, and an integrated checkout process. Stock updates dynamically on individual item pages.    image: img,",
    image: mobileHArmonyHub,
    url: "https://harmonyhubproject.netlify.app/",
    // video: video2,
    stack: ["React", "JavaScript", "HTML", "CSS", "React Router"],
    github: "https://github.com/claudiooleite/monogram-project", // Fill in with GitHub link
    category: "E-commerce",
  },
  {
    title: "Pantry Pall",
    description:
      "PantryPal is a smart recipe management app designed to help you make the most of the ingredients you have on hand. Whether you're a seasoned cook or just starting out, PantryPal lets you search for recipes based on what's in your pantry, track your dietary preferences, and discover new meal ideas with ease.",
    image: img,
    url: "https://pantrypall.netlify.app",
    stack: ["React", "API Integration", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/claudiooleite/pantrypall", // Fill in with GitHub link
    category: "App",
  },
  {
    title: "Memory Gif Game",
    description:
      "The Memory Gif Game app is a simple and intuitive web application designed to showcase GIF images fetched from the GIPHY API. With this app, users can enjoy a dynamic display of GIFs, interact with them, and even shuffle the displayed images for added fun.",
    image: img,
    url: "https://memory-gif-game.netlify.app",
    stack: ["JavaScript", "API Integration", "React", "HTML", "CSS"],
    github: "https://github.com/claudiooleite/memory_gif_game", // Fill in with GitHub link
    category: "Game",
  },
  {
    title: "React CV App",
    description:
      "I constructed a CV application using React.js, harnessing useState, useEffect, and useContext for state management. Users can input their details and instantly preview their CV in the browser. This project allowed me to refine my React skills and highlights my ability to create dynamic user experiences.",
    image: img,
    url: "https://odincvapp.netlify.app/",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/claudiooleite/cv_app", // Fill in with GitHub link
    category: "Web",
  },
  {
    title: "Etch-a-sketch",
    description:
      "In this project, I crafted a browser-based toy that combines the features of a sketchpad and an Etch-A-Sketch! This challenge was an opportunity for me to hone my skills in DOM manipulation, JavaScript methods, and CSS techniques.",
    image: img,
    url: "https://claudiooleite.github.io/etch-a-sketch/",
    stack: ["JavaScript", "DOM Manipulation", "HTML", "CSS"],
    github: "https://github.com/claudiooleite/etch_a_sketch", // Fill in with GitHub link
    category: "Games",
  },
];
