import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import recipe from "../../Assets/Projects/recipe.png";
import inotebook from "../../Assets/Projects/inotebook.png";
import sorting from "../../Assets/Projects/sorting.png";
import contacts from "../../Assets/Projects/contacts.png";

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
              imgPath={inotebook}
              isBlog={false}
              title="iNotebook"
              description="iNotebook is a note management app built with the MERN stack. It features secure user authentication, note creation with title, description, and tags, and supports editing, deleting, and React Routing for seamless navigation. Users can manage their notes efficiently in a personalized workspace."
              ghLink="https://github.com/MohammedRizwan4/inotebook-frontend"
              demoLink="https://productive-notes.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Sorting Visualizer"
              description="Sorting Visualizer is an interactive app that lets users select a sorting algorithm, set the range of array elements, and adjust the transition speed. The app visualizes the sorting process with vibrant colors, highlighting swaps, sorted elements, and the current operation in real-time."
              ghLink="https://github.com/MohammedRizwan4/sorting-visualizer"
              demoLink="https://sorting-animation-app.vercel.app"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe Finder"
              description='Recipe Finder is a React.js web app that allows users to search for recipes using any keyword, such as "milk" or "cake." The app finds recipes where the keyword matches an ingredient and displays the relevant recipes along with a detailed list of ingredients.'
              ghLink="https://github.com/MohammedRizwan4/recipe-finder"
              demoLink="https://find-reciepe.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contacts}
              isBlog={false}
              title="Contacts Manager"
              description="Contact Manager is a React.js web app that allows users to create new contacts with a name and email. Contacts are stored in local storage, enabling easy management, ensuring persistence and easy retrieval, including the ability to delete contacts."
              ghLink="https://github.com/MohammedRizwan4/code-with-harry-ContactApp"
              demoLink="https://first-contacts-list.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
