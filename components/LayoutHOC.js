import { Component } from 'react';
import Layout from 'antd/lib/layout';
import Header from './header';
import Footer from './footer';

import Router from 'next/router';


function withLayout(MyPage) {
   // return the page wrapped in the base layout of the design
   return class extends Component{

      render(){
         
         return(
            <Layout style={{ minHeight: '100vh' }}>
               <Header path={this.props.pathname} />
               <MyPage />
               <Footer />
            </Layout>
         )
      }
   }
}

export default withLayout;