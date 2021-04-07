import React, { Component } from 'react';

import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link 
  } from 'react-router-dom'

  class Nav extends Component {
    render() {
        const { Header, Content, Footer } = Layout;
        return (
            <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to="home">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="registration"> Registration</Link></Menu.Item>
                <Menu.Item key="3"><Link to="login">Login</Link></Menu.Item>
                <Menu.Item key="4"><Link to="about">About</Link></Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            </Content>
          </Layout>
        );
    }
}

export default Nav;



// import React, { Component } from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route, 
//     Link 
//   } from 'react-router-dom'

//   class Nav extends Component {
//     render() {
//         return (
//             <div>
//                 <Link to="login" >Login</Link>
//                 <Link to="registration" >Registration</Link>
//             </div>
//         );
//     }
// }

// export default Nav;


// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import './index.css';
// import { Layout, Menu, Breadcrumb } from 'antd';

// const { Header, Content, Footer } = Layout;

// ReactDOM.render(
//   <Layout className="layout">
//     <Header>
//       <div className="logo" />
//       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
//         <Menu.Item key="2">Registration</Menu.Item>
//         <Menu.Item key="1">Login</Menu.Item>
//         <Menu.Item key="3">About</Menu.Item>
//       </Menu>
//     </Header>
//     <Content style={{ padding: '0 50px' }}>
//     </Content>
//   </Layout>,
//   document.getElementById('container'),
// );