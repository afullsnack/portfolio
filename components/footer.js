import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import { MailFilled, LoadingOutlined} from '@ant-design/icons';
import message from 'antd/lib/message';

class Footer extends Component {

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

   render() {

      return (
         <Row gutter={[32, 32]} style={{width: '100%', margin: 0, backgroundColor: '#001529', padding: 50}}>
            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}} style={{padding: '10%'}}>
               <h1 style={{
                  margin: 0,
                  padding: 0,
                  fontSize: '1.5rem',
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
               }}>Join my mailing list!</h1>
               <h2 style={{color: "#001529", fontFamily: "monospace", lineHeight: 1, fontSize: "1rem"}}>For code tips, inspiration, tutorials and more</h2>
               <Input value={this.state.email} onChange={e => this.setState({email: e.target.value})} prefix={<MailFilled style={{color: '#001529'}} />} suffix={this.state.loadingListing? <LoadingOutlined /> : <Button type="link" size="small" style={{fontWeight: 'bolder'}} onClick={e => this.handleListing()}>Join List</Button>} type="email" size="large"  placeholder="Enter email, NO BS!" />
            </Col>
            <Col span={24} style={{padding: 20, textAlign: "center"}}>
               <span style={{color: "white"}}>Copoy right designed by Miracle Friday c 2020</span>
            </Col>
            <style jsx>{`
               ul.extra_repos {
						list-style: none;
						list-style=type: none;
					}
					ul.extra_repos li {
						list-style: none;
						list-style-type: disc;
						list-style-type-color: blue;
						list-style-color: blue;
					}
					ul.playlist {
						list-style: none;
						list-style=type: none;
					}
					ul.playlist li {
						list-style: none;
						list-style-type: disc;
						list-style-type-color: blue;
						list-style-color: blue;
					}
            `}</style>
         </Row>
      );
   }
}

export default Footer;
