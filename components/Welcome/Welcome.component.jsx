import Button from "../Button/Button.component";

import styles from "./Welcome.module.scss";

const Welcome = () => {
  const handleButtonClick = () => {
    document.getElementById("about").scrollIntoView({ block: "center" });
  };

  return (
    <div className={styles.container}>
      <div data-aos='fade-right' data-aos-once className={styles.content}>
        <h1 className={styles.title}>
          Hi, my name is <span>Bozidar</span>
        </h1>
        <h1 className={styles.title}>I&apos;m a full stack developer</h1>
        <div className={styles.button}>
          <Button handleButtonClick={handleButtonClick} label='Know More' />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
