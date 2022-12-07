// import { Link } from "react-router-dom" 
// import { Button } from "antd"
import { Button } from "antd"

export default function Header(){
  return(
    // <div className="button-routes">
     <ul className="pages">
      <Button>
      <li><a href="/">Home</a></li>

      </Button>
     
     
      <Button>

    <li><a href="/add-post">Add Post</a></li>
      </Button>
      
      
      <Button>

    <li><a href="/calender">Calender</a></li>
      </Button>
      
    </ul>
    

  
    /* </div> */

  )
    
    
  
}