import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import {Motion, spring, presets} from 'react-motion';

function AboutMe() {
  
  const [ComponentLoadedState, setComponentLoadedState] = useState(false);

  useEffect(() => {
    setComponentLoadedState(true);
    console.log("상태", ComponentLoadedState);
  }, [ComponentLoadedState]);

  return (
    <AboutMeWrapper>
       <Motion
       defaultStyle={{ marginTop: 120 }}
       style={{ marginTop: spring(ComponentLoadedState ? 0 : 1) }}>
       {(val) =>
          <AboutMeTitle 
          style={{
            color: `rgba(0, 0, 0, ${val.color})`,
            marginTop: `${val.marginTop}px`
          }}>
            About Me
          </AboutMeTitle>
        }
      </Motion>
      <hr/>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
      <p>elrghjsaekilrgujaelrkiughjase</p>
    </AboutMeWrapper>
  )
}

const AboutMeWrapper = styled.div`
  width: 80%;
  padding: 100px;
  margin: 0 auto;
`;

const AboutMeTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 100;
  margin-top: 200px;
`;

export default AboutMe
