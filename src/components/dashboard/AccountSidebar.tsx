import React from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AccountSidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const menuItems = ["Dashboard", "Addresses", "Wishlist", "Log Out"];

  return (
    <div className="account__left--sidebar">
      <h2 className="account__content--title mb-20">My Profile</h2>
      <ul className="account__menu">
        {menuItems.map((item) => {
          const isActive = activeTab === item;

          return (
            <li
              key={item}
              className={`account__menu--list ${isActive ? "active" : ""}`}
            >
              <button
                className={`border-0 bg-transparent w-100 text-start ${
                  isActive ? "text-color-secondary fw-bold" : ""
                }`}
                onClick={() => setActiveTab(item)}
                style={{
                  color: isActive ? "var(--secondary-color)" : "inherit",
                }}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AccountSidebar;
