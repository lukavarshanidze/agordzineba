import styles from "../styles/Contact.module.scss";

export const Contact = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.address}>
          <h3>მისამართი:</h3>
          <p>0186 თბილისი, ოთარ ლორთქიფანიძის #1</p>
        </div>

        <div className={styles.mail}>
          <h3>ელ-ფოსტა:</h3>
          <p>dkasmd@gmail.com</p>
        </div>

        <div className={styles.contact}>
          <h3>კონტაქტი:</h3>
          <a href={`tel:+995 574 52 43 34`}>+995 574 52 43 34</a>
          <a href={`tel:+995 568 82 77 47`}>+995 568 82 77 47</a>
          <a href={`tel:+995 511 122 242`}>+995 511 122 242</a>
          <p className={styles.meet}>(შეხვედრა ხდება წინასწარ შეთანხმებით)</p>
        </div>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.0486296880963!2d44.73640427613798!3d41.71946947533111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473138a081ef9%3A0xb1b2ccb652327a09!2s1%20Otar%20Lortqipanidze%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1721571786223!5m2!1sen!2sge"
          width="600"
          height="450"
          style={{border: '0'}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
