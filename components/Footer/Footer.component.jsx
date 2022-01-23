import Image from "next/image";

import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.icon}>
      <a href='https://github.com/bozidarboze' target='_blank' rel='noreferrer'>
        <Image src='/icons/github-icon.svg' width={50} height={50} alt='github icon' priority unoptimized />
      </a>
    </div>
    <div className={styles.icon}>
      <a href='https://www.linkedin.com/in/bozidar-gjorgjievski-1a08a8219/' target='_blank' rel='noreferrer'>
        <Image src='/icons/linkedin-icon.svg' width={50} height={50} alt='linkedin icon' priority unoptimized />
      </a>
    </div>
  </footer>
);

export default Footer;
