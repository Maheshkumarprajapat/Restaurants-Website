import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const footerQuickLinks = [
  {
    display: "Terms & Conditions",
    url: "#",
  },
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Return & Refunf",
    url: "#",
  },
  {
    display: "payment Method",
    url: "#",
  },
];

const footerLinks = [
  {
    display: "About Us",
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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="6">
              <div className="logo">
                <h2 className="d-flex align-items-center gap-1">
                  <span>
                    <i class="ri-restaurant-2-line"></i>
                  </span>
                  Chef Food
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, dignissimos asperiores. Reiciendis beatae voluptas
                  odio dignissimos, atque ea aut nobis.
                </p>
              </div>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">Info Links</h5>
              <ListGroup>
                {footerQuickLinks.map((item, index) => (
                  <ListGroupItem className="link__item">
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="2" md="4" sm="6">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {footerLinks.map((item, index) => (
                  <ListGroupItem className="link__item">
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">Contact</h5>

              <ListGroup>
                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <i class="ri-map-pin-line"></i> Sylhet, Bangladesh
                </ListGroupItem>

                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <i class="ri-mail-line"></i> example@gmail.com
                </ListGroupItem>

                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <i class="ri-phone-line"></i> +880 123 456 7890
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer__bottom">
        <Container>
          <Row>
            <Col lg="12">
              <p>copyright 2022, developed by muhib. All right reserved</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};
// 1:33
export default Footer;
