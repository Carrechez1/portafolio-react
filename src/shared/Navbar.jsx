import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const [active, setActive] = useState();
  const [burger_class, setBurgerClass] = useState("burguer-bar unclicked");
  const [menu__class, setMenuClass] = useState("menu hidden hidd");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [windon, setWindon] = useState();
  const click = () => {
    setWindon(window.scroll(0, 0));
  };
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burguer-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burguer-bar unclicked");
      setMenuClass("menu hidden hidd");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <div className="nav">
      <nav className="nav1">
        <ul className="nav__list">
          <li className="nav__item_home">
            <NavLink to="/" className={"generic"}>
              <i className="fa-solid fa-house"></i>
            </NavLink>
          </li>

          <li className="nav__item1">
            <NavLink to="/aboutme" className={active ? "active" : "generic"}>
              Sobre mi
            </NavLink>
          </li>

          <li className="nav__item2">
            <NavLink to="/skills" className={active ? "active" : "generic"}>
              Habilidades
            </NavLink>
          </li>

          <li className="nav__item3">
            <NavLink to="/projects" className={active ? "active" : "generic"}>
              Proyectos
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav2">
        <nav className="navof">
          <div className="home">
            <NavLink to="/" className={"generic"}>
              <i className="fa-solid fa-house"></i>
            </NavLink>
          </div>
          <div className="burguer__menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </nav>
        <div className={menu__class}>
          <ul className="nav__list_1">
            <li className="nav__item_1">
              <NavLink
                onClick={click}
                to="/aboutme"
                className={active ? "active" : "generic"}
              >
                Sobre mi
              </NavLink>
            </li>

            <li className="nav__item_2">
              <NavLink
                onClick={click}
                to="/skills"
                className={active ? "active" : "generic"}
              >
                Habilidades
              </NavLink>
            </li>

            <li className="nav__item_3">
              <NavLink
                onClick={click}
                to="/projects"
                className={active ? "active" : "generic"}
              >
                Proyectos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
