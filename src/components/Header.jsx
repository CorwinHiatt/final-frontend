
import {
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd'
import { useNavigate } from 'react-router-dom';



export default function Header() {

  let navitgate = useNavigate()

  return (
    <div className="button-routes">

      <Menu className='ant-nav-menu'>

        <ul className="pages">
          <Button onClick={() => navitgate("/")} className='button-mail'>
            <MailOutlined
            />
            Home
          </Button>



          <Button onClick={() => navitgate("/add-post")} className='button-mail'>
            <DesktopOutlined />
            Add Post
          </Button>




          <Button onClick={() => navitgate("/calender")} className='button-mail' >
            <PieChartOutlined
            />
            Calender
          </Button>

        </ul>

      </Menu>


    </div>

  )



}