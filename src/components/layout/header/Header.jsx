import scss from "./Header.module.scss";
import { IoIosContact } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <h1>ENSCENT</h1>
          <div className={scss.nav}>
            <Link to="/">
              <p>HOME</p>
            </Link>
            <Link to="/products">
              <p>PRODUCTS</p>
            </Link>
            <Link to="/">
              <p>ABOUT</p>
            </Link>
          </div>
          <div className={scss.icons}>
            <Link to="/add">
              <IoIosContact />
            </Link>
            <CiHeart />
            <Link to="/list">
              <FiShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
