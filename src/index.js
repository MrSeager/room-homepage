import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { motion } from 'framer-motion';

import LogoImg from './images/logo.svg';
import DeskImg1 from './images/desktop-image-hero-1.jpg';
import DeskImg2 from './images/desktop-image-hero-2.jpg';
import DeskImg3 from './images/desktop-image-hero-3.jpg';
import MobImg1 from './images/mobile-image-hero-1.jpg';
import MobImg2 from './images/mobile-image-hero-2.jpg';
import MobImg3 from './images/mobile-image-hero-3.jpg';
import AboutImg1 from './images/image-about-dark.jpg';
import AboutImg2 from './images/image-about-light.jpg';

const NavBar = () => {
  return (
    <header>
      <img src={LogoImg} alt="logoImg" />
      <nav>
        <a>home</a>
        <a>shop</a>
        <a>about</a>
        <a>contact</a>
      </nav>
    </header>
  );
};

const MainPage = () => {
  const contentData = [
    {
      imgSrc: DeskImg1,
      heading: "Discover innovative ways to decorate",
      paragraph: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      imgSrc: DeskImg2,
      heading: "We are available all across the globe",
      paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      imgSrc: DeskImg3,
      heading: "Manufactured with the best materials",
      paragraph: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentContent = contentData[currentIndex];

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? contentData.length - 1 : prevIndex -1));
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === contentData.length - 1 ? 0 : prevIndex + 1));
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }, // Adjust duration as needed
  };

  return (
    <section>
      <motion.img 
        src={currentContent.imgSrc} 
        alt="img" 
        className='img1'
        key={currentContent.imgSrc}
        {...fadeIn} />
      <div id="disc">
        <h1 {...fadeIn}>{currentContent.heading}</h1>
        <p {...fadeIn}>{currentContent.paragraph}</p>
        <a>Shop now &#8594;</a>
        <div id="arrows">
          <button onClick={handleLeftArrowClick}>&lt;</button>
          <button onClick={handleRightArrowClick}>&gt;</button>
        </div>
      </div>
      <motion.img src={AboutImg1} alt="aboutImg" className='img2' {...fadeIn} />
      <div id="about">
        <h2>About our furniture</h2>
        <p>Our multifunctional collection blends design and function to suit your individual taste.
        Make each room unique, or pick a cohesive theme that best express your interests and what
        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
        or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>
      <motion.img src={AboutImg2} alt="aboutImg" className='img2' {...fadeIn} />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <MainPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
