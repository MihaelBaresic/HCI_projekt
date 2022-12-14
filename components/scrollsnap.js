import styles from '../styles/Home.module.css'

const ScrollSnap = () => (
  <div className={styles.gallery_container}>
  <ul className={styles.gallery} id="scrollSnapGallery">
    <li className={styles.padding_li}>
    <img className={styles.prsut_image_scroll} src="/olive-oil.png" height='376px' width='100%'/> 
     <div className={styles.elipse_holder}>Suroundings</div>
    </li>
    <li className={styles.padding_li}>
    <img className={styles.prsut_image_scroll} src="/olive-oil.png" height='376px' width='100%'/> 
     <div className={styles.elipse_holder} >Suroundings</div>
    </li>
    <li className={styles.padding_li}>
    <img className={styles.prsut_image_scroll} src="/olive-oil.png" height='376px' width='100%'/> 
     <div className={styles.elipse_holder} >Suroundings</div>
    </li>
    <li className={styles.padding_li}>
    <img className={styles.prsut_image_scroll} src="/olive-oil.png" height='376px' width='100%'/> 
     <div className={styles.elipse_holder} >Suroundings</div>
    </li>
    <li className={styles.padding_li}>
    <img className={styles.prsut_image_scroll} src="/olive-oil.png" height='376px' width='100%'/> 
     <div className={styles.elipse_holder} >Suroundings</div>
    </li>
    <li className={styles.padding_li}>
    <img className={styles.prsut_image_scroll} src="/olive-oil.png" height='376px' width='100%'/> 
     <div className={styles.elipse_holder} >Suroundings</div>
    </li>
    
   </ul>
  </div>
);

export default ScrollSnap;

 