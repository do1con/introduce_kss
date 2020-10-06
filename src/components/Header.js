import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Menu from "./Menu";

function Header(props) {
  React.useEffect(() => {
    console.log("리스폰시브 시작", props.ResponsiveState);
  }, [props.ResponsiveState]);

  return (
    <HeaderContainer HeaderPosition={props.HeaderPosition}>
      <div style={{ width: "80%", height: "100%", margin: "0 auto" }}>
        {props.ResponsiveState ? (
          "멍미,"
        ) : (
          <MenuWrapper>
            <Menu title={"Home"} />
            <Menu title={"About Me"} />
            <Menu title={"Projects"} />
            <Menu title={"Contact"} />
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
        `};
`;

const MenuWrapper = styled.div`
  width: 100%;
  height: 50px;
  font-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
