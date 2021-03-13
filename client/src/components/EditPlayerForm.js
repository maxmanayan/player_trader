import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";

const EditPlayerForm = () => {
  const {team_id, id} = useParams()
  const history = useHistory()

  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [value, setValue] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = async () => {
    try {
      await axios.put(`/api/teams/${team_id}/players/${id}`, {name, position, value, age})
      history.push(`/teams/${team_id}`)
    } catch (err) {
      console.log(err)
    }
  }

  const getPlayer = async () => {
    try {
      let res = await axios.get(`/api/teams/${team_id}/players/${id}`)
      setName(res.data.name)
      setPosition(res.data.position)
      setValue(res.data.value)
      setAge(res.data.age)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getPlayer()
  }, [])

  return(
    <div style={{margin: '2em'}}>
      <Form onSubmit={handleSubmit}>
        <h1>Edit Player Form</h1>
        <Form.Field>
          <label>Player Name</label>
          <input defaultValue={name} value={name} onChange={(e) => setName(e.target.value)} placeholder='Player Name' />
        </Form.Field>
        <Form.Field>
          <label>Position</label>
          <input defaultValue={position} value={position} onChange={(e) => setPosition(e.target.value)} placeholder='Position' />
        </Form.Field>
        <Form.Field>
          <label>Value</label>
          <input defaultValue={value} value={value} onChange={(e) => setValue(e.target.value)} placeholder='Value' />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input defaultValue={age} value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' />
        </Form.Field>
        
        <Button type='submit'>Submit</Button>
        <Button onClick={() => history.push(`/teams/${team_id}`)}>Cancel</Button>
      </Form>
    </div>
  )
}





export default EditPlayerForm;