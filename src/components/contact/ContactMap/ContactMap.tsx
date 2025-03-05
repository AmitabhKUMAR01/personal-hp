import styles from './ContactMap.module.scss';

export const ContactMap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <iframe
            className={styles.iframe}
            src="https://maps.google.com/maps?q= HangingPanda Pvt. Ltd. B-47, Second floor, B Block, Sector 63 Noida, Uttar Pradesh, India, 201301&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
