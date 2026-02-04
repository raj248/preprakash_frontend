import React from "react";

// Define the data structure for each feature
const featureData = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Free shipping over $100",
    icon: "/assets/other/feature1.webp",
  },
  {
    id: 2,
    title: "Support 24/7",
    description: "Contact us 24 hours a day",
    icon: "/assets/other/feature2.webp",
  },
  {
    id: 3,
    title: "100% Money Back",
    description: "You have 30 days to Return",
    icon: "/assets/other/feature3.webp",
  },
  {
    id: 4,
    title: "Payment Secure",
    description: "We ensure secure payment",
    icon: "/assets/other/feature4.webp",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="feature__section section--padding pt-0">
      <div className="container">
        <div className="feature__inner d-flex justify-content-between">
          {featureData.map((feature) => (
            <div
              className="feature__items d-flex align-items-center"
              key={feature.id}
            >
              <div className="feature__icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <div className="feature__content">
                <h2 className="feature__content--title h3">{feature.title}</h2>
                <p className="feature__content--desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
