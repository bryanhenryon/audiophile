import React, { useContext } from "react";
import { QuantityButton, Button, ModalContext, sumCart } from "..";
import "./cart.css";
import "animate.css";
import { Product } from "../../models/Product";

type CartProps = {
  cart: Product[];
  onRemoveAllProducts: (product: Product[]) => void;
  onUpdateCart: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export const Cart = ({
  cart,
  onRemoveAllProducts,
  onUpdateCart,
}: CartProps): JSX.Element => {
  const context = useContext(ModalContext);
  const total = sumCart(cart);
  const cartNotEmpty = cart.length > 0;

  return (
    <>
      {context?.isShowing.cart && (
        <div>
          <div
            onClick={() => context.toggleModal("cart")}
            className="cart-mask animate__animated animate__fadeIn"
          />

          <div className="cart animate__animated animate__fadeIn">
            <div className="cart__quantity-control">
              <p className="cart__quantity-control--display">{`Cart (${cart.length})`}</p>

              {cartNotEmpty && (
                <p
                  className="cart__quantity-control--remove"
                  onClick={() => onRemoveAllProducts(cart)}
                >
                  Remove all
                </p>
              )}
            </div>

            <div className="cart__items">
              {cart.length < 1 && (
                <div className="cart__empty">Your cart is empty.</div>
              )}

              {cart.map((product, index) => {
                return (
                  <div key={index} className="cart__item">
                    <img
                      className="cart__item--image"
                      src={product.image.cart}
                      alt={`${product.name} ${product.category}`}
                    />

                    <div>
                      <p className="cart__item--product-name">
                        {product.shortName}
                      </p>
                      <p className="cart__item--price">
                        {`??? ${product.price}`}{" "}
                      </p>
                    </div>

                    <QuantityButton
                      data-index={index}
                      onProductQuantityChange={onUpdateCart}
                      style={{ maxWidth: "96px", maxHeight: "32px" }}
                    >
                      {product.quantity}
                    </QuantityButton>
                  </div>
                );
              })}
            </div>

            {cart.length > 0 ? (
              <div className="cart__total">
                <p className="cart__total--title">Total:</p>
                <p className="cart__total--price">{`??? ${total}`}</p>
              </div>
            ) : null}

            {cart.length > 0 ? (
              <Button
                onClick={() => context.toggleModal("cart")}
                linkTo="/checkout"
                style={{ width: "100%" }}
                backgroundColor="orange"
              >
                Checkout
              </Button>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
