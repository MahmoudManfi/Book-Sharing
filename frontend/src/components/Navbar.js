import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = ({showSearchBar}) => {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
        <Navbar.Brand href="/">ZBOOK</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <div class="position-absolute end-0">
            {showSearchBar?(
                <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        ):<span></span>}
        </div>
{/*         <div class="position-absolute end-0"><Button href='/login' variant="outline-success">Login</Button></div>
 */}        </Navbar.Collapse>
    </Container>
    </Navbar>    
    )
}

export default NavBar
