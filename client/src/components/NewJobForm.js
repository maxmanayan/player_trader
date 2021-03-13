import axios from "axios"
import { useHistory } from "react-router"
import { Button, Form } from "semantic-ui-react"
import { useState} from 'react'

const NewFormJob = (props) => {
  const [job, setJob] = useState('')
  const [team, setTeam] = useState('')
  const [position, setPosition] = useState('')
  const [salary, setSalary] = useState('')
  const [location, setLocation] = useState('')
  const history = useHistory('')

  const handleSubmit = async(e)=>{
    try{
      axios.post(`/api/jobs`, {team, position, salary, location})
      history.push('/jobs')
      window.location.reload()
    }catch(err){
      alert('error')
    }
  }
  return(
    <div>
      <h1>New Job Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Team</label>
          <input 
          value={team}
          onChange={(e)=>setTeam(e.target.value)}
          defaultValue={team}
          placeholder='Team' />
        </Form.Field>
        <Form.Field>
          <label>Position</label>
          <input 
          value={position}
          onChange={(e)=>setPosition(e.target.value)}
          defaultValue={position}
          placeholder='Position' />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input 
          value={salary}
          onChange={(e)=>setSalary(e.target.value)}
          defaultValue={salary}
          placeholder='Salary' />
        </Form.Field> <Form.Field>
          <label>Location</label>
          <input 
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
          defaultValue={location}
          placeholder='Location' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default NewFormJob