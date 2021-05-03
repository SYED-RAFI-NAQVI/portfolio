import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import netflix from "../../Assets/Projects/netflix.jpg";
import balls from "../../Assets/Projects/balls.gif";
import states from "../../Assets/Projects/states.png";
import npm from "../../Assets/Projects/npm.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone - The movie trailer app"
              stack="Front-End"
              used="React JS, Axios, HTML/CSS (JSX), react-youtube."
              description="Utilized 'api.themoviedb.org' to Fetch details and high quality images of the movies via Axios, Used 'react-youtube' to embed youtube video and to optimize loading time in the react app."
              link="https://bit.ly/3ezvVoP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={balls}
              isBlog={false}
              title="Music Balls - Fun Animated Music Keyboard"
              stack="Front-End"
              used="HTML/CSS, Vanilla JS, Howler JS."
              description="Developed frontend logic to generate random animated circles with randomized color. Used Howler JS as an audio library to produce sounds on keypress."
              link="https://bit.ly/3rNmfLp"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={states}
              link="https://medium.com/fnplus/react-props-and-states-a654d5c62bae"
              title="React Props and States"
              site="Medium.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={npm}
              link="https://medium.com/fnplus/make-your-own-npm-package-and-publish-it-b3e6fb4bb3b5"
              title="Plant AIMake your own NPM package and publish it."
              site="Medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
