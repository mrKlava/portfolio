import React, { useState } from "react";
import { Hamburger } from "../../ui";

import "./navbar.scss";

function Navbar({ data }) {
  const [toggleMobMenu, setToggleMobMenu] = useState(false);

  const handleHam = (hamState) => setToggleMobMenu(hamState);

  // console.log (`This is Navbar: ${toggleMobMenu ? 'visible' : 'not-visible'}`)

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <nav className="navbar-inner__nav">
            {/* DESKTOP */}
            <NavbarLinks links={data.links} />
            {/* links */}
          </nav>

          <nav
            className={
              toggleMobMenu
                ? "navbar-inner__nav-mob active"
                : "navbar-inner__nav-mob"
            }
            onClick={() => setToggleMobMenu(false)}
          >
            {/* TABLETS / MOBILE */}
            <NavbarLinks links={data.links} />
            {/* links */}
          </nav>

          <Hamburger updateHam={handleHam} isBurger={toggleMobMenu} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

function NavbarLinks(props) {
  return (
    <ul className="navbar-links">
      {props.links.map((link, key) => {
        return <NavLink link={link} key={key} />;
      })}
    </ul>
  );
}

function NavLink(props) {
  return (
    <li className="navbar-links__link">
      <div className="navlink-inner">
        <h5 className="navlink --pink">{props.link.text}</h5>
        <h5 className="navlink --blue">{props.link.text}</h5>
        <a href={props.link.link} className="navlink --white">
          {props.link.text}
        </a>
      </div>
    </li>
  );
}
