import React from 'react'
import styled, { css } from "styled-components";
import { Motion, spring } from 'react-motion';
import me from "../media/me.png";
import { MailTwoTone, PhoneTwoTone, DatabaseTwoTone } from '@ant-design/icons';

function Profile(props) {
  return (
    <Motion style={{ marginTop: spring(props.ComponentLoadedState ? 0 : -100, { stiffness: 70 } ), opacity : spring(props.ComponentLoadedState ? 1 : 0, { stiffness: 70 } ) }}>
      {(val) =>
        <div style={{ width: '100%', height: '100%', marginTop: `${val.marginTop}px`, opacity: `${val.opacity}` }}>
          <MyPicture src={me} alt="me" BrowserWidth={props.BrowserWidth} />
          <ProfileWrapper>
            <p style={{ wordBreak: 'keep-all' }}><ProfileHead>김성수 </ProfileHead> SeongSoo Kim<br/>Web Front-End Developer</p>
            <hr/>
            <p style={{ wordBreak: 'break-all' }}><MailTwoTone /> kss7547@gmail.com</p>
            <p style={{ wordBreak: 'break-all' }}><PhoneTwoTone /> 010-9902-4851</p>
            <p style={{ wordBreak: 'break-all' }}><DatabaseTwoTone /> https://github.com/do1con</p>
          </ProfileWrapper>
        </div>
      }
    </Motion>
  )
}

const MyPicture = styled.img`
  ${(props) => 
    props.BrowserWidth >= 992
    ?
      css`height: 150px;` : css`height: 200px;`
  }
  margin: 0 auto;
  border-radius: 50% 50% / 50% 50%;
  display: block;
`;

const ProfileWrapper = styled.div`
  margin-top: 15px;
`;

const ProfileHead = styled.span`
  font-family: Do Hyeon, sans-serif;
  font-size: 1.4rem;
  color: #1b242f;
`;

export default Profile
