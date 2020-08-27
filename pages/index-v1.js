import { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Link from 'next/link';
import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
import Avatar from 'antd/lib/avatar';
import Carousel from 'antd/lib/carousel';
import Timeline from 'antd/lib/timeline';

import BaseLayout from '../components/LayoutHOC';

class Index extends Component{
   constructor(props){
      super(props);


   }

   
   render() {
      return (
         <Row gutter={8} style={{
            height: '100vh',
            margin: 0,
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'stretch',
            justifyContent: 'center',
         }}>
            <Col sm={{span: 1}} md={{span: 2}} lg={{span: 3}} ></Col>
            <Col sm={{span: 22}} md={{span: 20}} lg={{span: 18}} style={{
            
            }}>
               <Row style={{
                  margin: 0,
                  padding: 0,
               }}>
                  <Col span={24} style={{
                     backgroundColor: '#001529',
                     padding: 30,
                     marginBottom: 20
                  }}>
                     <h3>I'M MIRACLE FRIDAY</h3>
                     <h1>Web Developer</h1>
                     <Link href="/babes" passHref><Button type="primary" size="large">Contact Me</Button></Link>
                  </Col>
                  <Col span={24} style={{
                     backgroundColor: '#001529',
                     padding: 30,
                     marginBottom: 20
                  }}>
                     <Row gutter={8} style={{margin: 0, padding: 0}}>
                        <Col sm={{span: 24}} lg={{span: 12}} style={{ padding: '0 30px 0 0', width: '100%' }}>
                           <div className="svg-icon"></div>
                        </Col>
                        <Col sm={{span: 24}} lg={{span: 12}} style={{
                           display: 'flex',
                           flexFlow: 'column',
                           alignItems: 'flex-start',
                           justifyContent: 'flex-start',
                           paddingTop: '20px'
                        }}>
                           <h4 className="sec-tittle">About Me</h4>
                           <h2>I am a Full Stack Web Developer</h2>
                           <p>Lorem ipsum dolor sit amet text in here Lorem ipsum dolor sit amet text in here Lorem ipsum dolor sit amet text in here Lorem ipsum dolor sit amet text in here Lorem ipsum dolor sit amet text in here</p>
                           <Button type="primary" size="large">My Blog</Button>
                        </Col>
                     </Row>
                  </Col>
                  <Col span={24} style={{
                     backgroundColor: '#001529',
                     padding: 30,
                     marginBottom: 20
                  }}>
                     <Row gutter={8} style={{margin: 0, padding: 0}}>
                        <Col sm={{span: 24}} lg={{span: 12}}>
                           <h4 className="sec-tittle" style={{fontWeight: 'lighter'}}>MY EXPERIENCE:</h4>
                           <h2 className="exp-text">More than 5 years<br/> experience as a<br/> <em>Developer</em></h2>
                        </Col>
                        <Col sm={{span: 24}} lg={{span: 12}} style={{
                           display: 'flex',
                           flexFlow: 'column',
                           alignItems: 'center',
                           justifyContent: 'flex-start'
                        }}>
                           <h4 className="sec-tittle" style={{fontWeight: 'lighter', marginBottom: 20 }}>MY TIMELINE:</h4>
                           <Timeline mode="left" style={{
                              color: 'white',
                              fontWeight: 'lighter',
                              fontSize: '2em'
                           }}>
                              <Timeline.Item label="28-03-2015">Learnt HTML, CSS, Javascript</Timeline.Item>
                              <Timeline.Item label="08-07-2015">Got started in backend development with PHP</Timeline.Item>
                              <Timeline.Item label="14-11-2016">Came around to learning wordpress, and Adobe WebKit</Timeline.Item>
                              <Timeline.Item label="19-08-2017">Built a couple wordpress websites while solidifying my PHP knowledge</Timeline.Item>
                              <Timeline.Item label="21-05-2018">Got into graphic design more specifically UI/UX design, designing websites and apps</Timeline.Item>
                           </Timeline>
                        </Col>
                     </Row>
                  </Col>
                  <Col span={24} style={{
                     backgroundColor: '#001529',
                     padding: 30,
                     marginBottom: 20
                  }}>
                     <Row gutter={16}>
                        <Col span={24}>
                           <h4 className="sec-tittle" style={{textAlign: 'center'}}>My Portfolio</h4>
                           {/* A list of tags categorising the webapps in portfolio */}
                        </Col>
                        <Col sm={{span: 24}} lg={{span: 8}} style={{
                           width: '100%'
                        }}>
                           <Card style={{backgroundColor: '#dea450', height: 320}}></Card>
                        </Col>
                        <Col sm={{span: 24}} lg={{span: 8}} style={{
                           width: '100%'
                        }}>
                           <Card style={{backgroundColor: '#dea450', height: 320}}></Card>
                        </Col>
                        <Col sm={{span: 24}} lg={{span: 8}} style={{
                           width: '100%'
                        }}>
                           <Card style={{backgroundColor: '#dea450', height: 320}}></Card>
                        </Col>
                     </Row>
                  </Col>
               </Row>
            </Col>
            <Col sm={{span: 1}} md={{span: 2}} lg={{span: 3}}></Col>
         <style jsx>{`
            h1 {
               font-size: 4.5em;
               font-weight: bolder;
               background: -webkit-linear-gradient(left, #9b461f, #dea450);
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
               font-family: Segoe, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
               margin: 0 0 24px 0;
            }

            h3 {
               font-size: 24px;
               color: white;
               font-weight: light;
               font-family: sans-serif;
               margin: 0;
               padding: 0;
            }

            h2 {
               color: white;
               font-weight: bold;
               font-size: 2.2em;
            }

            h4.sec-tittle {
               background: -webkit-linear-gradient(left, #dea450, yellow);
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
               font-family: Segoe, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

               font-size: 1.2em;
               font-weight: bold;
            }
            p{
               font-size: 1.2em;
               font-weight: lighter;
               line-height: 1.2em;
            }

            div.svg-icon {
               height: 310px;
               width: 100%;
               padding: 20px;
               background-color: #dea450;
            }

            em {
               font-weight: bolder;
               color: #dea450;
               font-size: 2.1em;
            }

            h2.exp-text {
               font-size: 2.2em;
               margin-top: 30px;
            }
         `}</style>
         </Row>
      )
   }
}

export default BaseLayout(Index);

