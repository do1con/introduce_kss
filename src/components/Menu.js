import React from 'react'
import styled, { css } from "styled-components";

function Menu(props) {
  return (
    <MenuContainer Focus={props.focus}>
      {props.title}
    </MenuContainer>
  )
}

const MenuContainer = styled.button`
  display: block;
  width: 23%;
  text-align: center;
  vertical-align: middle;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 30px;
  font-weight: 100;
  transition: color 400ms;
  &:hover {
    color: #04c2c9;
  }
  background: none;
  border: none;
  cursor: pointer;
  ${(props) =>
    props.Focus
    ? css`
      color: #04c2c9;
      `
    : css`
      color: white;
      `
  }
`;

export default Menu
