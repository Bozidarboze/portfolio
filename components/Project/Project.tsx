import styles from './Project.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { Code, Launch } from '@mui/icons-material';

const Project = ({
  reverse,
  title,
  description,
  imageSrc,
  liveDemoLink,
  sourceCodeLink
}: {
  reverse: boolean;
  title: string;
  description: string;
  imageSrc: string;
  liveDemoLink: string;
  sourceCodeLink: string;
}) => (
  <div style={reverse ? { flexDirection: 'row-reverse' } : {}} className={styles.container}>
    <div className={styles.imageContainer}>
      <Image src={imageSrc} alt={'project image'} fill unoptimized />
    </div>
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Button label={'Live Demo'} icon={<Launch />} link={liveDemoLink} disabled={!liveDemoLink} />
          <Button label={'Source Code'} icon={<Code />} outline={true} link={sourceCodeLink} disabled={!sourceCodeLink} />
        </div>
      </div>
    </div>
  </div>
);

export default Project;
