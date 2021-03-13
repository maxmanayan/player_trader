import axios from "axios";
import { useHistory, useLocation, useParams } from "react-router"
import { Button, Form } from "semantic-ui-react";
import { useEffect, useState} from 'react'


const UpdateJobForm = (props) => {
  const [team, setTeam] = useState('')
  const [position, setPosition] = useState('')
  const [salary, setSalary] = useState('')
  const [location, setLocation] = useState('')

  const history = useHistory();
  // let { job, x } = useLocation();
  const { id } = useParams(); 
  // const [job, setJob] = useState(job.id) 
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.put(`/api/jobs/${id}`, {team, position, salary, location})
      history.goBack()
    } catch (error) {
      alert ('error')
    }
    console.log({})
  }

  return (
    <div>
      <h1>Update Jobs</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Team</label>
          <input
            onChange={(e) => setTeam(e.target.value)}
            value={team}
            />
          </Form.Field>
        <Form.Field>
          <label>Position</label>
          <input
            onChange={(e) => setPosition(e.target.value)}
            value={position}
            />
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input 
            onChange={(e) => setSalary(e.target.value)}
            value={salary}
            />
            </Form.Field>
            <Form.Field>
              <label>Location</label>
              <input 
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              />
            </Form.Field>
            <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default UpdateJobForm