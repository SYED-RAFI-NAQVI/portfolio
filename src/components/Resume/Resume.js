import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/resume.pdf";

function Resume() {
  const uri = "https://www.codewars.com/api/v1/users/SYED-RAFI-NAQVI";
  const [codeWarsRank, upadteCodeWarsRank] = useState(0);
  const [codeWarsSolved, upadteCodeWarsSolved] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteCodeWarsRank(res.data.leaderboardPosition);
        upadteCodeWarsSolved(res.data.codeChallenges.totalCompleted);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Futurize Digital-Full Stack Developer"
              date="November 2020 - April 2021"
              content={[
                "Developed a Government web app using Node, React, HTML/CSS (JSX). Handled data and managedstate via Graph QL APIs.",
                "Designed and Developed the backend logic for a game with Games Sparks cloud based gaming service.Created 40 APIs to Integrate with Frontend (Unity).",
                "Handled two major client projects at the same time.",
                "Used: JavaScript (ES6), React, Bootstrap, Graph QL, Vanilla JavaScript",
              ]}
              Prodjars-Junior
              Backend
              Developer
            />
            <Resumecontent
              title="Prodjars-Junior Backend Developer"
              date="June 2020 - July 2020"
              content={[
                "Designed the new database schemas for the product Busy-hubs and closely integrated with existingAPIs. Used Express JS to create new APIs and Integrated with DB.",
                "Explored and used Sequelize ORM to take advantage of PSQL with Node JS. Explored Express JSmiddleware's like CORS, Body-Parser.",
                "Used: Node, Express JS, Sequelize ORM, PSQL.",
              ]}
            />
            <Resumecontent
              title="Reblebase-Junior Frontend Developer"
              date="July 2018 - August 2018"
              content={[
                "Built the logic for the user interactive forms and validated with React-forms, used Axios to handleoperations on data from backend. (get, post, delete)",
                "Built Store with Redux to manage state in the React Web app, Explored functional programming toexploit Redux for State Management.",
                "Used: React JS, HTML/CSS, Redux.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="MGR UNIVERSITY"
              date="2017 - 2021"
              content={["BTECH, Computer Science", `CGPA: 7.8`]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Google Developers Group (Chennai) "
              content={[
                "Worked as student organizer to organize the events",
                "Organized 5 - 10 Tech events about many Technologies like Flutter, Firebase, Devfest, local Google I/O",
              ]}
            />
            <Resumecontent
              title="FN Plus Community"
              content={[
                "Worked as an Evangelist of the community to grow and organize the community",
              ]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in CodeWars - ${codeWarsRank}`,
                `Solved - ${codeWarsSolved}`,
              ]}
            />
            <img
              src="https://www.codewars.com/users/SYED-RAFI-NAQVI/badges/large"
              alt="Code-Wars-Rank"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
