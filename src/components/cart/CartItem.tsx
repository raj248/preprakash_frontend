import React from "react";

interface ItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    variant: string;
    weight: string;
  };
  onUpdateQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<ItemProps> = ({ item, onUpdateQty, onRemove }) => {
  return (
    <tr className="cart__table--body__items">
      <td className="cart__table--body__list">
        <div className="cart__product d-flex align-items-center">
          <button
            className="cart__remove--btn"
            type="button"
            onClick={() => onRemove(item.id)}
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
            <a href="#">
              <img
                className="border-radius-5"
                src={item.image}
                alt={item.name}
              />
            </a>
          </div>
          <div className="cart__content">
            <h3 className="cart__content--title h4">
              <a href="#">{item.name}</a>
            </h3>
            <span className="cart__content--variant">
              COLOR: {item.variant}
            </span>
            <span className="cart__content--variant">
              WEIGHT: {item.weight}
            </span>
          </div>
        </div>
      </td>
      <td className="cart__table--body__list">
        <span className="cart__price">£{item.price.toFixed(2)}</span>
      </td>
      <td className="cart__table--body__list">
        <div className="quantity__box">
          <button
            type="button"
            className="quantity__value decrease"
            onClick={() => onUpdateQty(item.id, -1)}
          >
            -
          </button>
          <label>
            <input
              type="number"
              className="quantity__number"
              value={item.quantity}
              readOnly
            />
          </label>
          <button
            type="button"
            className="quantity__value increase"
            onClick={() => onUpdateQty(item.id, 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="cart__table--body__list">
        <span className="cart__price end">
          £{(item.price * item.quantity).toFixed(2)}
        </span>
      </td>
    </tr>
  );
};

export default CartItem;
