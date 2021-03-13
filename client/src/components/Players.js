import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button, Card, Grid } from "semantic-ui-react"

const Players = () => {
    const [players, setPlayers] = useState([])

    const getTeams = async () => {
        try {
            let res = await axios.get('/api/all_players')
            setPlayers(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getTeams()
    },[])

    const renderAllPlayers = () => {
        return players.map( player => {
            return(
                <Card.Group>
                <Card>
                    <Card.Content style={{background: 'whitesmoke'}}>
                        <Card.Header>Player {player.id}: {player.name}</Card.Header>
                        <Card.Meta>Position: {player.position}</Card.Meta>
                        <Card.Meta>Value: ${player.value} million</Card.Meta>
                        <Card.Meta>Age: {player.age}</Card.Meta>
                    </Card.Content>
                    <Card.Content style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Card.Meta>Click to view current team</Card.Meta>
                        <Link to={`/teams/${player.team_id}`}>
                            <Button>View</Button>
                        </Link>
                    </Card.Content>
                    {/* <Card.Content extra>
                    <div className='ui two buttons'>
                        <Link to={`/teams/${id}/players/${player.id}/edit`}>
                            <Button basic color='green'>
                            Update
                            </Button>
                        </Link>
                        <Button onClick={() => deletePlayer(id, player.id)} basic color='red'>
                        Delete
                        </Button>
                    </div>
                    </Card.Content> */}
                </Card>
            
            </Card.Group>

            )
        })
    }

    return (
        <div className='players'>
            <Card fluid color='gray' style={{background: 'whitesmoke'}}>
                <Card.Content style={{display: 'flex', justifyContent: 'center'}}>
                  <Card.Header>All players</Card.Header>

                </Card.Content>
            </Card>
            <Grid style={{marginTop: '1em'}}>
             {renderAllPlayers()}

            </Grid>

        </div>
    )
}

export default Players