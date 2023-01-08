import styles from '../styles/Home.module.css'

const ContactUs = () => (
  <>
 <div className={`${styles.bg__holder} `}>     
    <div className={`${styles.intro__bg} ${styles.bg__image_contact}`}>
      <img className={styles.bg__image2} src="/nasa-prica.webp" height='100%' width='100%'/>
    </div>

  <div className={styles.contact_text_position}>
    <p className={`${styles.contact_flex} ${styles.contact_font_title}`}>Get in touch</p> 
    <div className={`${styles.contact_flex} ${styles.contact_flex2}`}>
    <div className={`${styles.contact_font__titles} ${styles.contact_flex}`}>
      Company: SPIZA Internazionale d.o.o for food and beverage distribution, Split
    </div>
    <div className={`${styles.contact_font__titles} ${styles.contact_flex}`}>
      Abbreviated name: SPIZA d.o.o 
    </div>
    <div className={`${styles.contact_font__titles} ${styles.contact_flex}`}>
      Headquarters and address: Split, Ante Starčevića 34
    </div>
    <div className={`${styles.contact_font__titles} ${styles.contact_flex}`}>
      Identification number: 4050939
    </div>
    <div className={`${styles.contact_font__titles} ${styles.contact_flex}`}>
      Registry court: Commercial court in Pariz
    </div>
    <div className={`${styles.contact_font__titles} ${styles.contact_flex}`}>
      The basic capital of the company: EUR 6,456,500.00
    </div>
    <div className={`${styles.contact_font__titles} ${styles.contact_flex}`}>
      Company and bank headquarters: Giro account IBAN no.HR9120020061101017456 opened at Erste&Steiermärkische Bank dd, Split.
    </div>
    <div className={`${styles.contact_font__titles} ${styles.contact_flex}`}>
      President of the board: Ivana Knoll
    </div>
  </div>
  </div>
</div>
  </>
);

export default ContactUs;