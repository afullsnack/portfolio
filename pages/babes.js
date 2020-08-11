import { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';

import { MailOutlined, UserAddOutlined, LoadingOutlined } from '@ant-design/icons';

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
						<Input value={this.state.email} onChange={e => this.setState({email: e.target.value})} prefix={<MailOutlined style={{color: '#001529'}} />} suffix={this.state.loadingListing? <LoadingOutlined /> : <Button type="link" size="small" style={{fontWeight: 'bolder'}} onClick={e => this.handleListing()}>Join List</Button>} type="email" htmlType="email" size="large"  placeholder="Enter email" style={{
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
							background: `
								linear-gradient(
									to right,
									#9b461f,
									#dea450
								)
							`,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}>Full Stack Developer</h1>
					</Col>
					<Col xs={{span: 24}} sm={{span: 24}} lg={{span: 8}} xl={{span: 8}} style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: 300,
					}}>
						<Card bordered={false} style={{
							width: '100%',
							height: '100%',
							backgroundColor: 'transparent',
							boxShadow: [
								'10px 10px 10px 0 rgba(0,0,0,.35)',
								'-10px -10px 10px 0 rgba(255,255,255,.12)',
							]
						}}>

						</Card>
					</Col>
					<Col xs={{span: 24}} sm={{span: 24}} lg={{span: 8}} xl={{span: 8}} style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: 300,
					}}>
						<Card bordered={false} style={{
							width: '100%',
							height: '100%',
							backgroundColor: 'transparent',
							boxShadow: [
								'10px 10px 10px 0 rgba(0,0,0,.35)',
								'-10px -10px 10px 0 rgba(255,255,255,.12)',
							]
						}}>

						</Card>
					</Col>
					<Col xs={{span: 24}} sm={{span: 24}} lg={{span: 8}} xl={{span: 8}} style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: 300,
					}}>
						<Card bordered={false} style={{
							width: '100%',
							height: '100%',
							backgroundColor: 'transparent',
							boxShadow: [
								'10px 10px 10px 0 rgba(0,0,0,.35)',
								'-10px -10px 10px 0 rgba(255,255,255,.12)',
							]
						}}>

						</Card>
					</Col>
				</Row>
			</>
		)
	}
}