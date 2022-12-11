// import { Link } from "react-router-dom" 
// import { Button } from "antd"
import React, { useState } from 'react';
import {

  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd'
import { NavLink, useNavigate,  } from 'react-router-dom';

// function getItem(label, key, icon, children, type) {
// return {
//   key,
//   icon,
//   children,
//   label,
//   type,
// };

// }
//----------------------//
// const items = [
//   getItem('Add Posts', '2', <DesktopOutlined  />),
//   getItem('Posts', 'Posts', <MailOutlined />),
//   getItem('Calender', '1', <PieChartOutlined />),
//   //   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
// //     getItem('Option 9', '9'),
// //     getItem('Option 10', '10'),
// //     getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
// //   ]),
// ]
// // const App = () => {

//   const [collapsed, setCollapsed] = useState(false);
//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   }
  //=----------//
  // return(
  //   <>
    
  //   <div className="nav-bar-box">
  //   <span className="nav-bar-box"
  //   style={{
  //     padding: '10px',
  //     justifyContent: 'center',
  //     width: 256,
  //   }}
  //   >
  //   <Button
  //     type="primary"
  //     onClick={toggleCollapsed}
  //     style={{
  //       marginBottom: 16,
  //     }}
  //     >
  //   {/* <li><a href="/">Home</a></li> */}
  //     {collapsed ? <MenuUnfoldOutlined onClick={[navigate=""]}  /> : <MenuFoldOutlined />}
  //   </Button>
  //   <Menu
    //-------------------//
      // defaultSelectedKeys={[<ul>
      // </ul>]}
      // defaultOpenKeys={['sub1']}
      // mode="inline"
      // theme="light"
      //----------------//
      //     inlineCollapsed={collapsed}
      //     items={items}
      //     />
      // </span>
      // </div>
      //   </>
      // )
      export default function Header(){
        
        return (
          <div className="button-routes">

            <Menu>
          
  <ul className="pages">
    <Button>
 <MailOutlined   
      />
    <li><a href="/">Home</a></li>
      </Button> 

     
     
      <Button>
          <DesktopOutlined />
    <li><a href="/add-post">Add Post</a></li>
      </Button>
      <Button>
          <MailOutlined />
    <li><a href="/add-posts-from-kids">Kids Add Post </a></li>
      </Button>
      

      
      <Button >
      <PieChartOutlined/>
    <li><a href="/calender">Calender</a></li>
      </Button>
      
    </ul>
    
            </Menu>

  
     </div> 

)
    
    
  
}