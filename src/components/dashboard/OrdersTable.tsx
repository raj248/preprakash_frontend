import React from "react";

const OrdersTable: React.FC = () => {
  const orders = [
    {
      id: "#2014",
      date: "Nov 24, 2022",
      payment: "Paid",
      fulfillment: "Unfulfilled",
      total: "$40.00",
    },
    {
      id: "#2024",
      date: "Nov 24, 2022",
      payment: "Paid",
      fulfillment: "Fulfilled",
      total: "$44.00",
    },
    // ... add more as needed
  ];

  return (
    <div className="account__content">
      <h2 className="account__content--title h3 mb-20">Orders History</h2>
      <div className="account__table--area">
        <table className="account__table">
          <thead className="account__table--header">
            <tr className="account__table--header__child">
              <th className="account__table--header__child--items">Order</th>
              <th className="account__table--header__child--items">Date</th>
              <th className="account__table--header__child--items">Payment</th>
              <th className="account__table--header__child--items">
                Fulfillment
              </th>
              <th className="account__table--header__child--items">Total</th>
            </tr>
          </thead>
          <tbody className="account__table--body">
            {orders.map((order, index) => (
              <tr key={index} className="account__table--body__child">
                <td className="account__table--body__child--items">
                  {order.id}
                </td>
                <td className="account__table--body__child--items">
                  {order.date}
                </td>
                <td className="account__table--body__child--items">
                  {order.payment}
                </td>
                <td className="account__table--body__child--items">
                  {order.fulfillment}
                </td>
                <td className="account__table--body__child--items">
                  {order.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
