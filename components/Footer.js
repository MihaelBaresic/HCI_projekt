import styles from '../styles/Home.module.css'

const Footer = () => (
<>
	<section className={styles.footer_section_inner}>
	<div className={styles.container}>
		<div className={styles.footer__section_holder}>
				<div className={`${styles.grid} ${styles.moma}`}>
				<div className={styles.grid_first_txt}>				
						<h2 className={styles.grid_big_txt_custom_1}>Spi<span className={styles.span_color}>za</span></h2>				
						<div className={styles.grid_footer_social}>
							<div className={styles.grid_footer_logo_holder}>
								<img className={`${styles.prsuto_img} ${styles.hover_socials}`} src="/facebook.svg" height='40px' width='40px'/> 
							</div>
							<div className={styles.grid_footer_logo_holder}>
								<img className={`${styles.prsuto_img} ${styles.hover_socials}`} src="/instagram.svg" height='40px' width='40px'/> 
							</div>
							<div className={styles.grid_footer_logo_holder}>
								<img className={`${styles.prsuto_img} ${styles.hover_socials}`} src="/youtube2.svg" height='40px' width='40px'/> 
							</div>
							<div className={styles.grid_footer_logo_holder}>
								<img className={`${styles.prsuto_img} ${styles.hover_socials}`} src="/linkedin.svg" height='40px' width='40px'/> 
							</div>				
					</div>												
			</div>		
				<div className={styles.grid_second_txt}>				
						<h2 className={styles.grid_big_txt_custom}>Links</h2>				
						<div className={styles.grid_small_txt_custom}><a href=''>Shop</a></div>			
						<div className={styles.grid_small_txt_custom}><a href=''>About us</a></div>			
						<div className={styles.grid_small_txt_custom}><a href=''>Contact us</a></div>
				</div>			
			<div className={styles.grid_third_txt}>
						<h2 className={styles.grid_big_txt_custom}>Help</h2>
						<div className={styles.grid_small_txt_custom}><a href=''>FAQ</a></div>
						<div className={styles.grid_small_txt_custom}><a href=''>Contact us</a></div>
						<div className={styles.grid_small_txt_custom}><a href=''>Privacy policy</a></div>
						<div className={styles.grid_small_txt_custom}><a href=''>Terms&conditions</a></div>
				</div>
				<div className={styles.grid_fourth_txt}>
						<h2 className={styles.grid_big_txt_custom}>Subscribe</h2>
						<div className={styles.grid_small_txt_custom}><a href=''>Subscribe to stay tuned for new web-design and latest updates. Let's do it! </a></div>
						<div className={styles.input__holder}>
							<input placeholder='Enter your email Address' className={styles.input__style}/>
							<div className={styles.sub__btn__footer}>Sub$cribe</div>
						</div>
				</div>
				</div>
			<div className={`${styles.footer__section_logo_holder} ${styles.copyright}`}>
				© 2022-2023 All rights reserved by J&M&M
			</div>
			</div>
		</div>
	</section>


		
		</>
	);

export default Footer;