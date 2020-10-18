import React from "react";
import styled, { css } from "styled-components";
import { Motion, spring } from "react-motion";
import { RightOutlined } from "@ant-design/icons";
import { isIE } from "react-device-detect";

function Career(props) {
  return (
    <div>
      {isIE ? (
        <CareerWrapper
          BrowserWidth={props.BrowserWidth}
          style={{ marginTop: `0px` }}
        >
          <ol>
            <li>
              <RightOutlined
                style={{ fontSize: "1.2rem", color: "rgb(51,157,255)" }}
              />{" "}
              <span style={{ fontSize: "1.2rem" }}>
                한국폴리텍2대학 (인천캠퍼스)
              </span>
              <ol>
                <li style={{ marginLeft: "25px" }}>2015.03 ~ 2017.02</li>
                <li style={{ marginLeft: "25px" }}>컴퓨터정보과 졸업</li>
                <li style={{ marginLeft: "25px" }}>
                  졸업작품 : avr 기반 블루투스로 통신하여 조종하는 RC카와 조종
                  어플
                </li>
                <li style={{ marginLeft: "25px" }}>학점 4.13 / 4.5</li>
              </ol>
            </li>
          </ol>
          <ol>
            <li>
              <RightOutlined
                style={{ fontSize: "1.2rem", color: "rgb(51,157,255)" }}
              />{" "}
              <span style={{ fontSize: "1.2rem" }}>한국아이티인재개발원</span>
              <ol>
                <li style={{ marginLeft: "25px" }}>2019.05 ~ 2019.11</li>
                <li style={{ marginLeft: "25px" }}>
                  멀티디바이스 웹 콘텐츠 개발자 과정 수료
                </li>
              </ol>
            </li>
          </ol>
          <ol>
            <li>
              <RightOutlined
                style={{ fontSize: "1.2rem", color: "rgb(51,157,255)" }}
              />{" "}
              <span style={{ fontSize: "1.2rem" }}>
                차세대융합콘텐츠산업협회
              </span>
              <ol>
                <li style={{ marginLeft: "25px" }}>2020.02.17 ~ 2020.02.19</li>
                <li style={{ marginLeft: "25px" }}>
                  파이썬을 활용한 딥러닝 입문 과정 수료
                </li>
              </ol>
            </li>
          </ol>
          <ol>
            <li>
              <RightOutlined
                style={{ fontSize: "1.2rem", color: "rgb(51,157,255)" }}
              />{" "}
              <span style={{ fontSize: "1.2rem" }}>AWS Builders Korea</span>
              <ol>
                <li style={{ marginLeft: "25px" }}>
                  AWS Builders Level 100 (Rookie)
                </li>
              </ol>
            </li>
          </ol>
        </CareerWrapper>
      ) : (
        <Motion
          style={{
            marginTop: spring(props.ComponentLoadedState ? 0 : -100, {
              stiffness: 70,
            }),
            opacity: spring(props.ComponentLoadedState ? 1 : 0, {
              stiffness: 70,
            }),
          }}
        >
          {(val) => (
            <CareerWrapper
              BrowserWidth={props.BrowserWidth}
              style={{
                marginTop: `${val.marginTop}px`,
                opacity: `${val.opacity}`,
              }}
            >
              <ol>
                <li>
                  <RightOutlined
                    style={{ fontSize: "1.2rem", color: "rgb(51,157,255)" }}
                  />{" "}
                  <span style={{ fontSize: "1.2rem" }}>
                    한국폴리텍2대학 (인천캠퍼스)
                  </span>
                  <ol>
                    <li style={{ marginLeft: "25px" }}>2015.03 ~ 2017.02</li>
                    <li style={{ marginLeft: "25px" }}>컴퓨터정보과 졸업</li>
                    <li style={{ marginLeft: "25px" }}>
                      졸업작품 : avr 기반 블루투스로 통신하여 조종하는 RC카와
                      조종 어플
                    </li>
                    <li style={{ marginLeft: "25px" }}>학점 4.13 / 4.5</li>
                  </ol>
                </li>
              </ol>
              <ol>
                <li>
                  <RightOutlined
                    style={{ fontSize: "1.2rem", color: "rgb(51,157,255)" }}
                  />{" "}
                  <span style={{ fontSize: "1.2rem" }}>
                    한국아이티인재개발원
                  </span>
                  <ol>
                    <li style={{ marginLeft: "25px" }}>2019.05 ~ 2019.11</li>
                    <li style={{ marginLeft: "25px" }}>
                      멀티디바이스 웹 콘텐츠 개발자 과정 수료
                    </li>
                  </ol>
                </li>
              </ol>
              <ol>
                <li>
                  <RightOutlined
                    style={{ fontSize: "1.2rem", color: "rgb(51,157,255)" }}
                  />{" "}
                  <span style={{ fontSize: "1.2rem" }}>
                    차세대융합콘텐츠산업협회
                  </span>
                  <ol>
                    <li style={{ marginLeft: "25px" }}>
                      2020.02.17 ~ 2020.02.19
                    </li>
                    <li style={{ marginLeft: "25px" }}>
                      파이썬을 활용한 딥러닝 입문 과정 수료
                    </li>
                  </ol>
                </li>
              </ol>
              <ol>
                <li>
                  <RightOutlined
                    style={{ fontSize: "1.2rem", color: "rgb(51,157,255)" }}
                  />{" "}
                  <span style={{ fontSize: "1.2rem" }}>AWS Builders Korea</span>
                  <ol>
                    <li style={{ marginLeft: "25px" }}>
                      AWS Builders Level 100 (Rookie)
                    </li>
                  </ol>
                </li>
              </ol>
            </CareerWrapper>
          )}
        </Motion>
      )}
    </div>
  );
}

const CareerWrapper = styled.div`
  ${(props) =>
    props.BrowserWidth >= 992
      ? css`
          margin-left: 20px;
          margin-top: 0px;
        `
      : css`
          margin-top: 20px;
          margin-left: 0px;
        `}
  margin-left: 20px;
`;

export default Career;
