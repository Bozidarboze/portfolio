import styles from "./Button.module.scss";

const Button = ({ href, label, target }) => {
  return (
    <a target={target} href={href} rel='noreferrer'>
      <div className={styles.button}>{label}</div>
    </a>
  );
};

export default Button;
