import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


const Navbar = () => {
    return (
        
        <Menu>
            <Link to='/'>
            <Menu.Item>
                HomePage
            </Menu.Item>
            </Link>
            <Link to='/teams'>
            <Menu.Item>
                Teams
            </Menu.Item>
            </Link>
            <Link to='/jobs'>
            <Menu.Item>
                Jobs
            </Menu.Item>
            </Link>
            <Link to='/articles'>
            <Menu.Item>
                Articles
            </Menu.Item>
            </Link>
            <Link to='/about'>
            <Menu.Item>
                About
            </Menu.Item>
            </Link>
         </Menu>
        
    )
}

export default Navbar

