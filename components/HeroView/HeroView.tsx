import styles from './HeroView.module.css';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DeveloperMode } from '@mui/icons-material';

const HeroView = () => (
  <section className={styles.container}>
    <div className={styles.nameContainer}>
      <span>Hello, my name is</span>
      <h1>Bozhidar Gjorgjievski</h1>
      <p>
        I have experience in developing, designing and deploying complete web applications. I understand
        the entire web development process, from the initial concept to deployment, and have a good
        understanding of the architectural patterns and practices used in web development.
      </p>
    </div>
    <Image
        className={styles.graphic1}
        src={'./graphic1.svg'}
        alt={'graphic'}
        width={100}
        height={100}
    />
    <Image
        className={styles.graphic2}
        src={'./graphic1.svg'}
        alt={'graphic'}
        width={100}
        height={100}
    />
    <div className={styles.arrowDown}>
      <KeyboardArrowDownIcon fontSize={'large'} />
    </div>
    <DeveloperMode className={styles.icon} />
  </section>
);

export default HeroView;
