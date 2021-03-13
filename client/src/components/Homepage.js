import { Link } from "react-router-dom"
import { Button } from "semantic-ui-react"

const Homepage = () => {

return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    <h1> Player Trader </h1>
    
    <Link to='/teams'>
    <Button style={{margin: '5px'}}>Teams</Button>
    </Link>
    <Link to='/players'>
    <Button style={{margin: '5px'}}>Players</Button>
    </Link>
    <Link to='/jobs'>
    <Button style={{margin: '5px'}}>Jobs</Button>
    </Link>
    <Link to='/articles'>
    <Button style={{margin: '5px'}}>Articles</Button>
    </Link>
    <Link to='/about'>
    <Button style={{margin: '5px'}}>About</Button>
    </Link>
    
    </div>

)
}

export default Homepage