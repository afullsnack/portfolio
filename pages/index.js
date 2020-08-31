import { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';

import { LinkOutlined, LinkedinFilled, LaptopOutlined, CloudOutlined, MobileOutlined, GithubFilled, InstagramFilled, TwitterCircleFilled, ArrowRightOutlined, ArrowLeftOutlined, MailOutlined, } from '@ant-design/icons';

import { motion } from 'framer-motion';

import Link from 'next/link';
import Router from 'next/router';
import withLayout from '../components/LayoutHOC';

class Index extends Component {
    
	render(){
		const { addedStyle } = this.props;
		return(
			<>
				<Row gutter={[32, 32]} style={{width: '100%', margin: 0, backgroundColor: '#001529', padding: 50}}>
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
							background: `
								linear-gradient(
									to right,
									#9b461f,
									#dea450
								)
							`,
							fontFamily: "monospace",
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
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
							<Card.Meta title="Web Apps" description="I am well versed in react.js development with over 3 years of experience learning and deplying web apps. My favourite tool to work wth react.js is next.js for server rendering, which significantly reduces web app loading time and displays content to the user very fast." />
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
							<Card.Meta title="Server & Databases" description="The other side of my web development stack is Node.js/Flask and MongoDB/MySQLite for server and databases, depending on what the projects requirements are, I have experience working with Node.js for JavaScript and Flask for python to build robust server functions that can handle user or api endpooint requests optimaly." />
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
							<Card.Meta title="Mobile Apps" description="Yes I also build cross platform mobile apps with Flutter framework, which is useful for things like building and mentaining one source code for both iOS and Android operating systems. Building unique native app user interface and experience with custom animations and design that users find both soothing and satisfying when using the app." />
						</Card>
					</Col>
				</Row>
				<Row gutter={[32, 32]} style={{width: '100%', margin: 0, backgroundColor: '#001529', padding: 50}}>
					<Col span={24} style={{textAlign: 'center'}}>
						<h1 style={{
							margin: 0,
							padding: 0,
							fontSize: '1.8rem',
							textAlign: "center",
							fontWeight: 'bolder',
							background: `
								linear-gradient(
									to right,
									#9b461f,
									#dea450
								)
							`,
							fontFamily: "monospace",
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
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
						actions={[<GithubFilled style={{ color: "white" }} onClick={() => window.location.href = "https://github.com/sourceKing/repo"} />, <LinkOutlined style={{ color: "white" }} onClick={() => window.location.href = "http://localhost:3000"} />]}
						cover={<img src="/hero-img.jpg" width="100%" height="100%" />}>
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
						cover={<img src="/hero-img.jpg" width="100%" height="100%" />}>
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
						cover={<img src="/hero-img.jpg" width="100%" height="100%" />}>
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
						cover={<img src="/hero-img.jpg" width="100%" height="100%" />}>
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
							background: `
								linear-gradient(
									to right,
									#9b461f,
									#dea450
								)
							`,
							fontFamily: "monospace",
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}><ArrowRightOutlined style={{ color: '#1890ff', fontSize: 22 }} /> Contact Me <ArrowLeftOutlined style={{ color: '#1890ff', fontSize: 22 }} /></h1>
						<h2>Want to Hire me?</h2>
						<Button type="link" style={{backgroundColor: "#9b461f", color: "white"}} size="large" href="mailto:miraclef60@gmail.com"><MailOutlined /> SHOOT AN EMAIL</Button>
					</Col>
					<Col className="cool-bg" xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}} style={{textAlign: 'center', margin: 0, padding: 50}}>
						<h2 className="socials">Socials</h2>
						<Card style={{background: "transparent", padding: 20}} bordered={false}>
							<Card.Grid style={{width: "50%", backgroundColor: "transparent", display: "flex", alignItems: "center", justifyContent: "end"}}>
								<div style={{width: 90, height: 90, padding: 10, borderRadius: 10, background: "radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.9))", display: "flex", alignItems: "center", justifyContent: "center"}}>
									<GithubFilled style={{fontSize: 49}} />
								</div>
							</Card.Grid>
							<Card.Grid style={{width: "50%", backgroundColor: "transprent"}}>
								<div style={{width: 90, height: 90, padding: 10, borderRadius: 10, background: "radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.9))", display: "flex", alignItems: "center", justifyContent: "center"}}>
									<InstagramFilled style={{fontSize: 49}} />
								</div>
							</Card.Grid>
							<Card.Grid style={{width: "50%", backgroundColor: "transprent", display: "flex", alignItems: "center", justifyContent: "end"}}>
								<div style={{width: 90, height: 90, padding: 10, borderRadius: 10, background: "radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.9))", display: "flex", alignItems: "center", justifyContent: "center"}}>
									<LinkedinFilled style={{fontSize: 49}} />
								</div>
							</Card.Grid>
							<Card.Grid style={{width: "50%", backgroundColor: "transprent"}}>
								<div style={{width: 90, height: 90, padding: 10, borderRadius: 10, background: "radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.9))", display: "flex", alignItems: "center", justifyContent: "center"}}>
									<TwitterCircleFilled style={{fontSize: 49}} />
								</div>
							</Card.Grid>
						</Card>
					</Col>
				</Row>

				<style global jsx>{`
					.ant-card-meta-title {
						// color: white;
						text-align: center;
						font-weight: bolder;
						font-size: 1.3rem;
						letter-spacing: 1.2px;
						font-family: monospace, sans-serif;
						background: linear-gradient(to right, #9b461f, #dea450);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
					.ant-card-meta-description {
						color: white;
						letter-spacing: 1px;
						text-align: center;
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
						background: repeating-linear-gradient(45deg, #9b461f 4%, #001529 5%);
					}
				`}</style>
			</>
		)
	}
}

export default withLayout(Index);