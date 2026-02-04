import Breadcrumb from "@/components/common/Breadcrumb";
import ContactSection from "@/components/contact/ContactSection";
import FeatureSection from "@/components/shop/FeatureSection";

const ContactPage: React.FC = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <ContactSection />
      <FeatureSection />
    </>
  );
};

export default ContactPage;
