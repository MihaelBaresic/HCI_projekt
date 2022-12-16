import CTA from '../components/CTA.js';
import ScrollX from '../components/scrollsnap.js';
import HeaderFooter from '../layouts/HeaderFooter.js';
import Navbar from '../components/navbar.js';

const Hello = () => {
    return (
        <>
            <HeaderFooter>
                <CTA />
                <ScrollX />
                <Navbar />
            </HeaderFooter>
        </>
    );
};

export default Hello;