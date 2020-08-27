import { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider'
import message from 'antd/lib/message';
import Progress from 'antd/lib/progress';

import { MailFilled, UserAddOutlined, LoadingOutlined, LinkOutlined, InstagramOutlined, GithubOutlined, TwitterOutlined, LaptopOutlined, CloudOutlined, MobileOutlined, GithubFilled } from '@ant-design/icons';

import { motion } from 'framer-motion';

import Link from 'next/link';
import Router from 'next/router';

export default class Babes extends Component {

	state = {
		email: null,
		loadingListing: false,
	};

	handleListing () {
		this.setState({ loadingListing: true });
		setTimeout(() => {
			this.setState({ loadingListing: false, email: null })
			message.success("You've been added successfully!", 2);
		}, 3000);
	}

	handleRadioSkillSelect (e) {
		const currentActiveElem = document.getElementsByClassName('active');
		// console.log(currentActiveElem.length);
		if(currentActiveElem.length == 0) {
			e.currentTarget.className += " active";
		} else {
			for(var i=0; i<currentActiveElem.length; i++) {
				currentActiveElem[i].setAttribute("class", "ant-card-grid ant-card-grid-hoverable");
			}
			e.currentTarget.className += " active";
		}
	}
    
	render(){
		
		return(
			<>
				<Row gutter={[0, 8]} style={{
					width: '100%',
					height: '60vh',
					marginBottom: 0,
					backgroundImage: "url('/hero-img.jpg')",
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}>
					<Col span={24} style={{
						display: 'flex',
						flexFlow: 'column',
						alignItems: 'center',
						justifyContent: 'flex-end',
						padding: 20,
					}}>
						<div style={{
							display: "flex",
							flexFlow: "row",
							alignItems: "center",
							justifyContent: "flex-end",
							padding: 25,
							height: 100,
						}}>
							<motion.div animate={{marginBottom: [0, 20, 0]}} initial={{marginBottom: 0}} transition={{ loop: Infinity, ease: "easeInOut", repeatDelay: 3.2,}}>
								<InstagramOutlined style={{ color: 'white', fontSize: 20 }} />
							</motion.div>
							<motion.div animate={{marginBottom: [0, 20, 0]}} initial={{marginBottom: 0}} transition={{ loop: Infinity, ease: "easeInOut", repeatDelay: 1.2, delay: 2.2}} style={{ margin: "0 20px" }}>
								<GithubOutlined style={{ color: 'white', fontSize: 20 }} />
							</motion.div>
							<motion.div animate={{marginBottom: [0, 20, 0]}} initial={{marginBottom: 0}} transition={{ loop: Infinity, ease: "easeInOut", repeatDelay: 3.2, delay: 3.2}}>
								<TwitterOutlined style={{ color: 'white', fontSize: 20 }} />
							</motion.div>
						</div>
						<Input value={this.state.email} onChange={e => this.setState({email: e.target.value})} prefix={<MailFilled style={{color: '#001529'}} />} suffix={this.state.loadingListing? <LoadingOutlined /> : <Button type="link" size="small" style={{fontWeight: 'bolder'}} onClick={e => this.handleListing()}>Join List</Button>} type="email" size="large"  placeholder="Code tips? Enter email, NO BS!" style={{
							position: "absolute",
							bottom: -20,
							right: 'auto',
							left: 'auto',
							width: '70%',
							border: 0,
						}} />
					</Col>
				</Row>
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
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}><LinkOutlined style={{ color: 'white' }} /> Skills & Experiences</h1>
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
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}><LinkOutlined style={{ color: 'white' }} /> Portfolio</h1>
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
				<Row gutter={[32, 32]} style={{width: '100%', margin: 0, backgroundColor: 'white', padding: 50}}>
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
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}><LinkOutlined style={{ color: '#1890ff' }} /> Contact</h1>
						<h2>Want to Hire me? or Talk about cool stuff?</h2>
						<h3>Reach me through!</h3><br/>
					</Col>
				</Row>

				<style global jsx>{`
					.ant-card-meta-title {
						// color: white;
						text-align: center;
						font-weight: bolder;
						font-size: 1.3rem;
						letter-spacing: 1.2px;
						background: linear-gradient(to right, #9b461f, #dea450);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
					.ant-card-meta-description {
						color: white;
						letter-spacing: 1px;
						text-align: center;
					}
					.ant-progress-text {
						color: white;
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
				`}</style>
			</>
		)
	}
}
