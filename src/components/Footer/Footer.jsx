/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <div className="copyright">
            © {new Date().getFullYear()} {" "}
            <a
              href="javascript:void(0)"
              rel="noopener noreferrer"
              target="_blank"
            >
              Merapi Minister
            </a>{" "}
            <i className="tim-icons icon-heart-2" /> {" "}
            Universitas Siliwangi
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
