import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = ({showSearchBar}) => {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
        <Navbar.Brand href="/">ZBOOK</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <>
        {showSearchBar?(
            <>
                <div className="position-absolute end-50">
                    <Button href='/book/addBook' variant="outline-success">Add Book</Button>
                </div>
                <div className="position-relative start-50">
                    <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </div>
                <div className="position-absolute end-0">
                    
                    <Button variant="outline-success">Logout</Button>
                </div>
            </>
        ):<span></span>}
        </>
        </Navbar.Collapse>
    </Container>
    </Navbar>    
    )
}

export default NavBar
