import { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';

import { LinkOutlined, LinkedinFilled, LaptopOutlined, CloudOutlined, MobileOutlined, GithubFilled, InstagramOutlined, InstagramFilled, TwitterCircleFilled, ArrowRightOutlined, ArrowLeftOutlined, MailOutlined, } from '@ant-design/icons';

import { motion } from 'framer-motion';

import Link from 'next/link';
// import Router from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import withLayout from '../components/LayoutHOC';

class Index extends Component {
    
	render(){

		// test out new console debug features
		// console.warn('An error might occur here');
		// console.info('This shows an info for your digest');
		// console.assert(2 == 1, 'Nahh bruv that doesn\'t work at all');

		return(
			<>
				<Head>
					<title>Home - mimi.codes</title>
					<meta name="robots" content="index, follow" />
					<meta name="description" content="Portfolio website for Miracle Friday a web/app developer" />
				</Head>
				<Row gutter={[32, 32]} style={{width: '100%', margin: 0, backgroundColor: '#001529', padding: '20px 5% 50px 5%', }}>
					<Col span={24} style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
						<h1 style={{
							margin: 0,
							padding: 0,
							fontSize: "1.8rem",
							textAlign: "center",
							fontWeight: 'bolder',
              color: '#09d3ac',
							//background: `
								//linear-gradient(
									//to right,
									//#9b461f,
									//#dea450
								//)
							//`,
							fontFamily: "monospace",
							//WebkitBackgroundClip: 'text',
							//WebkitTextFillColor: 'transparent',
						}}><ArrowRightOutlined style={{ color: '#1890ff', fontSize: 22 }} /> Skills & Experiences <ArrowLeftOutlined style={{ color: '#1890ff', fontSize: 22 }} /></h1>
					</Col>
					<Col xs={{span: 24}} sm={{span: 24}} lg={{span: 8}} xl={{span: 8}} style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: "auto",
					}}>
						<Card bordered={false} cover={<LaptopOutlined style={{color: 'white', fontSize: 36, padding: '48px 0'}} />} bodyStyle={{paddingTop: 0}} style={{
							width: '100%',
							height: '100%',
							backgroundColor: 'transparent',
							boxShadow: [
								'10px 10px 10px 0 rgba(0,0,0,.35)',
								'-10px -10px 10px 0 rgba(255,255,255,.12)',
							]
						}}>
							<Card.Meta title="Websites" description={
								<>
									<p>
										I am well versed in react.js development with over 3 years of experience building and deplying web apps.<br/>
									</p>
									<ul>
										<li className="exp">SSR - Server Side Rendering</li>
										<li className="exp">Single Page Applications</li>
										<li className="exp">Progressive Web Application</li>
										<li className="exp">SEO web pages</li>
									</ul>
								</>
              } />
						</Card>
					</Col>
					<Col xs={{span: 24}} sm={{span: 24}} lg={{span: 8}} xl={{span: 8}} style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: "auto",
					}}>
						<Card bordered={false} cover={<CloudOutlined style={{color: 'white', fontSize: 36, padding: '48px 0'}} />} bodyStyle={{paddingTop: 0}} style={{
							width: '100%',
							height: '100%',
							backgroundColor: 'transparent',
							boxShadow: [
								'10px 10px 10px 0 rgba(0,0,0,.35)',
								'-10px -10px 10px 0 rgba(255,255,255,.12)',
							]
						}}>
							<Card.Meta title="Server & Databases" description={
								<>
									<p>
										Experienced in writing backend code to handle requests and API calls as well as optimize server for better performance.<br/>
									</p>
									<ul>
										<li className="exp">API design with authentication</li>
										<li className="exp">Database setup and Schema design</li>
										<li className="exp">MongoDB and SQLite Databases</li>
										<li className="exp">Learning micro services (Docker)</li>
									</ul>  
								</>
              } />
						</Card>
					</Col>
					<Col xs={{span: 24}} sm={{span: 24}} lg={{span: 8}} xl={{span: 8}} style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: "auto",
					}}>
						<Card bordered={false} cover={<MobileOutlined style={{color: 'white', fontSize: 36, padding: '48px 0'}} />} bodyStyle={{paddingTop: 0}} style={{
							width: '100%',
							height: '100%',
							backgroundColor: 'transparent',
							boxShadow: [
								'10px 10px 10px 0 rgba(0,0,0,.35)',
								'-10px -10px 10px 0 rgba(255,255,255,.12)',
							]
						}}>
							<Card.Meta title="Mobile Apps" description={
								<>
									<p>
										Building cross platform mobile apps with the Flutter framework as Android and iOS apps can be shipped from one code base.<br/>
									</p>
									<ul>
										<li className="exp">UI/UX Design & Development</li>
										<li className="exp">Beautiful and Performant app</li>
										<li className="exp">Animations and Effects</li>
										<li className="exp">Pro state/data management</li>
									</ul>
								</>
              } />
						</Card>
					</Col>
				</Row>
				<Row gutter={[32, 32]} style={{width: '100%', margin: 0, backgroundColor: '#001529', padding: '5%'}}>
					<Col span={24} style={{textAlign: 'center'}}>
						<h1 style={{
							margin: 0,
							padding: 0,
							fontSize: '1.8rem',
							textAlign: "center",
							fontWeight: 'bolder',
              color: '#09d3ac',
							//background: `
								//linear-gradient(
									//to right,
									//#9b461f,
									//#dea450
								//)
							//`,
							fontFamily: "monospace",
							//WebkitBackgroundClip: 'text',
							//WebkitTextFillColor: 'transparent',
						}}><ArrowRightOutlined style={{ color: '#1890ff', fontSize: 22 }} /> Portfolio <ArrowLeftOutlined style={{ color: '#1890ff', fontSize: 22 }} /></h1>
					</Col>
					<Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 8}} xl={{span: 6}} style={{margin: 0}}>
						<Card style={{
							color: "white",
							backgroundColor: 'transparent',
							boxShadow: [
								'10px 10px 10px 0 rgba(0,0,0,.35)',
								'-10px -10px 10px 0 rgba(255,255,255,.12)',
							],
							border: 0,
						}}
						actions={[<GithubFilled style={{ color: "white" }} onClick={() => window.location.href = "https://github.com/sourceKing/unomeal"} />, <LinkOutlined style={{ color: "white" }} onClick={() => window.location.href = "http://localhost:3000"} />]}
						cover={<img src="/portfolio-img-1.jpg" width="100%" height="100%" loading="lazy" />}>
							<span><b>Unomeal.</b> A webapp platform for food delivery from both independent chefs and restaurants. Vendors can easily upload their menu and have their business online and ready for customers in minutes</span>
						</Card>
					</Col>
					<Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 8}} xl={{span: 6}} style={{margin: 0}}>
						<Card style={{
							color: "white",
							backgroundColor: 'transparent',
							boxShadow: [
								'10px 10px 10px 0 rgba(0,0,0,.35)',
								'-10px -10px 10px 0 rgba(255,255,255,.12)',
							],
							border: 0,
						}}
						actions={[<GithubFilled style={{ color: "white" }} onClick={() => window.location.href = "https://github.com/sourceKing/repo"} />, <LinkOutlined style={{ color: "white" }} onClick={() => window.location.href = "http://localhost:3000"} />]}
						cover={<img src="/hero-img.png" width="100%" height="100%" loading="lazy" />}>
							<span>Lorem ipsum dolor sit amet inlaw calling on all of us at the late night party with all the hoes to comme check ohate he has going on for the time being as nice as can be one at a time</span>
						</Card>
					</Col>
					<Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 8}} xl={{span: 6}} style={{margin: 0}}>
						<Card style={{
							color: "white",
							backgroundColor: 'transparent',
							boxShadow: [
								'10px 10px 10px 0 rgba(0,0,0,.35)',
								'-10px -10px 10px 0 rgba(255,255,255,.12)',
							],
							border: 0,
						}}
						actions={[<GithubFilled style={{ color: "white" }} onClick={() => window.location.href = "https://github.com/sourceKing/repo"} />, <LinkOutlined style={{ color: "white" }} onClick={() => window.location.href = "http://localhost:3000"} />]}
						cover={<img src="/hero-img.png" width="100%" height="100%" loading="lazy" />}>
							<span>Lorem ipsum dolor sit amet inlaw calling on all of us at the late night party with all the hoes to comme check ohate he has going on for the time being as nice as can be one at a time</span>
						</Card>
					</Col>
					<Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 8}} xl={{span: 6}} style={{margin: 0}}>
						<Card style={{
							color: "white",
							backgroundColor: 'transparent',
							boxShadow: [
								'10px 10px 10px 0 rgba(0,0,0,.35)',
								'-10px -10px 10px 0 rgba(255,255,255,.12)',
							],
							border: 0,
						}}
						actions={[<GithubFilled style={{ color: "white" }} onClick={() => window.location.href = "https://github.com/sourceKing/repo"} />, <LinkOutlined style={{ color: "white" }} onClick={() => window.location.href = "http://localhost:3000"} />]}
						cover={<img src="/hero-img.png" width="100%" height="100%" />}>
							<span>Lorem ipsum dolor sit amet inlaw calling on all of us at the late night party with all the hoes to comme check ohate he has going on for the time being as nice as can be one at a time</span>
						</Card>
					</Col>
				</Row>
				<Row gutter={[32, 32]} style={{width: '100%', margin: 0, backgroundColor: 'white'}}>
					<Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}} style={{display: 'flex', flexFlow: "column", alignItems: "center", justifyContent: "center", margin: 0, padding: 50}}>
						<h1 style={{
							margin: 0,
							padding: 0,
							fontSize: '1.8rem',
							textAlign: "left",
							fontWeight: 'bolder',
              color: '#09d3ac',
							//background: `
								//linear-gradient(
									//to right,
									//#9b461f,
									//#dea450
								//)
							//`,
							fontFamily: "monospace",
							//WebkitBackgroundClip: 'text',
							//WebkitTextFillColor: 'transparent',
						}}><ArrowRightOutlined style={{ color: '#1890ff', fontSize: 22 }} /> Hire Me <ArrowLeftOutlined style={{ color: '#1890ff', fontSize: 22 }} /></h1>
						<h2>Have an interesting project?</h2>
						<Button type="link" style={{backgroundColor: "#001529", color: "white"}} size="large" href="mailto:miraclef60@gmail.com"><MailOutlined /> SHOOT AN EMAIL</Button>
					</Col>
					<Col className="cool-bg" xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}} style={{textAlign: 'center', margin: 0, padding: 50, backgroundColor: '#001529'}}>
						<h2 className="socials">Socials</h2>
						<Card style={{background: "transparent", padding: 20, textAlign: 'center' }} bordered={false}>
							<Card.Grid style={{width: "50%", backgroundColor: "transparent", textAlign: 'center'}}>
								<Link passHref href="https://github.com/sourceKing"><a>
								<div style={{padding: 20, borderRadius: 10, background: "radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.9))", display: "inline-block"}}>
                    <GithubFilled style={{fontSize: 49, color: '#001529'}} />
								</div>
                </a></Link>
							</Card.Grid>
							<Card.Grid style={{width: "50%", backgroundColor: "transprent", textAlign: 'center'}}>
								<Link passHref href="https://instagram.com/mimi.codes"><a>
								<div style={{padding: 20, borderRadius: 10, background: "radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.9))", display: "inline-block"}}>
                    <InstagramOutlined style={{ color: '#ffffff', borderRadius: 8, fontSize: 49, background: '#d6249f', background: `radial-gradient(
                      circle at 30% 107%,
                      #fdf497 0%,
                      #fdf497 5%,
                      #fd5949 45%,
                      #d6249f 60%,
                      #285AEB 90%)`  }} />
								</div>
                </a></Link>
							</Card.Grid>
							<Card.Grid style={{width: "50%", backgroundColor: "transprent", textAlign: 'center'}}>
								<div style={{padding: 20, borderRadius: 10, background: "radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.9))", display: "inline-block"}}>
									<Link passHref href="https://linkedin.com/in/miracle-friday-b0587b119"><a>
										<LinkedinFilled style={{fontSize: 49}} />
									</a></Link>
								</div>
							</Card.Grid>
							<Card.Grid style={{width: "50%", backgroundColor: "transprent", textAlign: 'center'}}>
								<div style={{padding: 20, borderRadius: 10, background: "radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.9))", display: "inline-block"}}>
									<Link passHref href="https://twitter.com/mimi_oncode"><a>
                    <TwitterCircleFilled style={{fontSize: 49}} />
                  </a></Link>
								</div>
							</Card.Grid>
						</Card>
					</Col>
				</Row>

				<style global jsx>{`
					.ant-card-meta-title {
						color: #09d3ac;
						text-align: center;
						font-weight: bolder;
						font-size: 1.3rem;
						letter-spacing: 1.2px;
						font-family: monospace, sans-serif;
						//background: linear-gradient(to right, #9b461f, #dea450);
						//-webkit-background-clip: text;
						//-webkit-text-fill-color: transparent;
					}
					.ant-card-meta-description {
						color: white;
						letter-spacing: 1px;
						text-align: left;
					}
					.ant-card-grid {
						box-shadow: none;
					}
					.ant-card-grid:hover {
						box-shadow: none;
					}
					.ant-card-grid div {
						transition: all .3s ease;
					}
					.ant-card-grid div:hover {
						cursor: pointer;
						box-shadow:
							4px 4px 2px 2px rgba(255,255,255,.24),
							-4px -4px 2px 2px rgba(0,0,0,.5);
					}

					.ant-card-actions {
						background: none;
						border-color: #a2a2a2;
					}

					.ant-card-actions li span svg {
						transition: all .3s;
					}

					.ant-card-actions li:hover span svg {
						color: #1890ff;
					}

					h2.socials {
						color: white;
						font-family: monospace, sans-serif;
					}
					.cool-bg {
						background:
              #0049B7;
              //repeating-linear-gradient(45deg, #9b461f 4%, #001529 5%);
					}
          ul {
            list-style-type: none;
            padding: 0 20px;
          }
          li.exp {
            list-style-type: none;
          }
          li.exp:before { content: '>'; color: #09d3ac; margin-left: -20px; margin-right: 10px; }
				`}</style>
			</>
		)
	}
}

export default withLayout(Index);
