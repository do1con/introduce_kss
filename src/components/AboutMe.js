import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Motion, spring } from 'react-motion';
import me from "../media/me.png";
import { Row, Col, Steps } from "antd";
import { MailTwoTone, PhoneTwoTone, DatabaseTwoTone, IdcardTwoTone } from '@ant-design/icons';

function AboutMe(props) {
  
  const [ComponentLoadedState, setComponentLoadedState] = useState(false);
  const { Step } = Steps;

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
      <Row style={{ marginTop: "50px" }}>
        <Col xs={2} sm={4} md={6} lg={8} xl={7}>
          <MyPicture />
          <Profile>
            <p><ProfileHead>김성수 </ProfileHead> SeongSoo Kim<br/>Web Front-End Developer</p>
            <p><MailTwoTone /> kss7547@gmail.com</p>
            <p><PhoneTwoTone /> 010-9902-4851</p>
            <p><DatabaseTwoTone /> https://github.com/do1con</p>
            <p><IdcardTwoTone /> 정보처리산업기사</p>
          </Profile>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={17}>
          <Steps progressDot current={4} direction="vertical">
            <Step title="학업" subTitle="2015.03 ~ 2017.02"  description="한국폴리텍2대학(인천캠퍼스) 컴퓨터정보과 졸업 학점 4.13" />
            <Step title="교육" subTitle="2019.05 ~ 2019.11" description="한국아이티인재개발학원	멀티디바이스 웹 콘텐츠 개발자 과정 수료" />
            <Step title="기타활동" description="국가인적자원개발컨소시엄 파이썬을 활용한 딥러닝 입문 과정" />
            <Step title="기타활동" description="AWS Builders Korea AWS 100 입문 (Rookie 등급)" />
            <Step description="계속해서 정진하고 있습니다. :)" />
          </Steps>
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

const MyPicture = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${me});
  background-size: cover;
  background-position: center, center;
  border-radius: 50% 20% / 10% 40%;
`;

const Profile = styled.p`
  width: 250px;
  margin-top: 15px;
`;

const ProfileHead = styled.span`
  font-family: Do Hyeon, sans-serif;
  font-size: 1.4rem;
  color: #1b242f;
`;

export default AboutMe
