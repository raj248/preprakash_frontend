import React from "react";
import { Link } from "react-router-dom";
import BlogSidebar from "./BlogSidebar";
import CommentSection from "./CommentSection";
import RelatedArticles from "./RelatedArticles";

const BlogDetails: React.FC = () => {
  return (
    <section className="blog__details--section section--padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog__details--wrapper">
              <article className="entry__blog">
                <header className="blog__post--header mb-30">
                  <h2 className="post__header--title mb-15">
                    We are committed to offering the finest selection of clean
                    and natural skin
                  </h2>
                  <p className="blog__post--meta">
                    Posted by : admin / On : May 26, 2022 / In :
                    <Link
                      className="blog__post--meta__link"
                      to="/category/travel"
                    >
                      Company, Image, Travel
                    </Link>
                  </p>
                </header>

                <div className="blog__thumbnail mb-30">
                  <img
                    className="blog__thumbnail--img border-radius-10"
                    src="/assets/blog/blog-page-big1.webp"
                    alt="Main blog post"
                  />
                </div>

                <div className="blog__details--content">
                  <h3 className="blog__details--content__subtitle mb-25">
                    5 Best Budget-Friendly Mobiles Under BDT 20K – 30K In
                    Bangladesh (2022)!
                  </h3>
                  <p className="blog__details--content__desc mb-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita in recusandae sit officia ipsa...
                  </p>

                  <blockquote className="blockquote__content bg__gray--color mb-30">
                    <p className="blockquote__content--desc">
                      "Quisque semper nunc vitae erat pellentesque, ac placerat
                      arcu consectetur."
                    </p>
                  </blockquote>

                  <p className="blog__details--content__desc">
                    Eos omnis maiores beatae cum a consequatur magnam sequi
                    neque, at numquam qui ipsam unde veritatis...
                  </p>
                </div>
              </article>

              {/* Social Share & Tags */}
              <div className="blog__tags--social__media d-flex align-items-center justify-content-between">
                <div className="blog__tags--media d-flex align-items-center">
                  <label className="blog__tags--media__title">
                    Related Tags :
                  </label>
                  <ul className="d-flex">
                    {["Popular", "Business", "Design"].map((tag) => (
                      <li key={tag} className="blog__tags--media__list">
                        <Link
                          className="blog__tags--media__link"
                          to={`/tag/${tag.toLowerCase()}`}
                        >
                          {tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <RelatedArticles />
              <CommentSection />
            </div>
          </div>

          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
