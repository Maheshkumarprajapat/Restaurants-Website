import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "./header.css";

const navLink = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Menu",
    url: "#",
  },
  {
    display: "Recipes",
    url: "#",
  },
  {
    display: "Contact",
    url: "#",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);

  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex align-item-center gap-1">
              <span>
                <i class="ri-restaurant-2-line"></i> chef Food
              </span>
            </h2>
          </div>

          <div className="nav__menu" onClick={menuToggle} ref={menuRef}>
            {/* <div className={show ? "nav__menu active__menu" : " nav__menu"}> */}
            <div className="nav__list__wrapper d-flex align-items-center gap-5">
              <ul className="nav__list">
                {navLink.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>

              <div className="menu__right">
                <div className="custom__search">
                  <input type="text" placeholder="search item...." />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i
                className={show ? "ri-close-line" : "ri-menu-line"}
                onClick={() => setShow(!show)}
              ></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
