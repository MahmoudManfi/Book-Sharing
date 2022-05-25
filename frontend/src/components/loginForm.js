import { useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginForm = ({login}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)

        if (!email) {
        alert('Please enter your email')
        return
        }
        if (!password) {
        alert('Please enter your password')
        return
        }
        
        login({ email, password })
  
        setEmail('')
        setPassword('')
    }
    
      return (
        <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Form.Text className="text-muted" >
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type ='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
{/*         <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
 */}        <Button variant="outline-success" type="submit" href='/book/allBooks' onSubmit={onSubmit}>
            Login
        </Button>
        </Form>
    )
}
export default LoginForm

