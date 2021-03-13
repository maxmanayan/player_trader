import {useState, useEffect} from 'react'
import axios from 'axios'
import Job from './Job'
    
const Jobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() =>{
        getJobs()
    }, [])

    const getJobs = async () =>{
        try{
            let res = await axios.get('/api/jobs')
            setJobs(res.data)
        } catch(err){
            alert('error check console')
        }
    }

    const renderJobs =() =>{
        return jobs.map( job => {
            return (
                <div>
                <h1>{job.id}</h1>
                <p>{job.team}</p>
                <p>{job.position}</p>
                <p>{job.salary}</p>
                <p>{job.location}</p>
                </div>
            )
        })
    }
    return (
        <div>
             <h1>Jobs</h1>
             {renderJobs()}
        </div>
    
    
    )
    }
    
    export default Jobs