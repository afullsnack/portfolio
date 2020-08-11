import { Component } from 'react';
import Layout from 'antd/lib/layout';

const { Content, Sider, Header } = Layout;


function BaseLayout(MyPage) {
   // return the page wrapped in the base layout of the design
   return class extends Component{
      render(){
         return(
            <Layout style={{ minHeight: '100vh' }}>
               <Header />
               <Layout>
                  <Content style={{ padding: 20 }}>
                     <MyPage />
                  </Content>
               </Layout>
            </Layout>
         )
      }
   }
}

export default BaseLayout