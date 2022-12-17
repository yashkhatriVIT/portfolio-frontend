import React from 'react'
import { Col } from 'react-bootstrap'
import './Projects.css'

function ProjectCards({title, desc, url, link}) {
  return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            
            <img src={url} alt="i1" />
            <a href={link} style={{color:'white'}}>
              <div className="proj-txtx">
                  <h4>{title}</h4>
                  <span>{desc}</span>
              </div>
            </a>
        </div>
    </Col>
  )
}

export default ProjectCards