import { useState } from "react";
import GlobalContext from "./globalContext";
function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
function addProductToCart() {
    console.log("global fn")
}

function clearCart () {

}

    return (
        <GlobalContext.Provider value={{
            cart: cart ,
            addProductToCart: addProductToCart,
            clearCart: clearCart 
        }}>
            {props.children}
        </GlobalContext.Provider>
    )

}
export default GlobalProvider;