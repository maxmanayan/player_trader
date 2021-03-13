import {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { Button, Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Team = () => {
    const [team, setTeam] = useState({})

    const [players, setPlayers] = useState([])

    const {id} = useParams()

    const history = useHistory()

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


    const deletePlayer = async (id, player_id) => {
        try {
            await axios.delete(`/api/teams/${id}/players/${player_id}`)
            window.location.reload()
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

                <Card.Group >
                    <Card>
                        <Card.Content style={{background: 'whitesmoke'}}>
                            <Card.Header>Player: {player.name}</Card.Header>
                            <Card.Meta>Position: {player.position}</Card.Meta>
                            <Card.Meta>Value: ${player.value} million</Card.Meta>
                            <Card.Meta>Age: {player.age}</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
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
                        </Card.Content>
                    </Card>
                
                </Card.Group>


            )
        })
    }

    const deleteTeam = async (id) => {
        try {
            await axios.delete(`/api/teams/${id}`)
            history.push('/teams')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='teams-page' style={{marginTop: '1em'}}>
            <Card.Group>
                <Card fluid color='red' style={{margin: '2em'}}>
                    <Card.Content style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
                        <h1>Team: {team.name}</h1>
                        <h2>Coach: {team.coach}</h2>
                        <h2>Mascot: {team.mascot}</h2>
                        <h2>Stadium: {team.stadium}</h2>
                    </Card.Content>
                    <Card.Content style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Link to={`/teams/${team.id}/edit`} >
                        <Button>Update</Button>
                    </Link>
                        <Button onClick={()=> deleteTeam(team.id)}>Delete Team</Button>
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
            <Grid style={{marginTop: '2em'}}>
                {renderPlayers()}
            </Grid>
            
            </div>

    )
    }
    
    export default Team