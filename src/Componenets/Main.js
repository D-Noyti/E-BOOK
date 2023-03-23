import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import Navbar from "./Navbar";
import BackToTop from "./BackToTop";
const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyBxMFgLSj4tLXj-s-Kydatq9Zn7-wZcvUM" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));

      setTimeout(hadidscroll, 2000);
    }
  };
  const hadidscroll = () => {
    window.scrollTo({ top: 650, left: 0, behavior: "smooth" });
  };

  console.log(bookData);

  return (
    <>
      <div className="header">
        <Navbar />
        <div className="row1">
          <h1>
            A ROOM WITHOUT BOOKS IS <br />
            LIKE A BODY WITHOUT <br />A SOUL.
          </h1>
        </div>
        <div className="row2">
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="body">
        {bookData.length != 0 ? (
          <div className="container">{<Card book={bookData} />}</div>
        ) : null}
        <BackToTop/>
      </div>
    </>
  );
};
export default Main;
