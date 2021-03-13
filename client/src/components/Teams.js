import { useEffect, useState } from "react"
import { Button, Card, CardDescription } from "semantic-ui-react"
import EditTeamForm from "./EditTeamForm"
import axios from 'axios'
import { Link } from "react-router-dom"

const Teams = () => {
    const [showForm, setShowForm] = useState(false)
    const [teams, setTeams] = useState([])
    useEffect(() => {
        getTeams()
    },[])

    const deleteTeam = async(id) => {
        try {
            await axios.delete(`/api/teams/${id}`)
            window.location.reload()
            
        } catch (error) {
            alert(error)
            
        }
    }


    const getTeams = async() =>{
    try{ 
        let res = await axios.get('/api/teams')
        setTeams(res.data)
        console.log(res.data)

    }catch (err){
        alert(err)
    }
    }
    const renderTeams = () => {
        return teams.map (team => {
            return (
                
                <Card>
                 <Card.Content>
                 <Link to={`/teams/${team.id}`}>
                <Card.Header>{team.name}
                 </Card.Header> 
                 </Link>
                 <Card.Meta>
                    {team.coach}
                </Card.Meta>
                <Card.Description>
                    {team.mascot}
                    </Card.Description> 
                    <Card.Description>
                     {team.stadium}
                    </Card.Description> 
                    <Link to={`/teams/${team.id}/edit`} >
                    <Button>Edit</Button>
                    </Link>
                    <Button color='red' onClick={()=>deleteTeam(team.id)}>Delete</Button>
                 </Card.Content> 
                 </Card>
                 
            )
        })

    }
    return (
        <div>
            <Card fluid color='blue'>
            <div style={{display:'flex', justifyContent:'space-between', padding:'10px'}}>
            <h1>Teams</h1>
            <Link to={`/teams/new`}>
            <Button>New Team Form</Button>
            </Link>
            </div>
            </Card>
            {renderTeams()}
            </div>


    )
}
export default Teams