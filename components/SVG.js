import styles from '../styles/SVG.module.css'

const SVG = () => (
  <section className={`${styles.SVG_section} ${styles.container}`}>
    <div className={styles.SVG_txt_holder}>We work with</div>
    <div className={styles.flex_holder_svg}>
      <div className={styles.svg_img_holder}>
        <img className={styles.svg_img} src="/birin.svg" height='216px' width='231px'/> 
      </div>
      <div className={styles.svg_img_holder}>
        <img className={styles.svg_img} src="/roguljic.svg" height='216px' width='231px'/> 
      </div>
      <div className={styles.svg_img_holder}>
        <img className={styles.svg_img} src="/bubicic.svg" height='216px' width='231px'/> 
      </div>
      <div className={styles.svg_img_holder}>
        <img className={styles.svg_img} src="/pensa.svg" height='216px' width='231px'/> 
      </div>
    </div>
    <div className={styles.SVG_txt_holder}>Quality guarantees</div>
    <div className={styles.flex_holder_svg}>
      <div className={styles.svg_img_holder}>
        <img className={styles.svg_img} src="/euIzvornost.webp" height='200px' width='200px'/> 
      </div>
      <div className={styles.svg_img_holder}>
        <img className={styles.svg_img} src="/zemljopisno_pod.webp" height='200px' width='200px'/> 
      </div>
      <div className={styles.svg_img_holder}>
        <img className={styles.svg_img} src="/srednji.svg" height='200px' width='200px'/> 
      </div>
      <div className={styles.svg_img_holder}>
        <img className={styles.svg_img} src="/meso.svg" height='200px' width='200px'/> 
      </div>
      <div className={styles.svg_img_holder}>
        <img className={styles.svg_img} src="/eko.svg" height='200px' width='200px'/> 
      </div>
      <div className={styles.svg_img_holder}>
        <img className={styles.svg_img} src="/med.svg" height='200px' width='200px'/> 
      </div>
    </div>
  </section>
);

export default SVG;