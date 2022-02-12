import Image from "next/image";

import styles from "./About.module.scss";

const About = () => {
  return (
    <div id='about' className={styles.container}>
      <div data-aos='fade-right' data-aos-once className={styles.image}>
        <Image src='https://i.postimg.cc/ryvC5Nvt/profile.jpg' alt='profile picture' layout='fill' priority unoptimized />
      </div>
      <div data-aos='fade-left' data-aos-once className={styles.content}>
        <h1>About Me</h1>
        <p>
          Efficient full stack developer with extensive experience building mobile-first responsive websites using HTML, CSS/SASS and React. I am
          passionate about building easy to use, high-performance web applications using the Agile methodology. In addition, I have extensive
          experience building RESTful web services using Node.js with Express.
        </p>
      </div>
    </div>
  );
};

export default About;
