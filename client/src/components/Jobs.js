import {useState, useEffect} from 'react'
import axios from 'axios'
import Job from './Job'
import { Button, Card } from 'semantic-ui-react'
import {Link, useHistory, useParams} from 'react-router-dom'
    
const Jobs = () => {
// const {id } = useParams()

    const [jobs, setJobs] = useState([])
    let history = useHistory()

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

    const deleteJob = async (id) => {
        let res = await axios.delete(`/api/jobs/${id}`)
        history.push('/jobs')
        window.location.reload()
    }

    const renderJobs =() =>{
        return jobs.map( job => {
            return (
                <Card>
                <Card.Content>{job.id}</Card.Content>
                <Card.Header>{job.team}</Card.Header>
                <Card.Meta>{job.position}</Card.Meta>
                <Card.Description>{job.salary}</Card.Description>
                <Card.Description>{job.location}</Card.Description>
                <Link to={`/jobs/${job.id}/edit`}>
                <Button>Edit</Button>
                </Link>
                <Button onClick={()=>deleteJob(job.id)} color='red'>Delete</Button>
                </Card>
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