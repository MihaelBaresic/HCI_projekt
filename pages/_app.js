import '../styles/globals.css'
import {ShoppingCartProvider} from '../components/ShoppingCartContext.js';

function MyApp({ Component, pageProps }) {
  return <ShoppingCartProvider><Component {...pageProps} /></ShoppingCartProvider>
}

export default MyApp
