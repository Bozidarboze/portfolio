import Image from "next/image";

import styles from "./About.module.scss";

const About = () => {
  return (
    <div id='about' className={styles.container}>
      <div data-aos='fade-right' className={styles.image}>
        <Image src='/profile.jpg' alt='profile picture' layout='fill' />
      </div>
      <div data-aos='fade-left' className={styles.content}>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet
          venenatis urna cursus eget nunc scelerisque. At auctor urna nunc id cursus metus aliquam. Sollicitudin aliquam ultrices sagittis orci a
        </p>
      </div>
    </div>
  );
};

export default About;
