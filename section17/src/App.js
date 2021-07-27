import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Checkout from "./components/Cart/Checkout";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showCheckoutHandler = () => {
    setCartIsShown(false);
    setCheckoutIsShown(true);
  };
  const hideCheckoutHandler = () => {
    setCheckoutIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onClose={hideCartHandler} onCheckout={showCheckoutHandler} />
      )}
      {checkoutIsShown && <Checkout onClose={hideCheckoutHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
