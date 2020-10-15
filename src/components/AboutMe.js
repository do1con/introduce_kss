import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Motion, spring } from 'react-motion';
import { Row, Col, Divider } from "antd";
import Profile from './Profile'
import Career from './Career'

function AboutMe(props) {
  
  const [ComponentLoadedState, setComponentLoadedState] = useState(false);

  useEffect(() => {
    if(props.ScrollPosition === "aboutMe") setComponentLoadedState(true);
  }, [props.ScrollPosition]);

  return (
    <AboutMeWrapper>
       <Motion
       style={{ marginLeft: spring(ComponentLoadedState ? 0 : -2000, { stiffness: 100 } ), color: spring(ComponentLoadedState ? 1 : 0, { stiffness: 50 }) }}>
       {(val) =>
          <Title 
          style={{
            color: `rgba(0, 0, 0, ${val.color})`,
            marginLeft: `${val.marginLeft}px`
          }}>
            About Me
          </Title>
        }
      </Motion>
      <Divider style={{ backgroundColor: '#ababab' }} />
      <Row style={{ marginTop: "50px" }} justify="center">
        <Col xs={24} sm={24} md={24} lg={5} xl={6}>
          <Profile BrowserWidth={props.BrowserWidth} ComponentLoadedState={ComponentLoadedState} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Career BrowserWidth={props.BrowserWidth} ComponentLoadedState={ComponentLoadedState} />
        </Col>
      </Row>
    </AboutMeWrapper>
  )
}

const AboutMeWrapper = styled.div`
  width: 80%;
  padding-top: 50px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 100;
  margin-top: 25px;
`;

export default AboutMe
