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
                    <Button onClick={()=>{setShowForm(!showForm)}}>Edit</Button>
                    <Button color='red'>Delete</Button>
                    {showForm && <EditTeamForm />}
                 </Card.Content> 
                 </Card>
                 
            )
        })

    }
    return (
        <div>
            <h1>Teams</h1>
            {renderTeams()}
            </div>


    )
}
export default Teams