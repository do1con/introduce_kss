import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { Title } from './AboutMe';
import { Divider, Carousel } from 'antd';

function Projects(props) {

  const [ComponentLoadedState, setComponentLoadedState] = useState(false);

  useEffect(() => {
    if(props.ScrollPosition === "projects") setComponentLoadedState(true);
  }, [props.ScrollPosition]);

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div>
      <ProjectsWrapper>
         <Motion
         style={{ marginLeft: spring(ComponentLoadedState ? 0 : -2000, { stiffness: 100 } ), color: spring(ComponentLoadedState ? 1 : 0, { stiffness: 50 }) }}>
         {(val) =>
            <Title 
            style={{
              color: `rgba(0, 0, 0, ${val.color})`,
              marginLeft: `${val.marginLeft}px`
            }}>
              Projects
            </Title>
          }
        </Motion>
        <Divider style={{ backgroundColor: '#ababab' }} />
      </ProjectsWrapper>
      <Carousel>
        <Project>
          <h3 style={contentStyle}>1</h3>
        </Project>
        <Project>
          <h3 style={contentStyle}>2</h3>
        </Project>
        <Project>
          <h3 style={contentStyle}>3</h3>
        </Project>
        <Project>
          <h3 style={contentStyle}>4</h3>
        </Project>
      </Carousel>
    </div>
  )
}

const ProjectsWrapper = styled.div`
  width: 80%;
  padding-top: 50px;
  margin: 0 auto;
`;

const Project = styled.div`
  width: 100%;
  height: 400px;
`;

export default Projects
