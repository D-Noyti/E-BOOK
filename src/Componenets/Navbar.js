import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <div className="logo"><i class="fa-solid fa-book-open"></i><span>E•BOOK</span></div> */}
      {/* <div className="logo"><i class="fa-solid fa-book"></i><span>E•BOOK</span></div> */}
      <div className="logo">
        <div className="image"></div>
        <span>E•BOOK</span>
      </div>
      <div className="pages">
        <Link to={"/"} className="lien">
          home
        </Link>
        <Link to={"/About"} className="lien">
          about
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
