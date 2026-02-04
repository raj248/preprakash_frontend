import Breadcrumb from "@/components/common/Breadcrumb";
import FeatureSection from "@/components/shop/FeatureSection";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Breadcrumb title="Privacy Policy" />
      <div className="privacy__policy--section section--padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Introduction */}
              <section className="privacy__policy--content">
                <h2 className="privacy__policy--content__title">Who we are</h2>
                <p className="privacy__policy--content__desc">
                  Our website address is:
                  <a href="mailto:info@example.com" className="ml-1">
                    info@example.com
                  </a>
                </p>
              </section>

              {/* Data Collection */}
              <section className="privacy__policy--content section_2">
                <h2 className="privacy__policy--content__title">
                  What personal data we collect and why we collect it
                </h2>

                <h3 className="privacy__policy--content__subtitle">Comments</h3>
                <p className="privacy__policy--content__desc">
                  When visitors leave comments on the site we collect the data
                  shown in the comments form, and also the visitor’s IP address
                  and browser user agent string to help spam detection.
                </p>
                <p className="privacy__policy--content__desc">
                  An anonymized string created from your email address (also
                  called a hash) may be provided to the Gravatar service...
                </p>

                <h3 className="privacy__policy--content__subtitle">Media</h3>
                <p className="privacy__policy--content__desc">
                  If you upload images to the website, you should avoid
                  uploading images with embedded location data (EXIF GPS)
                  included.
                </p>

                <h3 className="privacy__policy--content__subtitle">Cookies</h3>
                <p className="privacy__policy--content__desc">
                  If you leave a comment on our site you may opt-in to saving
                  your name, email address and website in cookies. These are for
                  your convenience so that you do not have to fill in your
                  details again. These cookies will last for one year.
                </p>
                <p className="privacy__policy--content__desc">
                  When you log in, we will also set up several cookies to save
                  your login information and your screen display choices.
                </p>

                <h3 className="privacy__policy--content__subtitle">
                  Embedded content from other websites
                </h3>
                <p className="privacy__policy--content__desc">
                  Articles on this site may include embedded content (e.g.
                  videos, images, articles, etc.). Embedded content from other
                  websites behaves in the exact same way as if the visitor has
                  visited the other website.
                </p>
              </section>

              {/* Retention and Rights */}
              <section className="privacy__policy--content section_3">
                <h2 className="privacy__policy--content__title">
                  How long we retain your data
                </h2>
                <p className="privacy__policy--content__desc">
                  If you leave a comment, the comment and its metadata are
                  retained indefinitely. For users that register, we store the
                  personal information they provide in their user profile.
                </p>
              </section>

              <section className="privacy__policy--content section_3">
                <h2 className="privacy__policy--content__title">
                  What rights you have over your data
                </h2>
                <p className="privacy__policy--content__desc">
                  You can request to receive an exported file of the personal
                  data we hold about you. You can also request that we erase any
                  personal data we hold about you.
                </p>
              </section>

              <section className="privacy__policy--content section_3">
                <h2 className="privacy__policy--content__title">
                  Where we send your data
                </h2>
                <p className="privacy__policy--content__desc">
                  Visitor comments may be checked through an automated spam
                  detection service.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <FeatureSection />
    </>
  );
};

export default PrivacyPolicy;
