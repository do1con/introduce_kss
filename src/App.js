import React, { useEffect, useState, useCallback } from "react";
import mainImage from "./media/mainImage.jpg";
import styled from "styled-components";
import Header from "./components/Header";
import ReactTypingEffect from "react-typing-effect";
import AboutMe from "./components/AboutMe";

function App() {
  const [BrowserHeight, setBrowserHeight] = useState(window.innerHeight);
  const [HeaderPosition, setHeaderPosition] = useState(false);


  const onResizeBrowser = () => {
    setBrowserHeight(window.innerHeight);
  };
  const onScrollBrowser = () => {
    if(BrowserHeight < window.scrollY + 100) {
      setHeaderPosition(true);
    } else {
      setHeaderPosition(false);
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
      <MainImageBlock>
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
            eraseSpeed={100}
            eraseDelay={650}
          />
        </div>
        <h1>{BrowserHeight}</h1>{BrowserHeight}
        <Header HeaderPosition={HeaderPosition} />
      </MainImageBlock>
      <AboutMe />
    </div>
  );
}

const MainImageBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${mainImage});
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  margin-top: -100px;
  position: relative;
`;

export default App;
