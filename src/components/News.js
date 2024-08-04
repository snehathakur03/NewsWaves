import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    try {
      let response = await fetch(url);
      let parsedData = await response.json();

      if (parsedData.status === "ok") {
        setArticles(parsedData.articles || []);
        setTotalResults(parsedData.totalResults || 0);
      } else {
        console.error("Error in API response:", parsedData);
        setArticles([]);
        setTotalResults(0);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setArticles([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsWaves`;
    updateNews();
    // eslint-disable-next-line
  }, [page]);

  const handlePrevClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setPage((prevPage) => {
      const maxPage = Math.ceil(totalResults / props.pageSize);
      return Math.min(prevPage + 1, maxPage);
    });
  };

  

  return (
    <>
      <div className="container my-4">
        <h3 className="mb-3 text-center" style={{ marginTop: "75px" }}>
          Top {capitalize(props.category)} Headlines
        </h3>
        {loading && <Spinner />}
        <div className="row mt-2">
          {!loading &&
            articles.map((element) => (
              <div className="col-md-5 col-lg-4 col-xl-3 mx-auto" key={element.url}>
                <NewsItem
                  title={
                    element.title && element.title !== "[Removed]"
                      ? element.title.slice(0, 43)
                      : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
                  }
                  description={
                    element.description && element.description !== "[Removed]"
                      ? element.description.slice(0, 120)
                      : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://images.hindustantimes.com/img/2024/07/25/550x309/SPAIN-ENVIRONMENT-CLIMATE-WEATHER-HEATWAVE-0_1721921381255_1721921852306.jpg"
                  }
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
        </div>

        <div className="d-flex justify-content-center my-4">
          <button
            disabled={page <= 1}
            style={{ width: "6rem", borderRadius: "0" }}
            className="btn btn-dark btn-sm"
            onClick={handlePrevClick}
            aria-label="Previous"
          >
            <span aria-hidden="true"> &laquo; Previous</span>
          </button>

          <button
            disabled={page >= Math.ceil(totalResults / props.pageSize)}
            style={{ width: "6rem", borderRadius: "0", marginLeft: "1rem" }}
            className="btn btn-dark btn-sm"
            onClick={handleNextClick}
            aria-label="Next"
          >
            <span aria-hidden="true">Next &raquo; </span>
          </button>
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  pageSize: 15,
  category: "general",
};

export default News;
