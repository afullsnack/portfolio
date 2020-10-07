import React , {Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Radio from 'antd/lib/radio';
import Button from 'antd/lib/button';
import Image from 'antd/lib/image';
import { motion } from 'framer-motion';
import Typical from 'react-typical';

import { InstagramOutlined, GithubOutlined, TwitterOutlined, } from '@ant-design/icons';
import Link from 'next/link';



class Header extends Component {


   render() {
      
      const { path } = this.props;
      console.log(path);
      console.log()
      
      return (
         <Row gutter={[0, 8]} style={{
            width: '100%',
            height: '70vh',
            marginBottom: 0,
            backgroundColor: '#001529',
            // transition: "all .3s ease",
            //backgroundImage: "url('/hero-img-2.jpg')",
            //backgroundPosition: "center",
            //backgroundSize: "cover",
            //backgroundRepeat: "no-repeat",
         }}>
            <Col span={10} style={{
              height: '100%',
              display: 'flex',
              flexFlow: 'column',
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}>
              <h1 style={{
							  margin: 0,
							  padding: 0,
							  fontSize: "3rem",
							  textAlign: "right",
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
						  }}>Hi, I'm <br /> Miracle Friday</h1>
              <h3 style={{
							  margin: 0,
							  padding: 0,
							  fontSize: "1.5rem",
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
						  }}>
                I{' '}
                <Typical loop={Infinity} wrapper='b' steps={['Design Websites/Apps', 1700, 'Build Websites/Apps', 1700, 'Am an Entrepreneur', 1700]} />
              </h3>

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
               <div style={{
                  right: 'auto',
                  left: 'auto',
               }}>
                  <Radio.Group optionType="button" buttonStyle="solid" value={path == "/blog"? "blog" : "home"} defaultValue="home">
                     <Link href="/" passHref><Radio.Button value="home">HOME</Radio.Button></Link>
                     <Link href="/blog" passHref><Radio.Button value="blog">BLOG</Radio.Button></Link>
                  </Radio.Group>
               </div>
            </Col>
            <Col span={14} style={{
              height: '100%',
              display: 'flex',
              flexFlow: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image src="/hero/hero-img.svg" width='60%' alt="Brain art" />
            </Col> 
         </Row>
      );
   }
}

export default Header;
