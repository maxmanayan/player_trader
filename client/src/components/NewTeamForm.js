import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Form } from "semantic-ui-react"

const NewTeamForm = () => {
    const [name, setName] = useState('')
    const [coach, setCoach] = useState('')
    const [mascot, setMascot] = useState('')
    const [stadium, setStadium] = useState('')
    const history = useHistory()
    const handleSubmit = async() =>{
        try{
            axios.post(`/api/teams`,{name, coach, mascot, stadium})
            history.goBack()
        }catch(err){
            alert(err)
        }
    }
    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <h1>New Food form</h1>
            <Button onClick={history.goBack}>Go back</Button>
            </div>
            <Form onSubmit={handleSubmit}>
            <Form.Field>
                <p>Team Name</p>
                <input value={name}
                onChange={(e) => setName(e.target.value)}
                defaultValue={name}
                placeholder='Team name' />
                </Form.Field>
                <Form.Field>
                <p>Coach</p>
                <input value={coach}
                onChange={(e) => setCoach(e.target.value)}
                placeholder='Team coach' />
                </Form.Field>
                <Form.Field>
                <p>Mascot</p>
                <input value={mascot}
                onChange={(e) => setMascot(e.target.value)}
                placeholder='Team mascot' />               
                </Form.Field>
                <Form.Field>
                <p>Stadium</p>
                <input value={stadium}
                onChange={(e) => setStadium(e.target.value)}
                placeholder='Team stadium' />
                
                </Form.Field>
                <Button type='submit'>Submit New Team</Button>
            </Form>
        </div>
    )
}

export default NewTeamForm