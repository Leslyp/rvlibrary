import React from 'react';
import OptionsBox from './OptionsBox';

function Recommendation(props = "El Pooch of La Mancha") {
  return (
    <article className="large-5 recommendation-area">
      <div className="container-float">
        <div className="bookcontainer">
          <img src="http://books.google.com/books/content?id=fdjqz0TPL2wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="book cover" />
        </div>
        <div className="bookdetails">
          <h3>{props.title}</h3>
          <p>By <span className="author">{props.author}</span></p>
          <span className="rating">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span>
        </div>
      </div>
      <div className="">
        <p className="reviewText">Description coming soon. Fearful inexpedient fearful will joy philosophy. Battle war transvaluation eternal-return society madness eternal-return chaos right free morality merciful.</p>
        <OptionsBox />
      </div>
    </article>

  );
}

export default Recommendation;