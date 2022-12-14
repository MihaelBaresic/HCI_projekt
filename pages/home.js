import CTA from '../components/CTA.js';
import ScrollX from '../components/scrollsnap.js';
import HeaderFooter from '../layouts/HeaderFooter.js';

const Hello = () => {
    return (
        <>
            <HeaderFooter>
                <CTA />
                <ScrollX />
            </HeaderFooter>
        </>
    );
};

export default Hello;