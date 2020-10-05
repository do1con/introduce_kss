import React, { useState } from "react";
import styled, { css } from "styled-components";

function Header(props) {
  return (
    <HeaderContainer HeaderPosition={props.HeaderPosition}>
      <div style={{ width: "80%", height: "100%", margin: "0 auto" }}>
        <MenuWrapper>
          <Menu>Home</Menu>
        </MenuWrapper>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
width: 100vw;
height: 100px;
background-color: rgba(0, 0, 0, 0.3);
margin-bottom: 0px;
${props => props.HeaderPosition ? css`
position: fixed;
top: 0;` : css`
  position: absolute;
  bottom: 0;` 
  };
`;

const MenuWrapper = styled.a`
width: 200px;
height: 100px;
font-color: white;
cursor: pointer;
display: table;
`;

const Menu = styled.h2`
display: table-cell;
text-align: center;
vertical-align: middle;
color: white;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
font-size: 30px;
font-weight: 100;
`;


export default Header;
