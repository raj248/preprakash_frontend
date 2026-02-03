import React from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Post With Gallery",
    date: "February 14, 2022",
    image: "assets/blog/blog1.webp",
    link: "/blog/post-1",
  },
  {
    id: 2,
    title: "Post With Video",
    date: "February 14, 2022",
    image: "assets/blog/blog2.webp",
    link: "/blog/post-2",
  },
];

const RelatedArticles: React.FC = () => {
  return (
    <div className="related__post--area">
      <div className="related__post--heading mb-30">
        <h2 className="related__post--heading__maintitle">
          Related <span>Articles</span>
        </h2>
      </div>
      <div className="row row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n28">
        {articles.map((article) => (
          <div className="col mb-28" key={article.id}>
            <div className="related__post--items">
              <div className="related__post--thumb border-radius-10 mb-20">
                <Link className="display-block" to={article.link}>
                  <img
                    className="related__post--img display-block border-radius-10"
                    src={article.image}
                    alt={article.title}
                  />
                </Link>
              </div>
              <div className="related__post--text">
                <h3 className="related__post--title mb-10">
                  <Link
                    className="related__post--title__link"
                    to={article.link}
                  >
                    {article.title}
                  </Link>
                </h3>
                <span className="related__post--deta">{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
