import HeaderFooter from '../layouts/HeaderFooter.js';
import Link from 'next/link';
import ContactUs from '../components/contactus.js';

const Contact = () => {
    return (
        <>
            <HeaderFooter>
                
             <ContactUs/>
              <Link href="/home">← Back to home</Link>
            </HeaderFooter>
        </>
    );
};

export default Contact;