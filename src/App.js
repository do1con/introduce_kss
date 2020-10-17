import React, { useEffect, useState, useRef } from "react";
import 'antd/dist/antd.css';
import mainImage from "./media/mainImage.jpg";
import styled from "styled-components";
import Header from "./components/Header";
import ReactTypingEffect from "react-typing-effect";
import AboutMe from "./components/AboutMe";
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [BrowserHeight, setBrowserHeight] = useState(window.innerHeight);
  const [BrowserWidth, setBrowserWidth] = useState(window.innerWidth);
  const [HeaderPosition, setHeaderPosition] = useState(false);
  const [ResponsiveState, setResponsiveState] = useState(false);
  const [ScrollPosition, setScrollPosition] = useState("home");
  const [SkillsAnimateState, setSkillsAnimateState] = useState(false);
  const home = useRef();
  const aboutMe = useRef();
  const skills = useRef();
  const projects = useRef();

  const onResizeBrowser = () => {
    if(window.innerWidth <= 800) {
      setResponsiveState(true);
      setBrowserHeight(window.innerHeight);
      setBrowserWidth(window.innerWidth);
    } else {
      setResponsiveState(false);
      setBrowserHeight(window.innerHeight);
      setBrowserWidth(window.innerWidth);
    }
  };

  const onClickMenu = (scrollTarget) => {
    if(scrollTarget === "Home") home.current.scrollIntoView({ behavior: "smooth" });
    if(scrollTarget === "About Me") aboutMe.current.scrollIntoView({ behavior: "smooth" });
    if(scrollTarget === "Skills") skills.current.scrollIntoView({ behavior: "smooth" });
    if(scrollTarget === "Projects") projects.current.scrollIntoView({ behavior: "smooth" });
  };

  const onScrollBrowser = () => {
    const aboutMeOffsetTop = aboutMe.current.offsetTop;
    const skillsOffsetTop = skills.current.offsetTop;
    const projectsOffsetTop = projects.current.offsetTop;
    if(BrowserHeight < window.scrollY + 50) {
      setHeaderPosition(true);
    } else {
      setHeaderPosition(false);
    }
    if(window.scrollY >= 0 && window.scrollY <= aboutMeOffsetTop - (aboutMeOffsetTop - aboutMeOffsetTop/2)){
      setScrollPosition("home");
    }
    if(window.scrollY >= aboutMeOffsetTop - 100){
      setScrollPosition("aboutMe");
    }
    if(window.scrollY >= skillsOffsetTop - 100) {
      setSkillsAnimateState(true);
      setScrollPosition("skills");
    }
    if(window.scrollY >= projectsOffsetTop - 100) {
      setScrollPosition("projects");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResizeBrowser);
    window.addEventListener("scroll", onScrollBrowser);
    return (() => {
      window.removeEventListener("resize", onResizeBrowser);
      window.removeEventListener("scroll", onScrollBrowser);
    });
  });

  useEffect(() => {
    onResizeBrowser();
    onScrollBrowser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <MainImageBlock ref={home}>
        <div
          style={{
            width: "80%",
            height: "100%",
            margin: "100px auto 0",
            display: "table",
            overflow: "hidden",
          }}
        >
          <ReactTypingEffect
            text={["안녕하세요.", "프론트엔드 개발자를 꿈꾸는 김성수입니다."]}
            style={{
              fontSize: "40px",
              color: "rgb(43 43 43)",
              display: "table-cell",
              verticalAlign: "middle",
              textAlign: "center",
              padding: "10px 0 10px 0",
              wordBreak: "keep-all",
              overflowY: "hidden",
              fontFamily: 'Do Hyeon, sans-serif',
              fontWeight: '100'
            }}
            speed={100}
            eraseSpeed={70}
            eraseDelay={650}
          />
        </div>
        <Header HeaderPosition={HeaderPosition} ResponsiveState={ResponsiveState} ScrollPosition={ScrollPosition} onClickMenu={onClickMenu} />
      </MainImageBlock>
      <div ref={aboutMe}>
        <AboutMe ScrollPosition={ScrollPosition} BrowserWidth={BrowserWidth} />
      </div>
      <div ref={skills}>
        <Skills ScrollPosition={ScrollPosition} SkillsAnimateState={SkillsAnimateState} />
      </div>
      <div ref={projects}>
        <Projects ScrollPosition={ScrollPosition} BrowserWidth={BrowserWidth} />
      </div>
    </div>
  );
}

const MainImageBlock = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${mainImage});
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  margin-top: -100px;
  position: relative;
`;

export default App;
