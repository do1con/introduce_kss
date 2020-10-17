import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { Title } from './AboutMe';
import { Divider, Carousel } from 'antd';
import MovieDot from '../media/movie-dot.png';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

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
      <div style={{ position: 'relative' }}>
        <Carousel>
          <Project>
            <div style={{ 
              backgroundImage: `url(${MovieDot})`,
              width: '100%',
              height: '100%',
              backgroundSize: 'cover'
            }}>
              <h3>hihi</h3>
            </div>
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
        <RightOutlined style={{
          fontSize: '3rem',
          position: 'absolute',
          right: '50px', top: '50%',
          transform: 'translate(-50%,-50%)'
        }} />
        <LeftOutlined style={{
          fontSize: '3rem',
          position: 'absolute',
          left: '50px', top: '50%',
          transform: 'translate(-50%,-50%)'
        }} />
      </div>
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
  background-color: rgba(0,0,0,0.4);
`;

export default Projects
