import { useSettings } from "@/context/SettingContext";
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Integration point for EmailJS or your API
    alert("Thank you! Your message has been sent.");
  };

  const { customization } = useSettings();
  return (
    <section className="contact__section section--padding">
      <div className="container">
        <div className="contact__section--heading text-center mb-40">
          <h2 className="contact__section--heading__maintitle">Get In Touch</h2>
          <p className="contact__section--heading__desc">
            Beyond more stoic this along goodness this sed wow manatee mongos
            flusterd impressive man farcrud opened.
          </p>
        </div>

        <div className="main__contact--area position__relative">
          <div className="contact__form">
            <h3 className="contact__form--title mb-30">Contact Me</h3>
            <form className="contact__form--inner" onSubmit={handleSubmit}>
              <div className="row">
                <ContactInput
                  label="First Name"
                  name="firstname"
                  placeholder="Your First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <ContactInput
                  label="Last Name"
                  name="lastname"
                  placeholder="Your Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <ContactInput
                  label="Phone Number"
                  name="number"
                  placeholder="Phone number"
                  value={formData.number}
                  onChange={handleChange}
                />
                <ContactInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <div className="col-12">
                  <div className="contact__form--list mb-15">
                    <label className="contact__form--label" htmlFor="message">
                      Write Your Message{" "}
                      <span className="contact__form--label__star">*</span>
                    </label>
                    <textarea
                      className="contact__form--textarea"
                      name="message"
                      id="message"
                      placeholder="Write Your Message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button className="contact__form--btn primary__btn" type="submit">
                <span>Submit Now</span>
              </button>
            </form>
          </div>

          <div className="contact__info border-radius-5">
            {/* Phone Info */}
            <InfoItem title="Contact Us" icon={<PhoneIcon />}>
              <p className="contact__info--content__desc text-white">
                Change the design through a range <br />
                {/* <a href="tel:+01234-567890">+01234-567890</a> <br /> */}
                <a href={"tel:" + customization?.footer.block4_phone}>
                  {customization?.footer.block4_phone}
                </a>
              </p>
            </InfoItem>

            {/* Email Info */}
            <InfoItem title="Email Address" icon={<EmailIcon />}>
              <p className="contact__info--content__desc text-white">
                {/* <a href="mailto:info@example.com">info@example.com</a> <br /> */}
                <a href={"mailto:" + customization?.footer.block4_email}>
                  {customization?.footer.block4_email}
                </a>
              </p>
            </InfoItem>

            {/* Location Info */}
            <InfoItem title="Office Location" icon={<LocationIcon />}>
              <p className="contact__info--content__desc text-white">
                {customization?.footer.block4_address.en}
              </p>
            </InfoItem>

            {/* Socials */}
            <div className="contact__info--items">
              <h3 className="contact__info--content__title text-white mb-15">
                Follow Us
              </h3>
              <ul className="contact__info--social d-flex">
                <SocialIcon
                  href="https://facebook.com"
                  label="Facebook"
                  path="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z"
                  viewBox="0 0 7.667 16.524"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- Helper Sub-Components --- */

const ContactInput = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}: any) => (
  <div className="col-lg-6 col-md-6">
    <div className="contact__form--list mb-20">
      <label className="contact__form--label" htmlFor={name}>
        {label} <span className="contact__form--label__star">*</span>
      </label>
      <input
        className="contact__form--input"
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

const InfoItem = ({ title, icon, children }: any) => (
  <div className="contact__info--items">
    <h3 className="contact__info--content__title text-white mb-15">{title}</h3>
    <div className="contact__info--items__inner d-flex">
      <div className="contact__info--icon">{icon}</div>
      <div className="contact__info--content">{children}</div>
    </div>
  </div>
);

const SocialIcon = ({ href, label, path, viewBox }: any) => (
  <li className="contact__info--social__list">
    <a
      className="contact__info--social__icon"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox={viewBox}
      >
        <path d={path} fill="currentColor" />
      </svg>
      <span className="visually-hidden">{label}</span>
    </a>
  </li>
);

/* --- SVGs (Extracted for readability) --- */
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31.568"
    height="31.128"
    viewBox="0 0 31.568 31.128"
  >
    <path
      d="M26.676,16.564l7.892-7.782L26.676,1V5.669H20.362v6.226h6.314Zm3.157,7a18.162,18.162,0,0,1-5.635-.887,1.627,1.627,0,0,0-1.61.374l-3.472,3.424a23.585,23.585,0,0,1-10.4-10.257l3.472-3.44a1.48,1.48,0,0,0,.395-1.556,17.457,17.457,0,0,1-.9-5.556A1.572,1.572,0,0,0,10.1,4.113H4.578A1.572,1.572,0,0,0,3,5.669,26.645,26.645,0,0,0,29.832,32.128a1.572,1.572,0,0,0,1.578-1.556V25.124A1.572,1.572,0,0,0,29.832,23.568Z"
      transform="translate(-3 -1)"
      fill="currentColor"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31.57"
    height="31.13"
    viewBox="0 0 31.57 31.13"
  >
    <path
      d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z"
      transform="translate(-2 -4)"
      fill="currentColor"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31.57"
    height="31.13"
    viewBox="0 0 31.57 31.13"
  >
    <path
      d="M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z"
      transform="translate(-2 -1)"
      fill="currentColor"
    />
  </svg>
);

export default ContactSection;
