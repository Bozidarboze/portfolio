import styles from "./Button.module.scss";

const Button = ({ href, label, target }) => {
  return (
    <div className={styles.container}>
      <a target={target} href={href} rel='noreferrer'>
        <div className={styles.button}>{label}</div>
      </a>
    </div>
  );
};

export default Button;
