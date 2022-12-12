
import {
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd'



      export default function Header(){
        
        return (
          <div className="button-routes">

            <Menu>
          
  <ul className="pages">
    <Button className='home-icon'>
 <MailOutlined   
      />
    <li><a href="/">Home</a></li>
      </Button> 

     
     
      <Button className='desktop-icon'>
          <DesktopOutlined />
    <li><a href="/add-post">Add Post</a></li>
      </Button>

      

      
      <Button className='pie-icon' >
      <PieChartOutlined
     />
    <li><a href="/calender">Calender</a></li>
      </Button>
      
    </ul>
    
            </Menu>

  
     </div> 

)
    
    
  
}