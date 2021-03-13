import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Button, Form } from "semantic-ui-react"

const EditTeamForm = () => {
    const {id} = useParams()
    // const {nameInit} = props
    useEffect(() => {
        getTeam()
    },[])
    const [name, setName] = useState('')
    const [coach, setCoach] = useState('')
    const [mascot, setMascot] = useState('')
    const [stadium, setStadium] = useState('')
    const history = useHistory()

    const getTeam = async() => {try{ 
        let res = await axios.get(`/api/teams/${id}`)
        setName(res.data.team.name)
        setCoach(res.data.team.coach)
        setStadium(res.data.team.stadium)
        setMascot(res.data.team.mascot)
        console.log(res.data.team.name)

    }catch (err){
        alert(err)
    }}
    
    const handleSubmit = async() =>{
        try{
            let res = await axios.put(`/api/teams/${id}`, {name, coach, mascot, stadium})
            // setName(res.data.name)
            // setCoach(res.data.coach)
            // setMascot(res.data.mascot)
            // setStadium(res.data.stadium)
            history.push('/teams')
        }catch(err){
            console.log(id)
            alert(err)
            console.log(id)
        }
    }
    return( 
    
    <div>
        <div>
        <h1> Edit Form </h1>
        <h1> Editing Team: {name}</h1>
        <Button onClick={history.goBack}>Go back</Button>
            </div>
            <Form onSubmit={handleSubmit}>
            <Form.Field>
                <p>Name</p>
                <input value={name}
                onChange={(e) => setName(e.target.value)}
                defaultValue={name}
                
                placeholder='Edit name' />
                
                </Form.Field>
                <Form.Field>
                <p>Coach</p>
                <input value={coach}
                onChange={(e) => setCoach(e.target.value)}
                // defaultValue={defaultName}
                placeholder='Edit coach' />
                
                </Form.Field>
                <Form.Field>
                <p>Mascot</p>
                <input value={mascot}
                onChange={(e) => setMascot(e.target.value)}
                //defaultValue={defaultName}
                placeholder='Edit mascot' />
                
                </Form.Field>
                <Form.Field>
                <p>Stadium</p>
                <input value={stadium}
                onChange={(e) => setStadium(e.target.value)}
                //defaultValue={defaultName}
                placeholder='Edit stadium' />
                
                </Form.Field>
                <Button type='submit'>Edit</Button>
            </Form>
        
    </div>
    )
}

export default EditTeamForm

//,{name}, {coach}, {mascot}, {stadium}