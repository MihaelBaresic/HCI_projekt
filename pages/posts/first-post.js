import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
        <h1>About Post</h1>
         <h2>
          {/* <Link href="/home">← Back to home</Link> */}
         </h2>
    </Layout>
  );
}
