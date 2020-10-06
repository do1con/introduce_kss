import React from 'react'
import styled, { css } from "styled-components";

function Menu(props) {
  return (
    <MenuContainer>
      {props.title}
    </MenuContainer>
  )
}

const MenuContainer = styled.h2`
  display: block;
  width: 25%;
  text-align: center;
  vertical-align: middle;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 30px;
  font-weight: 100;
  transition: color 400ms;
  &:hover {
    color: #04c2c9;
  }
`;

export default Menu
