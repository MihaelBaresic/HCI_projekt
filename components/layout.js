import Head from 'next/head';
import Image from 'next/image';
import styles2 from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Your Name';
export const siteTitle = 'Home page';

export default function Layout({ children, home }) {
  return (
      <div className={styles2.container}>
      
      <Head>
        
      </Head>
      <header className={styles2.header}>

       
      </header>
      <main>
        {/* <div className='bg-picture'>
          <picture className='utilStyles.intro__bg'>
            <Image
              priority
              src="/public/olive-sea.png"
              className={utilStyles.bg_image}
              height={100}
              width={100}
              alt=""
            />
          </picture>
        </div> */}
        {children}
      </main>
    </div>
  );
}
