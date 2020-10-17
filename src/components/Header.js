import React from "react";
import styled, { css } from "styled-components";
import { Menu } from "antd";

function Header(props) {
  return (
    <HeaderContainer HeaderPosition={props.HeaderPosition}>
      <div style={{ width: "80%", height: "100%", margin: "0 auto" }}>
        <Menu
          selectedKeys={props.ScrollPosition}
          mode="horizontal"
          theme={props.HeaderPosition ? "light" : "dark"}
        >
          <Menu.Item key="home" onClick={() => props.onClickMenu("Home")}>
            Home
          </Menu.Item>
          <Menu.Item
            key="aboutMe"
            onClick={() => props.onClickMenu("About Me")}
          >
            About Me
          </Menu.Item>
          <Menu.Item key="skills" onClick={() => props.onClickMenu("Skills")}>
            Skills
          </Menu.Item>
          <Menu.Item
            key="projects"
            onClick={() => props.onClickMenu("Projects")}
          >
            Projects
          </Menu.Item>
        </Menu>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 0px;
  z-index: 1;
  background-color: rgb(0, 21, 41);
  transition: background-color 200ms;
  ${(props) =>
    props.HeaderPosition
      ? css`
          position: fixed;
          top: 0;
          background-color: #ffffff;
        `
      : css`
          position: absolute;
          bottom: 0;
          background-color: rgb(0, 21, 41);
        `}
`;

export default Header;
