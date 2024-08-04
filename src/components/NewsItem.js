import React from "react";
import "../App.css";

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date } = props;

    return (
      <div>
        <div className="card mx-2 my-3">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title ">{title}...</h6>
            <p className="card-text">{description}...</p>
            <p>
              <small className="text-muted" style={{ fontSize: "12px" }}>
                {" "}
                By {author ? author : "Unknown"} <br /> on{" "}
                {new Date(date).toLocaleString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-primary btn-sm btn-dark" target="_blank" rel="noopener noreferrer">
              Read Nore
            </a>

          </div>
        </div>
      </div>
    );
}

export default NewsItem;