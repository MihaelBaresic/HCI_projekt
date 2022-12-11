import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import * as React from 'react';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bg__holder}>
      {/* <Image
              priority
              src="/olive-sea.png"
              className={utilStyles.bg_image}
              height={1920}
              width={1080}
              alt=""
            /> */}
            <div className={styles.intro__bg}>
            <img className={styles.bg__image} src="/olive-sea.png" height='100%' width='100%'/>
            </div>
      </div>



    {/* <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Your Self Introduction</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout> */}
 


      <p className={styles.lay_href_color}><a href='./posts/first-post'>HREF TO LAYOUT PAGE</a></p>
      
      <Button variant="contained">Hello World</Button>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
