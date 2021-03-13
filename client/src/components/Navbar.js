import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


const Navbar = () => {
    return (
        
        <Menu style={{margin: '0'}}>
            <Link to='/'>
            <Menu.Item>
                Home
            </Menu.Item>
            </Link>
            <Link to='/teams'>
            <Menu.Item>
                Teams
            </Menu.Item>
            </Link>
            <Link to='/players'>
            <Menu.Item>
                Players
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

