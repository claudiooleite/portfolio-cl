import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import screenshotPortfolio from "@/assets/portfolio-claudioleite.netlify.png";
import favicon1 from "@/assets/favicons/favicon-32x32.png";

// configuration icons
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Claudio Leite - Portfolio",
  description:
    "Welcome to my personal portfolio! Showcasing my skills and projects as a Front-end Developer with a focus on clean, organized code and a seamless user experience.",
  keywords:
    "Portfolio, Front-end Developer, Web Development, React, Next.js, Tailwind CSS, Chakra UI",
  author: "Claudio Leite",
  website: "https://claudioleite.com/",
  screenshot: screenshotPortfolio,
  favicon: favicon1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <link rel="canonical" href={metadata.website} />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.favicon} />
        <meta property="og:url" content={metadata.website} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content={metadata.favicon} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.favicon} />

        <title>{metadata.title}</title>
      </head>
      <body className={`${poppins.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
