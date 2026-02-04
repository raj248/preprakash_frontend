import React from "react";

interface Address {
  id: number;
  isDefault: boolean;
  name: string;
  city: string;
  zip: string;
  country: string;
}

const AddressManagement: React.FC = () => {
  // In a real app, this would come from an API
  const addresses: Address[] = [
    {
      id: 1,
      isDefault: true,
      name: "Admin",
      city: "Dhaka",
      zip: "12119",
      country: "Bangladesh",
    },
  ];

  const handleAddNew = () => {
    console.log("Opening 'Add New Address' modal or form...");
  };

  return (
    <div className="account__content">
      <h2 className="account__content--title h3 mb-20">Addresses</h2>

      <button
        className="new__address--btn primary__btn mb-25"
        type="button"
        onClick={handleAddNew}
      >
        Add a new address
      </button>

      <div className="account__address--list">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onEdit={() => console.log("Edit", address.id)}
            onDelete={() => console.log("Delete", address.id)}
          />
        ))}
      </div>
    </div>
  );
};

/* --- Sub-component for individual Address Cards --- */

const AddressCard: React.FC<{
  address: Address;
  onEdit: () => void;
  onDelete: () => void;
}> = ({ address, onEdit, onDelete }) => {
  return (
    <div className="account__details--wrapper mb-20">
      <div className="account__details two">
        {address.isDefault && (
          <h3 className="account__details--title h4">Default</h3>
        )}
        <p className="account__details--desc">
          {address.name} <br />
          {address.city} <br />
          {address.zip} <br />
          {address.country}
        </p>
        <button
          className="account__details--link bg-transparent border-0 p-0 text-primary"
          type="button"
        >
          View Addresses (1)
        </button>
      </div>

      <div className="account__details--footer d-flex">
        <button
          className="account__details--footer__btn"
          type="button"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="account__details--footer__btn"
          type="button"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddressManagement;
