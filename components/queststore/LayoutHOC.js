import { Component, useState } from 'react';
import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Menu from 'antd/lib/menu';
import { BellOutlined, UserOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar';
import Badge from 'antd/lib/badge';
import Popover from 'antd/lib/popover';
import Select from 'antd/lib/select';
import Link from 'next/link';

// import router modules
import { useRouter } from 'next/router';

const { Content, Header } = Layout;
const { Option } = Select;

// funcion Comp for menu navigation
function Navigation() {
   // const [menuItem, setMenuItem] = useState('/');
   const router = useRouter();
   const menuItem = router.asPath.slice(11);
   // alert(menuItem);

   const onChange = (value) => {
      // const [val, setValue] = useState("home");
      // if(key == '/') return router.push('/queststore', '/queststore/');
      switch (value) {
         case "home":
            router.push('/queststore');
            break;
         case "outfit-w":
            router.push('/queststore/outfit?type=women');
            break;
         case "outfit-m":
            router.push('/queststore/outfit?type=men');
            break;
         case "store":
            router.push('/queststore/store');
            break;
         default:
            alert("That doesn't exist contact developer");
            break;
      }
      // alert(value);
      // setMenuItem(key);
   }
   
   return(
      <Select defaultValue="home" bordered={false} style={{color: "white"}} onSelect={onChange}>
         <Option value="home">Home</Option>
         <Option value="store">Store</Option>
         <Option value="outfit-w">Women's Outfit</Option>
         <Option value="outfit-m">Men's Outfit</Option>
      </Select>
   )
}

function UserNavigation() {

   return (
      <Menu mode="vertical" theme="light" defaultSelectedKeys={["profile"]}>
         <Menu.Item key="profile">Profile</Menu.Item>
         <Menu.Item key="order">Order</Menu.Item>
         {/* <Menu.Item></Menu.Item> */}
         <Menu.Item key="sign-out">Sign Out</Menu.Item>
      </Menu>
   )
}

function BaseLayout(MyPage) {
   if (MyPage.getInitialProps) {
      MyPage.getInitialProps();
   }

   return class extends Component {

      render(){
         return (
            <Layout style={{ minHeight: '100vh' }}>
               <Header style={{
                  padding: 0,
                  margin: 0,
                  marginBottom: 4,
                  // borderBottom: '1p solid grey',
                  position: "fixed",
                  zIndex: 1,
                  width: "100%",
                  backgroundColor: 'transparent',
                  // borderBottom: '2px solid black'
               }}>
                  <Row gutter={0} style={{
                     margin: 0,
                     padding: 0,
                     height: '100%'
                  }}>
                     <Col xs={{span: 8}} sm={{span: 8}} md={{span: 8}} lg={{span: 8}}>
                       <Avatar src="/norskhill-logo.png" size="large" style={{marginLeft: 20}} />
                     </Col>
                     <Col xs={{span: 8}} sm={{span: 8}} md={{span: 8}} lg={{span: 8}} style={{textAlign: "center"}}>
                        <Navigation />
                     </Col>
                     <Col xs={{span: 8}} sm={{span: 8}} md={{span: 8}} lg={{span: 8}} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                     }}>
                        <SearchOutlined style={{color: 'white', fontSize: 20, margin: '0 10px'}} />
                        <Link href="/queststore/cart" passHref>
                           <Badge dot style={{ right: 15, top: 5 }} ><ShoppingOutlined style={{ fontSize: 20, color: 'white', margin: '0 10px', cursor: "pointer" }} /></Badge>
                        </Link>
                        <Popover content={<UserNavigation />} placement="bottomRight">
                           <Avatar size="default" shape="circle" icon={<UserOutlined />} style={{margin: '0 20px 0 10px'}}></Avatar>
                        </Popover>
                     </Col>
                  </Row>
               </Header>
               <Content style={{ padding: 0, margin: 0, height: 'calc(100vh - 72px)' }}>
                  <MyPage />
               </Content>

               <style jsx global>{`
                  .ant-select-arrow {
                     color: white;
                  }               
               `}</style>
            </Layout>
         )
      }
   }
}

export default BaseLayout;