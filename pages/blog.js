import { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider'
import message from 'antd/lib/message';
import Radio from 'antd/lib/radio';

import { motion } from 'framer-motion';

import Link from 'next/link';
import Router from 'next/router';
import withLayout from '../components/LayoutHOC';

class Blog extends Component {
    
	render(){
		
		return(
			<>
				<Row gutter={[32, 32]} style={{width: '100%', margin: 0, backgroundColor: '#001529', padding: 50}}>
            <h1 style={{
               margin: 0,
               padding: 0,
               fontSize: '1.2rem',
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
            }}>No Blogs yet but watch this space</h1>
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

export default withLayout(Blog);