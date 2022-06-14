import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navigation,
  Cart,
  Footer,
  OrderConformation,
  ScrollToTop,
} from "./components";
import { ModalProvider } from "./components/context/modalContext";
import { Home, CategoryPage, ProductDetailPage, CheckoutPage } from "./pages";
import { Product } from "./models/Product";
import "./app.css";

const App = (): JSX.Element => {
  const [cart, setCart] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [rerender, setRerender] = useState(false);

  const handleProductQuantityChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    const change = (event.currentTarget as HTMLElement).id;

    if (change === "increase") setQuantity(quantity + 1);
    else if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleProductAdd = (product: Product): void => {
    const duplicate = cart.some(
      (cartProduct) => cartProduct.name === product.name
    );

    if (duplicate) {
      const productToUpdate = cart.find(
        (cartProduct) => cartProduct.name === product.name
      );

      if (!productToUpdate) throw Error("No product found");

      productToUpdate.quantity = quantity;
    } else {
      setCart((previousCart) => [
        ...previousCart,
        { ...product, quantity: quantity },
      ]);
    }

    setQuantity(1);
  };

  const handleUpdateCart = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    const target = event.currentTarget as HTMLElement;

    // Gives the quantity buttons an id or index so they can be compared with iterated products / establish a connection
    const change = target.id;
    const indexButton = +target.dataset.index!;

    const productToUpdate = cart.find(
      (product, index) => index === indexButton
    );

    if (!productToUpdate) throw Error("No product to update found");

    if (change === "increase") {
      productToUpdate.quantity += 1;
      setRerender(!rerender);
    } else if (productToUpdate.quantity !== 0) {
      productToUpdate.quantity -= 1;
      setRerender(!rerender);
    }

    setCart(cart.filter((product) => product.quantity !== 0));
  };

  const handleRemoveAllProducts = (cart: Product[]): void => {
    if (cart.length > 0) setCart([]);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ModalProvider>
        <div className="app">
          <header>
            <Navigation cart={cart} />
            <Cart
              cart={cart}
              onRemoveAllProducts={handleRemoveAllProducts}
              onUpdateCart={handleUpdateCart}
            />
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:category" element={<CategoryPage />} />
              <Route
                path="/:category/:product"
                element={
                  <ProductDetailPage
                    onProductAdd={handleProductAdd}
                    onProductQuantityChange={handleProductQuantityChange}
                    quantity={quantity}
                  />
                }
              />
              <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
            </Routes>

            <OrderConformation
              cart={cart}
              onRemoveAllProducts={handleRemoveAllProducts}
            />
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
