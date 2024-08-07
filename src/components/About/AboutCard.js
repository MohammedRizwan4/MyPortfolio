import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rizwan Bhavnagri </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently pursuing MCA from Gujarat University.
            <br />
            I have completed Bachelor's of Computer Applications at JG College of Computer Applications.
            <br />
            <br />
            A part from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">M. Rizwan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
