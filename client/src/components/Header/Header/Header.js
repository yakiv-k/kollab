import "./Header.scss";

function Header () {
    return(
        <>
        <header className="header">
            <nav className="header__nav nav">
                <div className="nav__title-division">
                    <h1 className="nav__title">Kollab.</h1>
                </div>
                <div className="nav__links-division">
                    <p className="nav__links">Feed</p>
                    <span className="nav__links-pipe">|</span>
                    <p className="nav__links">Profile</p>
                </div>
            </nav>
        </header>
        </>
    );
};

export default Header;