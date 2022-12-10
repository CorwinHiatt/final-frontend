// import { Link } from "react-router-dom" 
// import { Button } from "antd"
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Add Posts', '2', <DesktopOutlined />),
  getItem('Posts', 'sub1', <MailOutlined />),
  getItem('Calender', '1', <PieChartOutlined />),
//   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
//   ]),
]
// const App = () => {
  export default function Header(){
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }
  return(
    <div
    style={{
      width: 256,
    }}
  >
    <Button
      type="primary"
      onClick={toggleCollapsed}
      style={{
        marginBottom: 16,
      }}
    >
    {/* <li><a href="/">Home</a></li> */}
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Button>
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}
      items={items}
    />
  </div>
)
    // <div className="button-routes">
    //  <ul className="pages">
    //   <Button>

    //   </Button>
     
     
    //   <Button>

    // <li><a href="/add-post">Add Post</a></li>
    //   </Button>
      

      
    //   <Button >

    // <li><a href="/calender">Calender</a></li>
    //   </Button>
      
    // </ul>
    

  
    /* </div> */

  
    
    
  
}