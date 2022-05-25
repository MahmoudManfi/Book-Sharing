import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

const AddBook = ({ onAdd }) => {
  const [title, setTitle] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      alert('Please add the book title')
      return
    }

    onAdd({ title })

    setTitle('')
  }

  return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Book Title</Form.Label>
                <Form.Control placeholder="Enter Book Title" value={title} />
            </Form.Group>
            <Button variant="outline-success" type="submit"> Add Book </Button>
        </Form>
    
  )
}

export default AddBook