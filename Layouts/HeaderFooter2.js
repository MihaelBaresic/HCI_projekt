import Header2 from '../components/header2.js';
import Footer from '../components/Footer.js';



const HeaderFooter2 = ({ children, ...rest }) => {
    return (
        <>
            <Header2 />
            <main {...rest}>{children}</main>
            
            <Footer /> 
        </>
    );
};

export default HeaderFooter2;