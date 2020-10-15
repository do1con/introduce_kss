import React from 'react'
import { Col, Row, Card, Progress, Divider } from 'antd';
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

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Title>
        Skills
      </Title>
      <Divider style={{ backgroundColor: '#ababab' }} />
      <Motion style={{ 
        htmlPercentage: spring(props.SkillsAnimateState ? 90 : 0, { stiffness: 70, demping: 0 } ),
        cssPercentage: spring(props.SkillsAnimateState ? 90 : 0, { stiffness: 70, demping: 0 } ),
        javascriptPercentage: spring(props.SkillsAnimateState ? 70 : 0, { stiffness: 70, demping: 0 } ),
        es6Percentage: spring(props.SkillsAnimateState ? 70 : 0, { stiffness: 70, demping: 0 } ),
        jqueryPercentage: spring(props.SkillsAnimateState ? 90 : 0, { stiffness: 70, demping: 0 } ),
        reactPercentage: spring(props.SkillsAnimateState ? 80 : 0, { stiffness: 70, demping: 0 } ),
        reduxPercentage: spring(props.SkillsAnimateState ? 80 : 0, { stiffness: 70, demping: 0 } ),
        expressPercentage: spring(props.SkillsAnimateState ? 60 : 0, { stiffness: 70, demping: 0 } ),
        }}>
        {(val) =>
          <Row style={{ marginTop: "50px" }} justify="center" gutter={[16, 16]}>
            <Col>
              <Card
                style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
                cover={<img alt="html5" src={html5} style={{ width: '118px', display: 'block', margin: '17px auto 14px' }} />}
              >
                <Meta title="HTML5" />
                <Divider style={{ backgroundColor: '#ababab' }} />
                <Progress
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                  percent={Math.round(val.htmlPercentage)}
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
                cover={<img alt="css3" src={css3} />}
              >
                <Meta title="CSS3" />
                <Divider style={{ backgroundColor: '#ababab' }} />
                <Progress
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                  percent={Math.round(val.cssPercentage)}
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
                cover={<img alt="javascript" src={javascript} style={{ width: '118px', display: 'block', margin: '17px auto 14px' }} />}
              >
                <Meta title="JavaScript" />
                <Divider style={{ backgroundColor: '#ababab' }} />
                <Progress
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                  percent={Math.round(val.javascriptPercentage)}
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
                cover={<img alt="es6" src={es6} />}
              >
                <Meta title="ES6+" />
                <Divider style={{ backgroundColor: '#ababab' }} />
                <Progress
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                  percent={Math.round(val.es6Percentage)}
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
                cover={<img alt="jquery" src={jquery} style={{ width: '118px', display: 'block', margin: '17px auto 14px' }} />}
              >
                <Meta title="jQuery" />
                <Divider style={{ backgroundColor: '#ababab' }} />
                <Progress
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                  percent={Math.round(val.jqueryPercentage)}
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
                cover={<img alt="react" src={react} />}
              >
                <Meta title="React" />
                <Divider style={{ backgroundColor: '#ababab' }} />
                <Progress
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                  percent={Math.round(val.reactPercentage)}
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
                cover={<img alt="redux" src={redux} style={{ width: '118px', display: 'block', margin: '17px auto 14px' }} />}
              >
                <Meta title="Redux" />
                <Divider style={{ backgroundColor: '#ababab' }} />
                <Progress
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                  percent={Math.round(val.reduxPercentage)}
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: 150, fontSize: '0.8rem', cursor: 'default' }}
                cover={<img alt="express" src={express} style={{ width: '140px', margin: '40px auto 23px' }} />}
              >
                <Meta title="Express"/>
                <Divider style={{ backgroundColor: '#ababab' }} />
                <Progress
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                  percent={Math.round(val.expressPercentage)}
                />
              </Card>
            </Col>
          </Row>
        }
      </Motion>
    </div>
  )
}

export default Skills
