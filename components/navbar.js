import styles from '../styles/Home.module.css'

const Navbar = () => (
  <>
  
<div className={styles.bg__holder}>
            <div className={styles.intro__bg}>
            <img className={`${styles.bg__image}`} src="/olive-sea.png" height='100%' width='100%'/>
            </div>
            <div className={styles.intro__olive}>
            <img className={styles.olive__image} src="/olive-black.svg" height='100%' width='100%'/>
            </div>
            <div className={styles.intro_text_position}>
            <div className={styles.grid}>
              <div className={`${styles.intro_text}`}>
                <h2 className={styles.titile_txt}>Feel The Flavours Of Dalmatia</h2>
                <p className={styles.titile_paragraph_txt}>Try the taste of Dalmatian spiza from our web shop. Guaranteed high quality of all products. See you.</p>
                <div className={`${styles.cta__full} ${styles.btn_header_pos}`}>FIND OUT MORE</div>
              </div>
              </div>
            </div>
            </div>
       

     

      {/* <p className={styles.lay_href_color}><a href='./posts/first-post'>HREF TO LAYOUT PAGE</a></p> */}
  </>
);

export default Navbar;