import React from 'react'
import { Row, Container} from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "Created Portfolio Application",
      desc: "using React",
      url: '/images/me.png',
      link: '#'
    },
    {
      title: "Created a Burger Builder Applicaiton",
      desc: "using React, Reudx and Firebase",
      url: '/images/bug.png',
      link: "https://react-my-burger-28b5a.web.app/"
    },
    {
      title: "All in One Compiler",
      desc: "using React",
      url: '/images/allInOne.png',
      link: "https://nostalgic-lamarr-7bde79.netlify.app/"
    }
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <h2>Projects</h2>
          <p>Journey so far</p>
          <Row>
            {
              projects.map((project, idx) => {
                return (
                    <ProjectCards 
                    key={idx}
                    {...project}
                    />
                )
              })
            }
          </Row>
        </Row>
      </Container>
    </section>
  )
}

export default Projects