import axios from "axios";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";



const NewArticlesForm = ()=> {
    const {id} = useParams()
    const history = useHistory()
  
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    const [source, setSource] = useState('')
  
  
    const handleSubmit = async () => {
      try {
        await axios.post(`/api/articles`, {title, author, body, source})
        history.push(`/articles`)
      } catch (err) {
        console.log(err)
      }
    }


  return(
    <div style={{margin: '2em'}}>
    <Form onSubmit={handleSubmit}>
      <h1>New Article</h1>
      <Form.Field>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title:' />
      </Form.Field>
      <Form.Field>
        <label>Author</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Author:' />
      </Form.Field>
      <Form.Field>
        <label>Body</label>
        <input value={body} onChange={(e) => setBody(e.target.value)} placeholder='Body:' />
      </Form.Field>
      <Form.Field>
        <label>Source</label>
        <input value={source} onChange={(e) => setSource(e.target.value)} placeholder='Source:' />
      </Form.Field>
      
      <Button type='submit'>Submit</Button>
      <Button onClick={() => history.push(`/articles`)}>Cancel</Button>
    </Form>

  </div>
  )
}


export default NewArticlesForm