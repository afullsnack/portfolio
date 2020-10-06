import { Component } from 'react';
import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Header from './header';
import Footer from './footer';
import Head from 'next/head';

import Router from 'next/router';


function withLayout(MyPage) {
   // return the page wrapped in the base layout of the design
   return class extends Component{

      render(){
         
         return(
            <Layout style={{ minHeight: '100vh' }}>
              <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
              </Head>
              <Header path={this.props.pathname} />
                <MyPage />
              <Footer />
            </Layout>
         )
      }
   }
}

export default withLayout;
