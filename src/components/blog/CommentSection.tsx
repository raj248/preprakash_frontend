import React, { useState } from "react";

const CommentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your logic to send data to your backend here
  };

  return (
    <div className="comment__box">
      <div className="reviews__comment--area2">
        <h2 className="blog__comment--title style2 mb-30">Recent Comment</h2>
        <div className="reviews__comment--inner">
          {/* Main Comment */}
          <CommentItem
            name="Jakes on"
            date="May 26, 2022"
            img="/assets/other/comment-thumb1.webp"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque."
          />

          {/* Replied Comment (indented) */}
          <CommentItem
            name="Laura Johnson"
            date="May 26, 2022"
            img="/assets/other/comment-thumb2.webp"
            text="Assumenda distinctio, autem error repellat eveniet ratione dolor facilis."
            isReply={true}
          />
        </div>
      </div>

      {/* Comment Form */}
      <div className="reviews__comment--reply__area">
        <form onSubmit={handleSubmit}>
          <h3 className="blog__comment--title mb-30">Leave A Comment</h3>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-20">
              <input
                className="reviews__comment--reply__input"
                placeholder="Your Name...."
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-20">
              <input
                className="reviews__comment--reply__input"
                placeholder="Your Email...."
                type="email"
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-20">
              <input
                className="reviews__comment--reply__input"
                placeholder="Your Website...."
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
              />
            </div>
            <div className="col-12 mb-15">
              <textarea
                className="reviews__comment--reply__textarea"
                placeholder="Your Comments...."
                required
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <button className="blog__comment--btn primary__btn" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

// Sub-component for individual comment rows
const CommentItem = ({ name, date, img, text, isReply = false }: any) => (
  <div
    className={`reviews__comment--list d-flex ${isReply ? "margin__left" : ""}`}
  >
    <div className="reviews__comment--thumb">
      <img src={img} alt="comment-thumb" />
    </div>
    <div className="reviews__comment--content">
      <div className="reviews__comment--top d-flex justify-content-between">
        <div className="reviews__comment--top__left">
          <h3 className="reviews__comment--content__title2 h4">{name}</h3>
          <span className="reviews__comment--content__date2">{date}</span>
        </div>
        <button className="comment__reply--btn primary__btn">Reply</button>
      </div>
      <p className="reviews__comment--content__desc">{text}</p>
    </div>
  </div>
);

export default CommentSection;
