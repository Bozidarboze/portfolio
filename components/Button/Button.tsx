import styles from './Button.module.css';
import Link from 'next/link';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const Button = ({
  label,
  icon,
  outline,
  link,
  disabled
}: {
  label: string;
  icon?: ReactJSXElement;
  outline?: boolean;
  link: string;
  disabled?: boolean;
}) => {
  const buttonClasses = `${styles.container} ${outline ? styles.outline : ''} ${
    disabled ? styles.disabled : ''
  }`;
  return (
    <div className={buttonClasses}>
      <Link
        href={link}
        target={'_blank'}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          }
        }}>
        {icon}
        {label}
      </Link>
    </div>
  );
};

export default Button;
