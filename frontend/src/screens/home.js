import NavBar from '../components/Navbar'
import BookCard from '../components/Card'
import { Row, Col } from 'react-bootstrap'

const HomeScreen = ({books}) =>{
/*       // Add Task
  const addBook = async (book) => {
    const res = await fetch('http://localhost:5000/books', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

 */    return (
        <>
            <NavBar showSearchBar={true}/>
            
                <div className='container'>
                {books.length>1?(
                    <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: books.length }).map((book) => (
                        <Col>
                            <BookCard book={book}/>
                        </Col>
                    ))}
                    </Row>
                    ):<p>No Books to show</p>}
                </div>
        </>
    )
}
export default HomeScreen