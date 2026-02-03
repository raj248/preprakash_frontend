import React from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  author: string;
  title: string;
  image: string;
  link: string;
}

const BlogCard: React.FC<{ post: BlogPost; isLarge?: boolean }> = ({
  post,
  isLarge,
}) => (
  <article className="blog__card">
    <div className="blog__card--thumbnail">
      <Link className="blog__card--thumbnail__link" to={post.link}>
        <img
          className="blog__card--thumbnail__img"
          src={post.image}
          alt={post.title}
        />
      </Link>
    </div>
    <div
      className={`blog__card--content ${isLarge ? "blog__sticky--content" : ""}`}
    >
      <div className="blog__meta">
        <span className="blog__meta--text">{post.author}</span>
      </div>
      <h3 className="blog__card--title">
        <Link to={post.link}>{post.title}</Link>
      </h3>
      <Link className="blog__card--link" to={post.link}>
        Read More
      </Link>
    </div>
  </article>
);

const BlogSection: React.FC<{ blogs: BlogPost[] }> = ({ blogs }) => {
  // Logic to separate the first post from the rest
  const featuredPost = blogs[0];
  const sidePosts = blogs.slice(1, 3); // Gets the next 2 posts

  return (
    <section className="blog__section section--padding pt-0">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">From The Blogs</h2>
        </div>
        <div className="blog__section--inner">
          <div className="row">
            {/* Featured Large Blog */}
            <div className="col-lg-8">
              {featuredPost && <BlogCard post={featuredPost} isLarge={true} />}
            </div>

            {/* Sidebar Small Blogs */}
            <div className="col-lg-4">
              <div className="blog__card--sidebar">
                {sidePosts.map((post, index) => (
                  <div key={post.id} className={index === 0 ? "mb-30" : ""}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
