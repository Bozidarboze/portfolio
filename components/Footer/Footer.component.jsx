import Image from "next/image";

import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.icon}>
      <a href='https://github.com/bozidarboze' target='_blank'>
        <Image src='/icons/github-icon.svg' width={50} height={50} />
      </a>
    </div>
    <div className={styles.icon}>
      <a href='https://www.linkedin.com/in/bozidar-gjorgjievski-1a08a8219/' target='_blank'>
        <Image src='/icons/linkedin-icon.svg' width={50} height={50} />
      </a>
    </div>
  </footer>
);

export default Footer;
