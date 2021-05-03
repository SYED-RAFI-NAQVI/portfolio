import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Syed Rafi Naqvi </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />I am a junior Full Stack Developer, Exploring to be a Senior
            🐶. BTW I like 🐱.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Pc Games
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Vloging Tech Reviews
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Having a contrasting mind is meager but making difference in
            other's life is humongous. Let's try to make a difference."{" "}
          </p>
          <footer className="blockquote-footer">Syed Rafi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
