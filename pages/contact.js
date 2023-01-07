import HeaderFooter2 from '../Layouts/HeaderFooter2.js';
import Link from 'next/link';
import ContactUs from '../components/contactus.js';

const Contact = () => {
    return (
        <>
            <HeaderFooter2>
                
             <ContactUs/>
              {/* <Link href="/home">← Back to home</Link> */}
            </HeaderFooter2>
        </>
    );
};

export default Contact;