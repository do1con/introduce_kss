import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { Motion, spring } from "react-motion";
import { Title } from "./AboutMe";
import { Divider, Col, Row, Card, Tag } from "antd";
import MovieDot from "../media/movie-dot.png";
import I_Talented from "../media/i-talented.png";
import { isMobile, isTablet, isIE } from "react-device-detect";

function Projects(props) {
  const [ComponentLoadedState, setComponentLoadedState] = useState(false);
  const [Hover, setHover] = useState("");
  const [ResponsiveState, setResponsiveState] = useState(false);
  const { Meta } = Card;
  const movieDotImage = useRef();
  const iTalentedImage = useRef();

  const MouseOver = (target) => {
    setHover(target);
  };
  const MouseLeave = () => {
    setHover("");
  };

  useEffect(() => {
    if (props.ScrollPosition === "projects") setComponentLoadedState(true);
  }, [props.ScrollPosition]);

  useEffect(() => {
    if (isMobile || isTablet) {
      setResponsiveState(true);
    }
  }, []);

  return (
    <div>
      <ProjectsWrapper>
        {isIE ? (
          <Title
            style={{
              color: `rgba(0, 0, 0)`,
              marginLeft: `0px`,
            }}
          >
            Projects
          </Title>
        ) : (
          <Motion
            style={{
              marginLeft: spring(ComponentLoadedState ? 0 : -2000, {
                stiffness: 100,
              }),
              color: spring(ComponentLoadedState ? 1 : 0, { stiffness: 50 }),
            }}
          >
            {(val) => (
              <Title
                style={{
                  color: `rgba(0, 0, 0, ${val.color})`,
                  marginLeft: `${val.marginLeft}px`,
                }}
              >
                Projects
              </Title>
            )}
          </Motion>
        )}
        <Divider style={{ backgroundColor: "#ababab" }} />
        <Row style={{ marginTop: "50px" }} justify="center" gutter={[16, 16]}>
          <Col>
            <Card
              style={{
                width: "100%",
                fontSize: "0.8rem",
                cursor: "default",
                overflow: "hidden",
              }}
              cover={
                <div
                  style={{
                    width: "100%",
                    height: "250px",
                    overflowY: ResponsiveState ? "scroll" : "hidden",
                    overflowX: "hidden",
                  }}
                >
                  <ProjectImage
                    alt="movie dot"
                    src={MovieDot}
                    onMouseOver={() => MouseOver("movie dot")}
                    onMouseLeave={MouseLeave}
                    ref={movieDotImage}
                    Hovered={Hover}
                    DomSelfRef={movieDotImage}
                    DomKey="movie dot"
                  />
                </div>
              }
            >
              <Meta
                title="Movie Dot"
                description="영화정보를 제공하는 웹 서비스 입니다. 영화 정보는 TMDb에서 제공하는 API를 이용하였습니다. 회원가입, 로그인, 좋아요 정보를 저장하는 기능을 가지고 있습니다."
              />
              <Divider style={{ backgroundColor: "#ababab" }} />
              <Tag color="#2db7f5" style={{ marginTop: "10px" }}>
                Link
              </Tag>
              <Tag color="#f50" style={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/do1con/movie-dot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git Repository
                </a>
              </Tag>
              <Tag style={{ marginTop: "10px" }}>React</Tag>
              <Tag style={{ marginTop: "10px" }}>Express</Tag>
              <Tag style={{ marginTop: "10px" }}>Mongo DB</Tag>
              <Tag style={{ marginTop: "10px" }}>Ant Design</Tag>
              <Tag style={{ marginTop: "10px" }}>반응형</Tag>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "100%",
                fontSize: "0.8rem",
                cursor: "default",
                overflow: "hidden",
              }}
              cover={
                <div
                  style={{
                    width: "100%",
                    height: "250px",
                    overflowY: ResponsiveState ? "scroll" : "hidden",
                    overflowX: "hidden",
                  }}
                >
                  <ProjectImage
                    alt="i talented"
                    src={I_Talented}
                    onMouseOver={() => MouseOver("i talented")}
                    onMouseLeave={MouseLeave}
                    ref={iTalentedImage}
                    Hovered={Hover}
                    DomSelfRef={iTalentedImage}
                    DomKey="i talented"
                  />
                </div>
              }
            >
              <Meta
                title="I TALENTED"
                description="가상의 모델 에이전시의 홈페이지입니다. React나 jQuery등의 라이브러리의 도움 없이, 순수 자바스크립트로 UI를 개발해보고자 진행한 프로젝트입니다. 무료 웹디자인 시안을 카피하였습니다."
              />
              <Divider style={{ backgroundColor: "#ababab" }} />
              <Tag color="#2db7f5" style={{ marginTop: "10px" }}>
                <a
                  href="https://do1con.github.io/I-TALENTED/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </Tag>
              <Tag color="#f50" style={{ marginTop: "10px" }}>
                <a
                  href="https://github.com/do1con/I-TALENTED"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git Repository
                </a>
              </Tag>
              <Tag color="#87d068" style={{ marginTop: "10px" }}>
                <a
                  href="https://freebiesbug.com/psd-freebies/mi-talent/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  웹 디자인 시안
                </a>
              </Tag>
              <Tag style={{ marginTop: "10px" }}>Javascript</Tag>
            </Card>
          </Col>
        </Row>
      </ProjectsWrapper>
    </div>
  );
}

const ProjectsWrapper = styled.div`
  width: 80%;
  padding-top: 50px;
  margin: 0 auto;
`;

const ProjectImage = styled.img`
  width: 100%;
  transition: margin-top 3000ms;
  ${(props) =>
    props.Hovered === props.DomKey
      ? css`
          margin-top: ${-(props.DomSelfRef.current.offsetHeight - 250)}px;
        `
      : css`
          margin-top: 0px;
        `}
`;

export default Projects;
