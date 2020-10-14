import React from 'react'
import { Col, Row, Card, Progress, Popover } from 'antd';
import { Motion, spring } from 'react-motion';
import { Title } from './AboutMe';
import html5 from '../media/html5.png';
import css3 from '../media/css3.png';
import javascript from '../media/javascript.png';
import es6 from '../media/es6.png';
import jquery from '../media/jquery.png';
import react from '../media/react.png';
import redux from '../media/redux.png';
import express from '../media/express.png';
import styled from 'styled-components';

function Skills(props) {
  const { Meta } = Card;
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  return (
    <div>
      <Title>
        Skills
      </Title>
      <hr style={{ width: '50%' }} />
      <Row style={{ marginTop: "50px" }} justify="center" gutter={[16, 16]}>
        <Col>
          <Card
            style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
            cover={<img alt="html5" src={html5} />}
          >
            <Meta title="HTML5" />
            <hr/>
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}W
              percent={90}
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
            cover={<img alt="css3" src={css3} />}
          >
            <Meta title="CSS3" />
            <hr/>
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={90}
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
            cover={<img alt="javascript" src={javascript} />}
          >
            <Meta title="JavaScript" />
            <hr/>
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={90}
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
            cover={<img alt="es6" src={es6} />}
          >
            <Meta title="ES6+" />
            <hr/>
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={90}
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
            cover={<img alt="jquery" src={jquery} />}
          >
            <Meta title="jQuery" />
            <hr/>
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={90}
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
            cover={<img alt="react" src={react} />}
          >
            <Meta title="React" />
            <hr/>
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={90}
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
            cover={<img alt="redux" src={redux} />}
          >
            <Meta title="Redux" />
            <hr/>
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={90}
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
            cover={<img alt="express" src={express} />}
          >
            <Meta title="Express"/>
            <hr/>
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={90}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Skills
