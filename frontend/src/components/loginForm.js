import { useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginForm = ({login}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
      e.preventDefault()
    
      setEmail(e.target.email)
      setPassword(e.target.password)
      login({ email, password })
  
      setEmail('')
      setPassword('')
    }
      return (
        <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
{/*         <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
 */}        <Button variant="outline-success" type="submit" onSubmit={onSubmit}>
            Login
        </Button>
        </Form>
    )
}
export default LoginForm

