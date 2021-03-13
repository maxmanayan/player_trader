import {useState, useEffect} from 'react'
import axios from 'axios'
import Job from './Job'
import { Button, Card, Grid } from 'semantic-ui-react'
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
                <div style={{margin: '2em'}}>
                <Card  border='dark' style={{ width: '18rem', display: 'flex', justifyContent: 'space-between'}}>
                    <Link to={`/jobs/${job.id}`}>
                        <Card.Header>{job.team}</Card.Header>
                    </Link>

                    <Card.Meta>position: {job.position}</Card.Meta>
                    <Card.Meta>salary: ${job.salary} million</Card.Meta>
                    <Card.Meta>location: {job.location}</Card.Meta>
                    <Card.Content>
                        <Link to={`/jobs/${job.id}/edit`}>
                            <Button>Edit</Button>
                        </Link>
                        <Button onClick={()=>deleteJob(job.id)} color='red'>Delete</Button>
                    </Card.Content>
                </Card>
                </div>
            )
        })
    }
    return (
        <div className='jobs'>
            <Card fluid color='gray' style={{background: 'whitesmoke'}}>
                <Card.Content style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginLeft: '-10%'}}>
                  <Card.Header style={{fontSize: '2em'}}>Jobs</Card.Header>

                    <Link to={`/jobs/new`}>
                        <Button style={{display: 'flex' , justifyContent: 'space-between' }} color='green'>New Job</Button>
                    </Link>

                </Card.Content>
            </Card>
             <Grid style={{display: 'flex', justifyContent: 'center'}}>
                {renderJobs()} 

             </Grid>
        </div>
    
    
    )
    }
    
    export default Jobs