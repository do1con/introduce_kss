import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Motion, spring } from 'react-motion';
import me from "../media/me.png";
import { Row, Col } from "antd";
import { MailTwoTone, PhoneTwoTone, DatabaseTwoTone, IdcardTwoTone, RightOutlined, MinusOutlined } from '@ant-design/icons';

function AboutMe(props) {
  
  const [ComponentLoadedState, setComponentLoadedState] = useState(false);

  useEffect(() => {
    if(props.ScrollPosition === "aboutMe") setComponentLoadedState(true);
  }, [props.ScrollPosition]);

  return (
    <AboutMeWrapper>
       <Motion
       style={{ marginLeft: spring(ComponentLoadedState ? 0 : -2000), color: spring(ComponentLoadedState ? 1 : 0) }}>
       {(val) =>
          <AboutMeTitle 
          style={{
            color: `rgba(0, 0, 0, ${val.color})`,
            marginLeft: `${val.marginLeft}px`
          }}>
            About Me
          </AboutMeTitle>
        }
      </Motion>
      <hr/>
      <Row style={{ marginTop: "50px" }} justify="center">
        <Col xs={2} sm={4} md={24} lg={4} xl={6}>
          <div style={{ width: '100%', height: '100%' }}>
            <MyPicture src={me} alt="me" />
            <Profile>
              <p style={{ wordBreak: 'keep-all' }}><ProfileHead>김성수 </ProfileHead> SeongSoo Kim<br/>Web Front-End Developer</p>
              <hr/>
              <p style={{ wordBreak: 'break-all' }}><MailTwoTone /> kss7547@gmail.com</p>
              <p style={{ wordBreak: 'break-all' }}><PhoneTwoTone /> 010-9902-4851</p>
              <p style={{ wordBreak: 'break-all' }}><DatabaseTwoTone /> https://github.com/do1con</p>
            </Profile>
          </div>
        </Col>
        <Col xs={2} sm={4} md={24} lg={12} xl={12}>
          <div style={{ marginLeft: '20px' }}>
            <ol>
              <li>
                <RightOutlined style={{ fontSize: "1.2rem", color: "rgb(51,157,255)" }} /> <span style={{ fontSize: "1.2rem" }}>한국폴리텍2대학 (인천캠퍼스)</span>
                <ol>
                  <li style={{ marginLeft: "25px" }}>
                    2015.03 ~ 2017.02
                  </li>
                  <li style={{ marginLeft: "25px" }}>
                    컴퓨터정보과 졸업
                  </li>
                  <li style={{ marginLeft: "25px" }}>
                    졸업작품 : avr 기반 블루투스로 통신하여 조종하는 RC카와 조종 어플
                  </li>
                  <li style={{ marginLeft: "25px" }}>
                    학점 4.13 / 4.5
                  </li>
                </ol>
              </li>
            </ol>
            <ol>
              <li>
                <RightOutlined style={{ fontSize: "1.2rem", color: "rgb(51,157,255)" }} /> <span style={{ fontSize: "1.2rem" }}>한국아이티인재개발원</span>
                <ol>
                  <li style={{ marginLeft: "25px" }}>
                    2019.05 ~ 2019.11
                  </li>
                  <li style={{ marginLeft: "25px" }}>
                    멀티디바이스 웹 콘텐츠 개발자 과정 수료
                  </li>
                </ol>
              </li>
            </ol>
            <ol>
              <li>
                <RightOutlined style={{ fontSize: "1.2rem", color: "rgb(51,157,255)" }} /> <span style={{ fontSize: "1.2rem" }}>차세대융합콘텐츠산업협회</span>
                <ol>
                  <li style={{ marginLeft: "25px" }}>
                    2020.02.17 ~ 2020.02.19
                  </li>
                  <li style={{ marginLeft: "25px" }}>
                    파이썬을 활용한 딥러닝 입문 과정 수료
                  </li>
                </ol>
              </li>
            </ol>
            <ol>
              <li>
                <RightOutlined style={{ fontSize: "1.2rem", color: "rgb(51,157,255)" }} /> <span style={{ fontSize: "1.2rem" }}>AWS Builders Korea</span>
                <ol>
                  <li style={{ marginLeft: "25px" }}>
                    AWS Builders Level 100 (Rookie)
                  </li>
                </ol>
              </li>
            </ol>
          </div>
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

const AboutMeTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 100;
  margin-top: 25px;
`;

const MyPicture = styled.img`
  height: 150px;
  margin: 0 auto;
  border-radius: 50% 50% / 50% 50%;
`;

const Profile = styled.p`
  margin-top: 15px;
`;

const ProfileHead = styled.span`
  font-family: Do Hyeon, sans-serif;
  font-size: 1.4rem;
  color: #1b242f;
`;

export default AboutMe
