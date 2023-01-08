import styles from '../styles/Home.module.css'
import { Fade,Bounce,Flip } from "react-awesome-reveal";
import React from 'react';



const CTA = () => (
  <section className={styles.second_section_holder }>
    <div className={styles.bg_post_wood_img}>
     <img className={styles.wood_bg_img} src="/woodbg.webp" height='100%' width='100%'/> 
    </div>
    
    <div className={`${styles.container_left} ${styles.container_section2_bg_pos}`} >
      <div className={styles.grid}>
        <div className={styles.grid_prsuto_text_holder}>
        <Fade left >
        <h1 className={styles.titile_txt}>Verified domestic production</h1>
        <p className={styles.titile_paragraph_txt}>We care that our products are grown and made in the most socially and ecologically responsible way.</p>       
        </Fade>
        </div>
        <div className={styles.grid_prsuto}>
        <div className={styles.prsuto_img_holder}>
        <img className={styles.prsuto_img} src="/prsut.png" height='100%' width='100%'/> 
        </div>
        </div>
        <div className={styles.grid_prsuto_text_holder_mobile}>
        <h1 className={styles.titile_txt}>Verified domestic production</h1>
        <p className={styles.titile_paragraph_txt}>We care that our products are grown and made in the most socially and ecologically responsible way.</p>       
        </div>    
      </div>
      </div>

      
         
 
     
  </section>




);

export default CTA;
