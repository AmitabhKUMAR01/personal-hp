import styles from './ourservice.module.scss';
import {
  ButtonWithArrow,
  OurServiceSlider,
  ShowMore,
} from '@/components/index';

const fullText = `Our team comprises proficient and forward-thinking professionals
specializing in web development. With a deep understanding of industry
trends and technologies, we possess the requisite skills to tailor a
digital product to meet the specific needs of your business. As a
distinguished enterprise in the field of website development,
HangingPanda offers an extensive array of comprehensive solutions,
encompassing web application development, Android and iOS application
development, mobile app design and development services, IoT, fintech, 
and various other offerings, all aimed at fulfilling your business requirements.`;

const OurService = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContainer}>
          <article className={styles.left}>
            <h1>Our Services</h1>
            <div className={styles.textContainer}>
              <ShowMore text={fullText} maxLength={400} leading="8" />
            </div>
            <ButtonWithArrow
              text="Let's Talk"
              link="/contact"
              textcolor="black"
              size="sm"
            />
          </article>
          <aside className={styles.right}>
            <OurServiceSlider />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default OurService;
