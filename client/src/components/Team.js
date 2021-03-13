import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Team = () => {
    const [team, setTeam] = useState({})

    const [players, setPlayers] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        getTeam()
    },[])


    const getTeam = async() => {
        try {
            let res = await axios.get(`/api/teams/${id}`)
            setTeam(res.data.team)
            setPlayers(res.data.players)
        } catch (err) {
            console.log(err)
        }
    }


    const renderPlayers = () => {
        return players.map( player => {
            return(
                // <Card.Group>
                //     <h1>Player: {player.name}</h1>
                //     <p>Position: {player.position}</p>
                //     <p>Value: ${player.value} million</p>
                //     <p>Age: {player.age}</p>

                // </Card.Card.Group>

                <Card.Group>
                    <Card>
                        <Card.Content style={{background: 'whitesmoke'}}>
                            <Card.Header>Player: {player.name}</Card.Header>
                            <Card.Meta>Position: {player.position}</Card.Meta>
                            <Card.Meta>Value: ${player.value} million</Card.Meta>
                            <Card.Meta>Age: {player.age}</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                            Update
                            </Button>
                            <Button basic color='red'>
                            Delete
                            </Button>
                        </div>
                        </Card.Content>
                    </Card>
                
                </Card.Group>

            )
        })
    }
    
    return (
        <div style={{margin: '2em'}}>
            <Card.Group>
                <Card fluid color='red' >
                    <Card.Content style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
                        <h1>Team: {team.name}</h1>
                        <h2>Coach: {team.coach}</h2>
                        <h2>Mascot: {team.mascot}</h2>
                        <h2>Stadium: {team.stadium}</h2>
                    </Card.Content>
                    <Card.Content style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Button>Update Team</Button>
                        <Button>Delete Team</Button>
                    </Card.Content>
                </Card>
            </Card.Group>
            <Card.Group style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
                <Link to={{pathname: `/teams/${id}/players/new`}}>
                    <Button>Add New Player</Button>
                </Link>
                <Link to={'/teams'}>
                    <Button>Back to Teams</Button>
                </Link>
            </Card.Group>
            <Card.Group itemsPerRow={6}>
                {renderPlayers()}
            </Card.Group>
            

        </div>
    
    )
    }
    
    export default Team