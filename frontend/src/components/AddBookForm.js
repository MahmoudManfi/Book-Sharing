import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

const AddBook = ({ onAdd, userId }) => {
  const [title, setTitle] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!title) {
      alert('Please add a title')
      return
    }
    console.log(title)
    onAdd({ title, userId })

    setTitle('')
  }
/*   const getInputValue = (event)=>{
    const value = event.target.value;
    console.log(value)
  }
  onChange={getInputValue}
 */
  return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type='text' placeholder="Enter Book Title"  value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Button variant="outline-success" type="submit" onSubmit={onSubmit}> Add Book </Button>
        </Form>
    
  )
}

export default AddBook