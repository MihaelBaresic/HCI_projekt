// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
import styles from '../styles/Home.module.css'

const Footer = () => (
<>
	<section className={styles.footer_section_inner}>
	<div className={styles.container}>
		<div className={styles.footer__section_holder}>
			<div className={styles.footer__section_logo_holder}>
				Spi<span className={styles.span_color}>za</span>
			</div>
			<div className={styles.grid}>
				<div className={styles.grid_first_txt}>				
						<h2 className={styles.grid_big_txt_custom}>Quick Links</h2>				
						<div className={styles.grid_small_txt_custom}><a href=''>Shop</a></div>			
						<div className={styles.grid_small_txt_custom}><a href=''>About us</a></div>			
						<div className={styles.grid_small_txt_custom}><a href=''>Contact us</a></div>
				</div>			
			<div className={styles.grid_second_txt}>
						<h2 className={styles.grid_big_txt_custom}>Help</h2>
						<div className={styles.grid_small_txt_custom}><a href=''>FAQ</a></div>
						<div className={styles.grid_small_txt_custom}><a href=''>Contact us</a></div>
						<div className={styles.grid_small_txt_custom}><a href=''>Privacy policy</a></div>
						<div className={styles.grid_small_txt_custom}><a href=''>Terms&conditions</a></div>
				</div>
				<div className={styles.grid_third_txt}>
						<h2 className={styles.grid_big_txt_custom}>Contact Us</h2>
						<div className={styles.grid_small_txt_custom}><a href=''>+385 21 080 080</a></div>
						<div className={styles.grid_small_txt_custom}><a href=''>spiza@gmail.com</a></div>
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
			</div>
			<div className={`${styles.footer__section_logo_holder} ${styles.copyright}`}>
				© 2022-2023 All rights reserved by J&M&M
			</div>
			</div>
		</div>
	</section>


			{/* <div className="bg-black-50 h-1/2 w-full grid min-[900px]:grid-cols-4 md:grid-cols-2 min-[520px]:grid-cols-2 min-[520px]:text-left py-20 px-10 justify-center text-centar">
				<div className="p-5 ">
					<ul>
						<p className="text-white-800 font-bold text-3xl pb-6">
							Spi<span className="text-blue-600">za</span>
						</p>
						<div className="flex gap-6 pb-5">
                            <FaFacebook className="text-3xl cursor-pointer hover:text-blue-600" />
							<FaInstagram className="text-3xl cursor-pointer hover:text-yellow-600" />
                            <FaYoutube className="text-3xl cursor-pointer hover:text-red-600" />
							<FaLinkedin className="text-3xl cursor-pointer hover:text-blue-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white-800 font-bold text-2xl pb-4">Product</p>
						<li className="text-white-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Sponsors
						</li>
						<li className="text-white-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Futures & Options
						</li>
						<li className="text-white-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Mutual Funds
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white-800 font-bold text-2xl pb-4">Quick links</p>
						<li className="text-white-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Shop all
						</li>
						<li className="text-white-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About us
						</li>
						<li className="text-white-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Blog
						</li>
						<li className="text-white-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Cart
						</li>
						<li className="text-white-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Login
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white-800 font-bold text-2xl pb-4">Help</p>
						<li className="text-white-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							FAQ
						</li>
						<li className="text-white-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact us
						</li>
						<li className="text-white-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Returns
						</li>
						<li className="text-white-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Privacy policy
						</li>
						<li className="text-white-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Terms & conditions
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-black-50">
				<h1 className=" text-white-800 font-semibold">
					© 2022-2023 All rights reserved by Jakov, Mihael and Marino
				</h1>
			</div> */}
		</>
	);

export default Footer;