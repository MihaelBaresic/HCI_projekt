import HeaderFooter2 from '../Layouts/HeaderFooter2.js';
import Cart from '../components/Cart.js';
import {ShoppingCartProvider} from '../components/ShoppingCartContext.js';

const ShopCart = () => {
    return (
        <>
            <HeaderFooter2>
                <Cart/>
            </HeaderFooter2>
        </>
    );
};

export default ShopCart;