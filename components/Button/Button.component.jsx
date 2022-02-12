import styles from "./Button.module.scss";

const Button = ({ href, label, target, handleButtonClick }) => (
  <a onClick={() => label === "Know More" && handleButtonClick()} target={target} href={href} rel='noreferrer'>
    <div className={styles.button}>{label}</div>
  </a>
);

export default Button;
