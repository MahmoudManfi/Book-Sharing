import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import {globalId} from '../App'

const AddBook = ({ onAdd, userId }) => {
  const [title, setTitle] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!title) {
      alert('Please add a title')
      return
    }
    console.log(title)
    onAdd(title, globalId )

    setTitle('')
  }
  return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type='text' placeholder="Enter Book Title"  value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Button variant="outline-success" type="submit" onSubmit={onSubmit}/* href="/book/allBooks" */> Add Book </Button>
        </Form>
    
  )
}

export default AddBook