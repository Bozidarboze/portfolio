import Image from "next/image";

import Button from "../Button/Button.component";

import styles from "./Project.module.scss";

const Project = ({ title, text, preview, code, image }) => {
  return (
    <div className={styles.container}>
      <div data-aos='fade-up' className={styles.content}>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className={styles.buttons}>
          <Button target='_blank' href={preview} label='Live Preview' />
          <Button target='_blank' href={code} label='Source Code' />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div data-aos='fade-up' className={styles.image}>
          <Image src={image} alt='project image' layout='fill' priority />
        </div>
      </div>
    </div>
  );
};

export default Project;
