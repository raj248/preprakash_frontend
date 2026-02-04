import React, { useState } from "react";
import CartItem from "./CartItem";

const initialData = [
  {
    id: 1,
    name: "Fairness cream",
    price: 65,
    quantity: 1,
    variant: "Blue",
    weight: "2 Kg",
    image: "/assets/product/small-product/product1.webp",
  },
  {
    id: 2,
    name: "Matte Walnut",
    price: 65,
    quantity: 1,
    variant: "Blue",
    weight: "2 Kg",
    image: "/assets/product/small-product/product2.webp",
  },
];

const CartSection: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialData);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <section className="cart__section section--padding">
      <div className="container-fluid">
        <div className="cart__section--inner">
          <h2 className="cart__title mb-35">Shopping Cart</h2>
          <div className="row">
            <div className="col-lg-8">
              <div className="cart__table">
                <table className="cart__table--inner">
                  <thead className="cart__table--header">
                    <tr className="cart__table--header__items">
                      <th className="cart__table--header__list">Product</th>
                      <th className="cart__table--header__list">Price</th>
                      <th className="cart__table--header__list">Quantity</th>
                      <th className="cart__table--header__list">Total</th>
                    </tr>
                  </thead>
                  <tbody className="cart__table--body">
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onUpdateQty={updateQuantity}
                        onRemove={removeItem}
                      />
                    ))}
                  </tbody>
                </table>
                <div className="continue__shopping d-flex justify-content-between">
                  <a className="continue__shopping--link" href="/shop">
                    Continue shopping
                  </a>
                  <button
                    className="continue__shopping--clear"
                    onClick={() => setCartItems([])}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="cart__summary border-radius-10">
                <div className="coupon__code mb-30">
                  <h3 className="coupon__code--title">Coupon</h3>
                  <div className="coupon__code--field d-flex">
                    <input
                      className="coupon__code--field__input border-radius-5"
                      placeholder="Coupon code"
                      type="text"
                    />
                    <button
                      className="coupon__code--field__btn primary__btn"
                      type="button"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <div className="cart__summary--total mb-20">
                  <table className="cart__summary--total__table">
                    <tbody>
                      <tr className="cart__summary--total__list">
                        <td className="cart__summary--total__title text-left">
                          SUBTOTAL
                        </td>
                        <td className="cart__summary--amount text-right">
                          £{subtotal.toFixed(2)}
                        </td>
                      </tr>
                      <tr className="cart__summary--total__list">
                        <td className="cart__summary--total__title text-left">
                          GRAND TOTAL
                        </td>
                        <td className="cart__summary--amount text-right">
                          £{subtotal.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="cart__summary--footer">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <button
                        className="cart__summary--footer__btn primary__btn cart"
                        type="button"
                      >
                        Update Cart
                      </button>
                    </li>
                    <li>
                      <a
                        className="cart__summary--footer__btn primary__btn checkout"
                        href="/checkout"
                      >
                        Check Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
