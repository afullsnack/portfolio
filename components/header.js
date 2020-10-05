import React , {Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Radio from 'antd/lib/radio';
import Button from 'antd/lib/button';
import { motion } from 'framer-motion';

import { InstagramOutlined, GithubOutlined, TwitterOutlined, } from '@ant-design/icons';
import Link from 'next/link';



class Header extends Component {


   render() {
      
      const { path } = this.props;
      console.log(path);
      
      return (
         <Row gutter={[0, 8]} style={{
            width: '100%',
            height: '60vh',
            marginBottom: 0,
            backgroundColor: "#0049B7",
            // transition: "all .3s ease",
            //backgroundImage: "url('/hero-img-2.jpg')",
            //backgroundPosition: "center",
            //backgroundSize: "cover",
            //backgroundRepeat: "no-repeat",
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
               <div style={{
                  position: "absolute",
                  bottom: -15,
                  right: 'auto',
                  left: 'auto',
                  width: '70%',
                  textAlign: "center"
               }}>
                  <Radio.Group optionType="button" buttonStyle="solid" value={path == "/blog"? "blog" : "home"} defaultValue="home">
                     <Link href="/" passHref><Radio.Button value="home">HOME</Radio.Button></Link>
                     <Link href="/blog" passHref><Radio.Button value="blog">BLOG</Radio.Button></Link>
                  </Radio.Group>
               </div>
            </Col>
         </Row>
      );
   }
}

export default Header;
