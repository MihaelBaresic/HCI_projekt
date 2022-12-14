import styles from '../styles/Home.module.css'



const CTA = () => (
  <section className={styles.second_section_holder}>
    <div className={styles.bg_post_wood_img}>
     <img className={styles.wood_bg_img} src="/woodbg.webp" height='100%' width='100%'/> 
    </div>

    <div className={`${styles.container_left} ${styles.container_section2_bg_pos}`} >
      <div className={styles.grid}>
        <div className={styles.grid_prsuto_text_holder}>
        <h1>Provjerena domaća proizvodnja</h1>
        <p>Mi brinemo da su naši proizvodi uzgajani i prešani na društveno i ekološki najodgovorniji način.</p>       
        </div>
        <div className={styles.grid_prsuto}>
        <div className={styles.prsuto_img_holder}>
        <img className={styles.prsuto_img} src="/prsut.png" height='100%' width='100%'/> 
        </div>
        </div>
        <div className={styles.grid_prsuto_text_holder_mobile}>
        <h1>Provjerena domaća proizvodnja</h1>
        <p>Mi brinemo da su naši proizvodi uzgajani i prešani na društveno i ekološki najodgovorniji način.</p>       
        </div>    
      </div>
      </div>


     
  </section>




);

export default CTA;
