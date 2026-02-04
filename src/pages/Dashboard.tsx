import React, { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import AccountSidebar from "@/components/dashboard/AccountSidebar";
import OrdersTable from "@/components/dashboard/OrdersTable";
import AddressManagement from "@/components/dashboard/AddressManagement";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Logic to render content dynamically
  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <OrdersTable />;
      case "Addresses":
        return <AddressManagement />;
      case "Wishlist":
        return (
          <div>
            <h3>Your Wishlist is Empty</h3>
          </div>
        );
      case "Log Out":
        return (
          <div>
            <h3>Redirecting to Login...</h3>
          </div>
        );
      default:
        return <OrdersTable />;
    }
  };

  return (
    <>
      <Breadcrumb title={activeTab} />
      <section className="my__account--section section--padding">
        <div className="container">
          <p className="account__welcome--text">
            Hello, Admin welcome to your{" "}
            <strong>{activeTab.toLowerCase()}</strong>!
          </p>

          <div className="my__account--section__inner border-radius-10 d-flex">
            <AccountSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="account__wrapper">{renderContent()}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
