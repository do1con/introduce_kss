import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Menu from "./Menu";

function Header(props) {
  return (
    <HeaderContainer HeaderPosition={props.HeaderPosition}>
      <div style={{ width: "80%", height: "100%", margin: "0 auto" }}>
        {props.ResponsiveState ? (
        <MenuWrapper ResponsiveState={props.ResponsiveState}>
          <MenuUnfoldOutlined style={{ color: "white", fontSize: "30px", cursor: "pointer" }} />
        </MenuWrapper>
        ) : (
        <MenuWrapper ResponsiveState={props.ResponsiveState}>
          <Menu title={"Home"} focus={props.ScrollPosition === "home" ? true : false } onClickMenu={props.onClickMenu}/>
          <Menu title={"About Me"} focus={props.ScrollPosition === "aboutMe" ? true : false } onClickMenu={props.onClickMenu} />
          <Menu title={"Projects"} focus={props.ScrollPosition === "projects" ? true : false } onClickMenu={props.onClickMenu} />
          <Menu title={"Contact"} focus={props.ScrollPosition === "contact" ? true : false } onClickMenu={props.onClickMenu} />
        </MenuWrapper>
        )}
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0px;
  border-bottom: 2px solid #04c2c9;
  transition: background-color 400ms;
  ${(props) =>
    props.HeaderPosition
    ? css`
        position: fixed;
        top: 0;
        background-color: #1b242f;
      `
    : css`
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
      `
  }
`;

const MenuWrapper = styled.div`
  width: 100%;
  height: 50px;
  font-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => 
    props.ResponsiveState
    ?
      css`align-items: center;` : css`align-items: right;`
  }
`;

export default Header;
