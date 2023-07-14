import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from './helpers/getProducts.js'
import cart from "./components/cart.js";
import darkMode from "./components/darkMode.js";
/*UI Elements */
/*Ocultar loader */
loader()

/*Mostrar menu */
showMenu()

/*Mostrar el carrito */
showCart()

/*Modo Oscuro */
darkMode()

/*End UI Elements */

/* Products*/

const {db, printProducts} = products(await getProducts())
//products(await getProducts())

/*Carrito */
cart(db, printProducts)



