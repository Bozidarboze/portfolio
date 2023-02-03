import styles from './Footer.module.css';
import { GitHub, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.icons}>
      <Link href={'https://github.com/Bozidarboze'} target={'_blank'}>
        <GitHub className={styles.icon} />
      </Link>
      <Link href={'https://www.linkedin.com/in/bozhidar-gjorgjievski-1a08a8219'} target={'_blank'}>
        <LinkedIn className={styles.icon} />
      </Link>
    </div>
    <span>Bozidar_boze123@hotmail.com</span>
  </footer>
);

export default Footer;
