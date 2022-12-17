import React from 'react'
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import './Skills.css'
function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>My Arsenal</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src="/images/meter1.svg" alt="" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src="/images/meter3.svg" alt="" />
                                <h5>Cpp</h5>
                            </div>
                            <div className="item">
                                <img src="/images/meter2.svg" alt="" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src="/images/meter3.svg" alt="" /> 
                                <h5>Data Structures</h5>
                            </div>
                            <div className="item">
                                <img src="/images/meter3.svg" alt="" /> 
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src="/images/meter2.svg" alt="" /> 
                                <h5>Springboot</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img src="/images/color-sharp.png" alt="" className="background-image-left"/>
        </section>
    );
}

export default Skills