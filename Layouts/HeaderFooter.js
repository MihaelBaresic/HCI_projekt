import Header from '../components/header.js';
<<<<<<< HEAD
import Footer from '../components/Footer.js';
=======

// import Footer from '../components/Footer.js';
>>>>>>> origin/main

const HeaderFooter = ({ children, ...rest }) => {
    return (
        <>
            <Header />
            <main {...rest}>{children}</main>
            <Footer /> 
        </>
    );
};

export default HeaderFooter;