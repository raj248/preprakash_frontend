import FeatureProduct from "@/components/cart/FeatureProduct";
import Breadcrumb from "@/components/common/Breadcrumb";
import FeatureSection from "@/components/shop/FeatureSection";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Z 7-8mm Freshwater Button",
    price: "$239.52",
    oldPrice: "$362.00",
    badge: "-14%",
    primaryImg: "/assets/product/main-product/product1.webp",
    secondaryImg: "/assets/product/main-product/product2.webp",
    rating: 4,
    reviews: 126,
  },
  {
    id: 2,
    title: "Freshwater Pearl Bracelet",
    price: "$150.00",
    oldPrice: "$200.00",
    badge: "Sale",
    primaryImg: "/assets/product/main-product/product3.webp",
    secondaryImg: "/assets/product/main-product/product4.webp",
    rating: 5,
    reviews: 85,
  },
  {
    id: 3,
    title: "Diamond Stud Earrings",
    price: "$599.00",
    primaryImg: "/assets/product/main-product/product5.webp",
    secondaryImg: "/assets/product/main-product/product6.webp",
    rating: 4,
    reviews: 42,
  },
  {
    id: 4,
    title: "Gold Plated Necklace",
    price: "$120.00",
    oldPrice: "$180.00",
    badge: "New",
    primaryImg: "/assets/product/main-product/product7.webp",
    secondaryImg: "/assets/product/main-product/product8.webp",
    rating: 3,
    reviews: 12,
  },
  {
    id: 5,
    title: "Silver Crystal Ring",
    price: "$85.00",
    oldPrice: "$110.00",
    badge: "-20%",
    primaryImg: "/assets/product/main-product/product9.webp",
    secondaryImg: "/assets/product/main-product/product10.webp",
    rating: 5,
    reviews: 64,
  },
  {
    id: 6,
    title: "Bohemian Style Anklet",
    price: "$45.00",
    primaryImg: "/assets/product/main-product/product11.webp",
    secondaryImg: "/assets/product/main-product/product12.webp",
    rating: 4,
    reviews: 28,
  },
  {
    id: 7,
    title: "Vintage Rose Pendant",
    price: "$210.00",
    oldPrice: "$250.00",
    badge: "Hot",
    primaryImg: "/assets/product/main-product/product13.webp",
    secondaryImg: "/assets/product/main-product/product14.webp",
    rating: 5,
    reviews: 19,
  },
  {
    id: 8,
    title: "Sapphire Blue Earrings",
    price: "$340.00",
    primaryImg: "/assets/product/main-product/product15.webp",
    secondaryImg: "/assets/product/main-product/product16.webp",
    rating: 4,
    reviews: 56,
  },

  // ... more products
];

const WishlistPage: React.FC = () => {
  // Mock data for the wishlist
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Fairness cream",
      price: "£65.00",
      color: "Blue",
      weight: "2 Kg",
      img: "/assets/product/small-product/product1.webp",
      stock: "in stock",
    },
    {
      id: 2,
      name: "Matte Walnut",
      price: "£65.00",
      color: "Blue",
      weight: "2 Kg",
      img: "/assets/product/small-product/product2.webp",
      stock: "in stock",
    },
    {
      id: 3,
      name: "Freshw Button",
      price: "£65.00",
      color: "Blue",
      weight: "2 Kg",
      img: "/assets/product/small-product/product3.webp",
      stock: "in stock",
    },
    {
      id: 4,
      name: "White Cream",
      price: "£65.00",
      color: "Blue",
      weight: "2 Kg",
      img: "/assets/product/small-product/product4.webp",
      stock: "in stock",
    },
  ]);

  const removeItem = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Breadcrumb title="Wishlist" />

      <section className="cart__section section--padding">
        <div className="container">
          <div className="cart__section--inner">
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <h2 className="cart__title mb-30">Wishlist</h2>
              <div className="cart__table">
                <table className="cart__table--inner">
                  <thead className="cart__table--header">
                    <tr className="cart__table--header__items">
                      <th className="cart__table--header__list">Product</th>
                      <th className="cart__table--header__list">Price</th>
                      <th className="cart__table--header__list text-center">
                        STOCK STATUS
                      </th>
                      <th className="cart__table--header__list text-right">
                        ADD TO CART
                      </th>
                    </tr>
                  </thead>
                  <tbody className="cart__table--body">
                    {wishlistItems.length > 0 ? (
                      wishlistItems.map((item) => (
                        <WishlistItem
                          key={item.id}
                          item={item}
                          onRemove={() => removeItem(item.id)}
                        />
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={4}
                          className="text-center section--padding"
                        >
                          <h3>Your wishlist is empty</h3>
                          <Link to="/shop" className="primary__btn mt-3">
                            Go To Shop
                          </Link>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <div className="continue__shopping d-flex justify-content-between mt-4">
                  <Link className="continue__shopping--link" to="/">
                    Continue shopping
                  </Link>
                  <Link className="continue__shopping--clear" to="/shop-grid">
                    View All Products
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <FeatureProduct products={products} />
      <FeatureSection />
    </>
  );
};

const WishlistItem = ({
  item,
  onRemove,
}: {
  item: any;
  onRemove: () => void;
}) => (
  <tr className="cart__table--body__items">
    <td className="cart__table--body__list">
      <div className="cart__product d-flex align-items-center">
        <button
          className="cart__remove--btn"
          aria-label="remove button"
          type="button"
          onClick={onRemove}
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16px"
            height="16px"
          >
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
          </svg>
        </button>
        <div className="cart__thumbnail">
          <Link to={`/product/${item.id}`}>
            <img className="border-radius-5" src={item.img} alt={item.name} />
          </Link>
        </div>
        <div className="cart__content">
          <h3 className="cart__content--title h4">
            <Link to={`/product/${item.id}`}>{item.name}</Link>
          </h3>
          <span className="cart__content--variant">COLOR: {item.color}</span>
          <span className="cart__content--variant">WEIGHT: {item.weight}</span>
        </div>
      </div>
    </td>
    <td className="cart__table--body__list">
      <span className="cart__price">{item.price}</span>
    </td>
    <td className="cart__table--body__list text-center">
      <span className="in__stock text__secondary">{item.stock}</span>
    </td>
    <td className="cart__table--body__list text-right">
      <Link className="wishlist__cart--btn primary__btn" to="/cart">
        Add To Cart
      </Link>
    </td>
  </tr>
);

export default WishlistPage;
