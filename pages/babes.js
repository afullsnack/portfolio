import { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';

import { MailOutlined, UserAddOutlined, LoadingOutlined, LinkOutlined, InstagramOutlined, GithubOutlined, TwitterOutlined } from '@ant-design/icons';

import { motion } from 'framer-motion';

import Link from 'react';
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
    
	render(){
		
		return(
			<>
				<Row gutter={[0, 8]} style={{width: '100%', height: '60vh', marginBottom: 0, backgroundColor: '#001509'}}>
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
						<Input value={this.state.email} onChange={e => this.setState({email: e.target.value})} prefix={<MailOutlined style={{color: '#001529'}} />} suffix={this.state.loadingListing? <LoadingOutlined /> : <Button type="link" size="small" style={{fontWeight: 'bolder'}} onClick={e => this.handleListing()}>Join List</Button>} type="email" size="large"  placeholder="Enter email" style={{
							position: "absolute",
							bottom: -20,
							right: 'auto',
							left: 'auto',
							width: '70%',
							border: 0,
						}} />
					</Col>
				</Row>
				<Row gutter={[32, 32]} style={{width: '100%', margin: '0 0 30px 0', backgroundColor: '#001529', padding: 50}}>
					<Col span={24} style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
						<h1 style={{
							margin: 0,
							padding: 0,
							fontSize: '2rem',
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
						<Card bordered={false} cover={<img src="/img2.jpg" width="100%" height="100%" />} style={{
							width: '100%',
							height: '100%',
							backgroundColor: 'transparent',
							boxShadow: [
								'10px 10px 10px 0 rgba(0,0,0,.35)',
								'-10px -10px 10px 0 rgba(255,255,255,.12)',
							]
						}}>
							<Card.Meta title="ReactJS Development" description="I am well versed in react.js development with over 3 years of experience learning and deplying web apps. My favourite tool to work wth react.js is next.js for server rendering, which significantly reduces web app loading time and displays content to the user very fast." />
						</Card>
					</Col>
					<Col xs={{span: 24}} sm={{span: 24}} lg={{span: 8}} xl={{span: 8}} style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: "auto",
					}}>
						<Card bordered={false} cover={<img src="/img2.jpg" width="inherit" height="100%" />} style={{
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
						<Card bordered={false} cover={<img src="/img2.jpg" width="inherit" height="100%" />} style={{
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
				<style global jsx>{`
					.ant-card-meta-title {
						// color: white;
						font-weight: bolder;
						font-size: 1.2rem;
						letter-spacing: 1.2px;
						background: linear-gradient(to right, #9b461f, #dea450);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
					.ant-card-meta-description {
						color: white;
						letter-spacing: 1px;
					}
				`}</style>
			</>
		)
	}
}
