import { Link } from "react-router-dom"
import { Button } from "semantic-ui-react"

const Homepage = () => {

return (
    <div className='homepage' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    <h1 style={{margin:'20px'}}> Player Trader </h1>
    
    <Link to='/teams'>
    <Button color='blue' style={{margin: '15px', width:'150px'}}>Teams</Button>
    </Link>
    <Link to='/players'>
    <Button color='blue' style={{margin: '15px', width:'150px'}}>Players</Button>
    </Link>
    <Link to='/jobs'>
    <Button color='blue' style={{margin: '15px', width:'150px'}}>Jobs</Button>
    </Link>
    <Link to='/articles'>
    <Button color='blue' style={{margin: '15px', width:'150px'}}>Articles</Button>
    </Link>
    <Link to='/about'>
    <Button color='blue' style={{margin: '15px', width:'150px'}}>About</Button>
    </Link>
    
    </div>

)
}

export default Homepage