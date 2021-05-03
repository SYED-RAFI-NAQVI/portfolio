import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer p-3">
      <Row>
        <Col className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SYED-RAFI-NAQVI"
                style={{ color: "white" }}
              >
                <i className="fab fa-github" style={{ fontSize: "22px" }}></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/SYED_RAFI_NAQVI"
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter" style={{ fontSize: "22px" }}></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/syed-rafi-naqvi-28566bb1/"
                style={{ color: "white" }}
              >
                <i
                  className="fab fa-linkedin-in"
                  style={{ fontSize: "22px" }}
                ></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/syed_rafi_naqvi/"
                style={{ color: "white" }}
              >
                <i
                  className="fab fa-instagram"
                  style={{ fontSize: "22px" }}
                ></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/channel/UCOebtB13vgefERkp1FP5lqA"
                style={{ color: "white" }}
              >
                <i class="fab fa-youtube" style={{ fontSize: "22px" }}></i>{" "}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
