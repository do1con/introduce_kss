import React, { useEffect, useState, useRef } from "react";
import mainImage from "./media/mainImage.jpg";
import styled from "styled-components";
import Header from "./components/Header";
import ReactTypingEffect from "react-typing-effect";
import AboutMe from "./components/AboutMe";

function App() {
  const [BrowserHeight, setBrowserHeight] = useState(window.innerHeight);
  const [BrowserWidth, setBrowserWidth] = useState(window.innerWidth);
  const [HeaderPosition, setHeaderPosition] = useState(false);
  const [ResponsiveState, setResponsiveState] = useState(false);
  const [ScrollPosition, setScrollPosition] = useState("home");
  const home = useRef();
  const aboutMe = useRef();
  const projects = useRef();
  const contact = useRef();

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
    if(scrollTarget === "Projects") projects.current.scrollIntoView({ behavior: "smooth" });
    if(scrollTarget === "Contact") contact.current.scrollIntoView({ behavior: "smooth" });
  };

  const onScrollBrowser = () => {
    const aboutMeoffsetTop = aboutMe.current.offsetTop;
    if(BrowserHeight < window.scrollY + 50) {
      setHeaderPosition(true);
    } else {
      setHeaderPosition(false);
    }
    if(window.scrollY >= 0 && window.scrollY <= aboutMeoffsetTop){
      setScrollPosition("home");
    }
    if(window.scrollY >= aboutMeoffsetTop){
      setScrollPosition("aboutMe");
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
              fontSize: "30px",
              color: "white",
              display: "table-cell",
              verticalAlign: "middle",
              textAlign: "center",
              textShadow: "0px 0px 10px #444444",
              padding: "10px 0 10px 0",
              wordBreak: "keep-all",
              fontWeight: "bold",
              overflowY: "hidden",
            }}
            speed={100}
            eraseSpeed={70}
            eraseDelay={650}
          />
        </div>
        <Header HeaderPosition={HeaderPosition} ResponsiveState={ResponsiveState} ScrollPosition={ScrollPosition} onClickMenu={onClickMenu} />
      </MainImageBlock>
      <div ref={aboutMe}>
        <AboutMe />
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
