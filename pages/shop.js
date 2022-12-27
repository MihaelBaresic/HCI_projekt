import ProductList from '../components/shop.js';
import HeaderFooter2 from '../layouts/HeaderFooter2.js';
import ShoppingCartContextProvider from '../components/Cart/ShoppingCartContext';


const Shop = () => {
    return (
        <>
            <HeaderFooter2>
                <ShoppingCartContextProvider>
                    <ProductList/>
                </ShoppingCartContextProvider>    
            </HeaderFooter2>
        </>
    );
};

export default Shop;