import CTA from '../components/CTA.js';
import ScrollX from '../components/scrollsnap.js';
import HeaderFooter from '../layouts/HeaderFooter.js';
import Link from 'next/link';

const About = () => {
    return (
        <>
            <HeaderFooter>
                
             
              <Link href="/home">← Back to home</Link>
            </HeaderFooter>
        </>
    );
};

export default About;