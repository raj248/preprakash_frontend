import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Breadcrumb from "@/components/common/Breadcrumb";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";

const AboutPage: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="main__content_wrapper">
      {/* Breadcrumb */}

      <Breadcrumb title="About Us" />
      {/* About Section */}
      <section className="about__Section section--padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="about__thumbnail padding__left position-relative">
                <img src="/assets/other/about.webp" alt="Our Studio" />
                <div className="about__experience--text text-center">
                  <span className="about__experience--years">
                    <span className="about__experience--years__inner">15</span>+
                  </span>
                  <span className="about__experience--title">
                    YEARS EXPERIENCE
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="about__content padding__left">
                <h3 className="about__content--subtitle">About</h3>
                <h2 className="about__content--title">Curated by color</h2>
                <p className="about__content--desc">
                  We specialize in crafting timeless pieces that blend
                  traditional craftsmanship with modern aesthetics. Our journey
                  started over a decade ago with a simple mission: to make
                  luxury jewelry accessible and meaningful.
                </p>
                <Link className="about__conten--btn primary__btn" to="/shop">
                  VIEW COLLECTIONS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counterup Banner Section */}
      <div
        className="counterup__banner--section counterup__banner__bg2"
        ref={ref}
      >
        <div className="container">
          <div className="row row-cols-1 align-items-center">
            <div className="col">
              <div className="counterup__banner--inner d-flex align-items-center justify-content-between">
                <StatItem
                  label={
                    <>
                      YEARS OF <br /> FOUNDATION
                    </>
                  }
                  count={50}
                  show={inView}
                />
                <StatItem
                  label={
                    <>
                      SKILLED TEAM <br /> MEMBERS
                    </>
                  }
                  count={100}
                  show={inView}
                />
                <StatItem
                  label={
                    <>
                      HAPPY <br /> CUSTOMERS
                    </>
                  }
                  count={850}
                  suffix="+"
                  show={inView}
                />
                <StatItem
                  label={
                    <>
                      MONTHLY <br /> ORDERS
                    </>
                  }
                  count={70}
                  show={inView}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TestimonialCarousel />
    </main>
  );
};

// Small helper component for Stats
const StatItem = ({ label, count, show, suffix = "" }: any) => (
  <div className="counterup__items text-center">
    <h2 className="counterup__title">{label}</h2>
    <span className="counterup__number">
      {show ? <CountUp end={count} duration={3} suffix={suffix} /> : "0"}
    </span>
  </div>
);

export default AboutPage;
