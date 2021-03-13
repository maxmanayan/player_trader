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
                               <Card.Header>
                                    {article.title}
                                </Card.Header>
                                <Card.Description>
                                    {article.author}
                                </Card.Description>
                                {article.body}
                                {article.source}
                            </div>
                        </Card>
                    )
                })
              }



        return (
            <div>
                        <h1>Articles</h1>
                    <Link to={`articles/new`}>
                    <Button>New Article</Button>
                    </Link>                   
                        <div>
                            <div class="ui items">
                                <div class="item">
                                    <div class="image">
                                    
                                    </div>
                                    <div class="content">
                                    <a class="header">Header</a>
                                    <div class="meta">
                                        <span>Description</span>
                                    </div>
                                    <div class="description">
                                        <p></p>
                                    </div>
                                    <div class="extra">
                                        Additional Details
                                    </div>
                                </div>
                            </div>
                                                               
                        </div>

                        </div>
                                   
                    {renderArticles()}
            </div>
        )
        }
    
    export default Articles




  