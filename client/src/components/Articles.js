import axios from 'axios'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Card, Button, Container, CardMeta, CardHeader } from 'semantic-ui-react'
// import { useParams, useHistory, Link } from 'react-router-dom'
// import { Button, Card } from 'semantic-ui-react'
//import NewArticleForm from './ArticleForms'


    const Articles =(props) => {
        const {title, author, body, source, id} = props
        const [articles,setArticles] = useState([])

        useEffect (()=>{
            console.log ('use Effect being used')
            getArticles()
        }, [])

        const getArticles = async () => {
            try {
              let res = await axios.get(`/api/articles`)
              console.log (res.data)
              setArticles(res.data)
            } catch (err) {
              alert('error check console')
            }
          }




      

        const renderArticles =()=>{
            return articles.map( article => {
              return(
                        <Card to={`article/${id}`}>
                            <div>
                                {article.title}
                                {article.author}
                                {article.body}
                                {article.source}
                            </div>
                        </Card>
                    )
                })
              }



        return (
        
            <div>
                <Container fluid color='pink' >
                        <h1>Articles</h1>
                    <Link to={`articles/new`}>
                    <Button>New Article</Button>
                    </Link>                   
                    
                        <div>
                            <CardHeader>{title}</CardHeader>
                            <CardMeta>{author}</CardMeta>
                            <CardMeta>{body}</CardMeta>
                            <CardMeta>{source}</CardMeta>
                        </div> 
                    
                </Container>
                    {renderArticles()}
            </div>
        )
        }
    
    export default Articles


    // <Card fluid color='blue'>
    // <div style={{display:'flex', justifyContent:'space-between', padding:'10px'}}>
    // <h1>Teams</h1>
    // <Link to={`/teams/new`}>
    // <Button>New Team Form</Button>
    // </Link>