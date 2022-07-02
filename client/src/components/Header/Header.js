import { Link } from "react-router-dom";

import "./Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__nav nav">
          <div className="nav__title-division">
            <Link to="/tracks">
              <h1 className="nav__title">Kollab.</h1>
            </Link>
          </div>
          <div className="nav__links-division">
            <Link to={`/tracks`} className="nav__links">
              Feed
            </Link>
            <span className="nav__links-pipe">|</span>
            <p className="nav__links">Profile</p>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
