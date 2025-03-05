import styles from './StartNewProject.module.scss';
import Image from 'next/image';
import arrowImg from '@/assets/work/Arrow.png';
import Button from '@/components/ui/Button';

const StartNewProject = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.para}>
          We would love to hear about start your new project?
        </p>
        <div className={styles.btn}>
          <Button
            title={
              <span className="flex items-center gap-2 text-sm font-semibold text-red-500">
                <p>Start New Project</p>
                <Image src={arrowImg} width={25} height={25} alt="arrow" />
              </span>
            }
            bgColor="white"
            size="lg"
            borderRadius="30px"
          />
        </div>
      </div>
    </div>
  );
};
export default StartNewProject;
