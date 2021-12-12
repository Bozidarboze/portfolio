import styles from "./Button.module.scss";

const Button = ({ href, label, target }) => {
  return (
    <div className={styles.button}>
      <a target={target} href={href}>
        {label}
      </a>
    </div>
  );
};

export default Button;
