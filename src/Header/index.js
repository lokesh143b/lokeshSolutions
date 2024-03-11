import { Link } from "react-router-dom";
import "./index.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => (
  <div className="header-container">
    <header className="header">
      <img
        className="header-logo"
        src="https://res.cloudinary.com/dssfuaou4/image/upload/v1709550759/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/Lokesh_Solutions_small_Logo_lfukhp.png"
        alt="logo"
      />

      <ul className="nav-container">
        <li>
          <Link to="/home" className="link-item">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-item">
            About {<MdOutlineKeyboardArrowDown size={30} />}
          </Link>
        </li>
        <li>
          <Link className="link-item">
            Services{<MdOutlineKeyboardArrowDown size={30} />}
          </Link>
        </li>
        <li>
          <Link className="link-item">
            Training {<MdOutlineKeyboardArrowDown size={30} />}
          </Link>
        </li>
        <li>
          <Link className="link-item">Careers</Link>
        </li>
        <li>
          <Link className="link-item">
            Blogs {<MdOutlineKeyboardArrowDown size={30} />}
          </Link>
        </li>
        <li>
          <Link className="link-item">
            More{<MdOutlineKeyboardArrowDown size={30} />}
          </Link>
        </li>
        <li>
          <Link className="link-item">Contact</Link>
        </li>
        <li>
          <button type="button" className="button-request-quote">
            Request A Quote
          </button>
        </li>
      </ul>
    </header>
  </div>
);

export default Header;
