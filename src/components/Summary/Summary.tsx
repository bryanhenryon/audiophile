import { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Product } from "../../models/Product";
import { ModalContext, sumCart } from "..";
import "./summary.css";

type SummaryProps = {
  cart: Product[];
  formik: any;
};

export const Summary = ({ cart, formik }: SummaryProps): JSX.Element => {
  const stripeLoadedPromise = loadStripe(`${process.env.REACT_APP_API_KEY}`);
  const context = useContext(ModalContext);

  const vat = 0.2;
  const shipping = 50;
  const total = sumCart(cart);

  const lineItems = cart.map((product) => {
    return { price: product.price_id, quantity: product.quantity };
  });

  const handlePayment = async (event: Event) => {
    event.preventDefault();
    const stripe = await stripeLoadedPromise;

    await stripe?.redirectToCheckout({
      lineItems: lineItems,
      mode: "payment",
      successUrl: "https://audiophilee.netlify.app/",
      cancelUrl: "https://audiophilee.netlify.app/",
      customerEmail: formik.values.email,
    });
  };

  return (
    <div className="summary">
      <h6>Summary</h6>
      <div className="summary__items">
        {cart.map((product, index) => {
          return (
            <div key={index} className="summary__item">
              <img
                className="summary__item--image"
                src={product.image.cart}
                alt={`${product.name} ${product.category}`}
              />
              <div>
                <p className="summary__item--product-name">
                  {product.shortName}
                </p>
                <p className="summary__item--price">{`€ ${product.price}`} </p>
              </div>
              <p className="summary__item--quantity">{`x${product.quantity}`}</p>
            </div>
          );
        })}
      </div>
      <div>
        <div className="summary__container">
          <p className="summary__title">Total</p>
          <p className="summary__numbers">{`€ ${total}`}</p>
        </div>
        <div className="summary__container">
          <p className="summary__title">Shipping</p>
          <p className="summary__numbers">{`€ ${shipping}`}</p>
        </div>
        <div className="summary__container">
          <p className="summary__title">VAT (INCLUDED)</p>
          <p className="summary__numbers">{`€ ${(total * vat).toFixed(0)}`}</p>
        </div>
      </div>
      <div className="summary__container">
        <p className="summary__title">GRAND TOTAL</p>
        <p className="summary__numbers last">{`€ ${total + shipping}`}</p>
      </div>

      <button
        className="btn btn--submit"
        type="submit"
        disabled={
          !(formik.isValid && formik.dirty && formik.values.payment !== "")
        }
        onClick={
          formik.values.payment === "credit"
            ? () => handlePayment
            : () => context?.toggleModal("conformation")
        }
      >
        Continue & Pay
      </button>
    </div>
  );
};

export default Summary;
