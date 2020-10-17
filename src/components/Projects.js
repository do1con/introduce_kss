import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { Title } from './AboutMe';
import { Divider, Col, Row, Card, Tag } from 'antd';
import MovieDot from '../media/movie-dot.png';

function Projects(props) {

  const [ComponentLoadedState, setComponentLoadedState] = useState(false);
  const { Meta } = Card;

  useEffect(() => {
    if(props.ScrollPosition === "projects") setComponentLoadedState(true);
  }, [props.ScrollPosition]);

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
        <Row style={{ marginTop: "50px" }} justify="center" gutter={[16, 16]}>
          <Col>
            <Card
              style={{ width: '100%', fontSize: '0.8rem', cursor: 'default' }}
              cover={
              <div style={{ width: "100%", height: "250px", overflow: "hidden" }}>
                <img alt="html5" src={MovieDot} style={{ width: "100%" }} />
              </div>
            }
            >
              <Meta title="Movie Dot" description="영화정보를 제공하는 웹 서비스 입니다. 영화 정보는 TMDb에서 제공하는 API를 이용하였습니다. 회원가입, 로그인, 좋아요 정보를 저장하는 기능을 가지고 있습니다." />
              <Divider style={{ backgroundColor: '#ababab' }} />
              <Tag color="#2db7f5">Link</Tag>
              <Tag color="#f50"><a href="https://github.com/">git</a></Tag>
              <Tag>React</Tag>
              <Tag>Express</Tag>
              <Tag>Mongo DB</Tag>
              <Tag>Ant Design</Tag>
            </Card>
          </Col>
          </Row>
      </ProjectsWrapper>
    </div>
  )
}

const ProjectsWrapper = styled.div`
  width: 80%;
  padding-top: 50px;
  margin: 0 auto;
`;

export default Projects
