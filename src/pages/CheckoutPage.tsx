import Breadcrumb from "@/components/common/Breadcrumb";
import FeatureSection from "@/components/shop/FeatureSection";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const [shipToDifferent, setShipToDifferent] = useState(false);
  const [formData, setFormData] = useState({
    emailPhone: "",
    subscribe: false,
    billing: {
      firstName: "",
      lastName: "",
      company: "",
      address: "",
      city: "",
      country: "1",
      zip: "",
    },
    shipping: {
      firstName: "",
      lastName: "",
      company: "",
      address: "",
      city: "",
      country: "1",
      zip: "",
    },
    orderNotes: "",
  });

  const handleInputChange = (
    section: "billing" | "shipping" | "root",
    field: string,
    value: string | boolean,
  ) => {
    if (section === "root") {
      setFormData((prev) => ({ ...prev, [field]: value }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [section]: { ...prev[section], [field]: value },
      }));
    }
  };
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    // Example logic: if code is 'SAVE10', apply 10% discount
    if (couponCode.toUpperCase() === "SAVE10") {
      const discountAmount = 147 * 0.1; // 10% of subtotal
      setDiscount(discountAmount);
      console.log(
        "Coupon Applied! You saved £" + discountAmount.toFixed(2),
        discount,
      );
      console.log(formData);
      //   alert("Coupon Applied! You saved £" + discountAmount.toFixed(2));
    } else {
      alert("Invalid Coupon Code");
      setDiscount(0);
    }
  };

  return (
    <>
      <Breadcrumb title="Checkout" />
      <div className="checkout__page--area section--padding">
        <div className="container">
          <div className="row">
            {/* LEFT COLUMN: Forms */}
            <div className="col-lg-7 col-md-6">
              <div className="main checkout__mian">
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                  {/* Contact Information */}
                  <div className="checkout__content--step section__contact--information">
                    <div className="checkout__section--header d-flex align-items-center justify-content-between mb-25">
                      <h2 className="checkout__header--title h3">
                        Contact information
                      </h2>
                      <p className="layout__flex--item">
                        Already have an account?{" "}
                        <Link className="layout__flex--item__link" to="/login">
                          Log in
                        </Link>
                      </p>
                    </div>
                    <div className="customer__information">
                      <div className="checkout__email--phone mb-12">
                        <input
                          className="checkout__input--field border-radius-5"
                          placeholder="Email or mobile phone number"
                          type="text"
                          onChange={(e) =>
                            handleInputChange(
                              "root",
                              "emailPhone",
                              e.target.value,
                            )
                          }
                        />
                      </div>
                      <div className="checkout__checkbox">
                        <input
                          className="checkout__checkbox--input"
                          id="check1"
                          type="checkbox"
                          onChange={(e) =>
                            handleInputChange(
                              "root",
                              "subscribe",
                              e.target.checked,
                            )
                          }
                        />
                        <span className="checkout__checkbox--checkmark"></span>
                        <label
                          className="checkout__checkbox--label"
                          htmlFor="check1"
                        >
                          Email me with news and offers
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Billing Details */}
                  <div className="checkout__content--step section__shipping--address">
                    <div className="checkout__section--header mb-25">
                      <h2 className="checkout__header--title h3">
                        Billing Details
                      </h2>
                    </div>
                    <AddressFields
                      section="billing"
                      onChange={handleInputChange}
                    />

                    {/* Different Shipping Toggle */}
                    <div className="checkout__checkbox mb-20 mt-20">
                      <input
                        className="checkout__checkbox--input"
                        id="check_shipping"
                        type="checkbox"
                        checked={shipToDifferent}
                        onChange={() => setShipToDifferent(!shipToDifferent)}
                      />
                      <span className="checkout__checkbox--checkmark"></span>
                      <label
                        className="checkout__checkbox--label"
                        htmlFor="check_shipping"
                      >
                        Ship to a different address?
                      </label>
                    </div>

                    {shipToDifferent && (
                      <div className="section__shipping--address__content">
                        <h3 className="checkout__header--title h4 mb-20">
                          Shipping Address
                        </h3>
                        <AddressFields
                          section="shipping"
                          onChange={handleInputChange}
                        />
                      </div>
                    )}

                    <div className="checkout__checkbox">
                      <input
                        className="checkout__checkbox--input"
                        id="checkbox2"
                        type="checkbox"
                      />
                      <span className="checkout__checkbox--checkmark"></span>
                      <label
                        className="checkout__checkbox--label"
                        htmlFor="checkbox2"
                      >
                        Save this information for next time
                      </label>
                    </div>
                  </div>

                  <div className="order-notes mb-20">
                    <label
                      className="checkout__input--label mb-10"
                      htmlFor="order"
                    >
                      Order Notes{" "}
                      <span className="checkout__input--label__star">*</span>
                    </label>
                    <textarea
                      className="checkout__notes--textarea__field border-radius-5"
                      id="order"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                    ></textarea>
                  </div>

                  <div className="checkout__content--step__footer d-flex align-items-center">
                    <button
                      className="continue__shipping--btn primary__btn border-radius-5"
                      type="submit"
                    >
                      Continue To Shipping
                    </button>
                    <Link className="previous__link--content" to="/cart">
                      Return to cart
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: Sidebar Summary */}
            <div className="col-lg-5 col-md-6">
              <aside className="checkout__sidebar sidebar border-radius-10">
                <h2 className="checkout__order--summary__title text-center mb-15">
                  Your Order Summary
                </h2>
                <div className="cart__table checkout__product--table">
                  <table className="cart__table--inner">
                    <tbody className="cart__table--body">
                      <SummaryItem
                        img="/assets/product/small-product/product1.webp"
                        name="Fluids & Chemicals"
                        price="£65.00"
                        qty="1"
                      />
                      <SummaryItem
                        img="/assets/product/small-product/product2.webp"
                        name="Cargo Accessories"
                        price="£82.00"
                        qty="1"
                      />
                    </tbody>
                  </table>
                </div>

                {/* Coupon Code Section */}
                <div className="checkout__discount--code">
                  <form className="d-flex" onSubmit={handleApplyCoupon}>
                    <label className="flex-grow-1">
                      <input
                        className="checkout__discount--code__input--field border-radius-5"
                        placeholder="Gift card or discount code"
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                    </label>
                    <button
                      className="checkout__discount--code__btn primary__btn border-radius-5"
                      type="submit"
                    >
                      Apply
                    </button>
                  </form>
                </div>

                <div className="checkout__total">
                  <table className="checkout__total--table">
                    <tbody className="checkout__total--body">
                      <tr className="checkout__total--items">
                        <td className="checkout__total--title text-left">
                          Subtotal
                        </td>
                        <td className="checkout__total--amount text-right">
                          £147.00
                        </td>
                      </tr>
                      <tr className="checkout__total--items">
                        <td className="checkout__total--title text-left">
                          Shipping
                        </td>
                        <td className="checkout__total--calculated__text text-right">
                          Calculated at next step
                        </td>
                      </tr>
                    </tbody>
                    <tfoot className="checkout__total--footer">
                      <tr className="checkout__total--footer__items">
                        <td className="checkout__total--footer__title text-left">
                          Total
                        </td>
                        <td className="checkout__total--footer__amount text-right">
                          £147.00
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="payment__history mb-30">
                  <h3 className="payment__history--title mb-20">Payment</h3>
                  <ul className="payment__history--inner d-flex flex-wrap gap-2">
                    <li>
                      <button className="payment__history--link primary__btn">
                        Credit Card
                      </button>
                    </li>
                    <li>
                      <button className="payment__history--link primary__btn">
                        Bank Transfer
                      </button>
                    </li>
                    <li>
                      <button className="payment__history--link primary__btn">
                        Paypal
                      </button>
                    </li>
                  </ul>
                </div>
                <button
                  className="checkout__now--btn primary__btn w-100"
                  type="submit"
                >
                  Checkout Now
                </button>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <FeatureSection />
    </>
  );
};

// Helper components for cleaner code
const AddressFields = ({
  section,
  onChange,
}: {
  section: string;
  onChange: any;
}) => (
  <div className="row">
    <div className="col-lg-6 mb-20">
      <label className="checkout__input--label mb-10">First Name *</label>
      <input
        className="checkout__input--field border-radius-5"
        type="text"
        onChange={(e) => onChange(section, "firstName", e.target.value)}
      />
    </div>
    <div className="col-lg-6 mb-20">
      <label className="checkout__input--label mb-10">Last Name *</label>
      <input
        className="checkout__input--field border-radius-5"
        type="text"
        onChange={(e) => onChange(section, "lastName", e.target.value)}
      />
    </div>
    <div className="col-12 mb-20">
      <label className="checkout__input--label mb-10">Address *</label>
      <input
        className="checkout__input--field border-radius-5"
        placeholder="Address 1"
        type="text"
        onChange={(e) => onChange(section, "address", e.target.value)}
      />
    </div>
    <div className="col-lg-6 mb-20">
      <label className="checkout__input--label mb-10">Town/City *</label>
      <input
        className="checkout__input--field border-radius-5"
        type="text"
        onChange={(e) => onChange(section, "city", e.target.value)}
      />
    </div>
    <div className="col-lg-6 mb-20">
      <label className="checkout__input--label mb-10">Postal Code *</label>
      <input
        className="checkout__input--field border-radius-5"
        type="text"
        onChange={(e) => onChange(section, "zip", e.target.value)}
      />
    </div>
  </div>
);

const SummaryItem = ({ img, name, price, qty }: any) => (
  <tr className="cart__table--body__items">
    <td className="cart__table--body__list">
      <div className="product__image two d-flex align-items-center">
        <div className="product__thumbnail border-radius-5">
          <img
            className="display-block border-radius-5"
            src={img}
            alt={name}
            style={{ width: "60px" }}
          />
          <span className="product__thumbnail--quantity">{qty}</span>
        </div>
        <div className="product__description">
          <h4 className="product__description--name">{name}</h4>
        </div>
      </div>
    </td>
    <td className="cart__table--body__list">
      <span className="cart__price">{price}</span>
    </td>
  </tr>
);

export default CheckoutPage;
