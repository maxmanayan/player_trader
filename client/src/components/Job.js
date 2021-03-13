import axios from 'axios'
import { useState, useEffect } from 'react'
import {useParams, useHistory} from 'react-router-dom'
// import Jobs from './Jobs';

const Job = () => {
  const [jobs, setJobs] = useState([])
  const { id } = useParams();
  // let history = useHistory();


const getJobs = async () => {
  try {
    let res = await axios.get(`/api/jobs/${id}`)
    console.log(res)
    setJobs(res.data)
    console.jog(res.data.id)
  }
  catch (error) {
    alert('error check console')
  }
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
    <div>
      {renderJobs()}
    </div> 
  )
  }

export default Job