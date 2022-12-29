// import ProductList from '../components/shop.js';
import HeaderFooter2 from '../layouts/HeaderFooter2.js';
import Cart from '../components/Cart.js';
import {ShoppingCartProvider} from '../components/ShoppingCartContext.js';

const ShopCart = () => {
    return (
        <>
        <ShoppingCartProvider>
            <HeaderFooter2>
                <Cart/>
            </HeaderFooter2>
        </ShoppingCartProvider>
        </>
    );
};

export default ShopCart;