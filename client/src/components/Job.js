import axios from 'axios'
import { useState, useEffect } from 'react'
import {useParams, useHistory, Link} from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
// import Jobs from './Jobs';

const Job = () => {
  const [jobs, setJobs] = useState([])
  const { id } = useParams();
  let history = useHistory();


const getJobs = async () => {
  try {
    let res = await axios.get(`/api/jobs/${id}`)
    console.log(res.data)
    setJobs(res.data.job)
    console.log(res.data.id)
  }
  catch (error) {
    alert(error)
  }
}
const deleteJob = async () => {
  let res = await axios.delete(`/api/jobs/${id}`)
  history.pushState('/jobs')
}

useEffect(() => {
  getJobs()
}, [])

const renderJobs = () => {
  return jobs.map( job => {
    return (
      <h1>{job.id}</h1>
    )
  })
}

  return(
    <>
    <Button onClick={()=>history.goBack()}>Go Back</Button>
    <Card>
      <Card.Content>
        <Card.Header style={{display:'flex', justifyContent: 'space between'}}>{jobs.team}</Card.Header>
        <Card.Meta>{jobs.position}</Card.Meta>
        <Card.Meta>{jobs.salary}</Card.Meta>
        <Card.Meta>{jobs.location}</Card.Meta>
        <Button color='red' onClick={deleteJob}>Delete</Button>
        <Link to={{ pathname:`/jobs/${id}/edit`, jobs: jobs}}>
          <Button>Update</Button>
        </Link>
      </Card.Content>
    </Card>
    </>
  )
  }

export default Job