import NavBar from '../components/Navbar'
import { useState, useEffect } from 'react'
import BookCard from '../components/Card'
import { Row, Col } from 'react-bootstrap'

const HomeScreen = ({fetchBooks}) =>{
  const [books, setBooks] = useState([])
  useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await fetchBooks()
      setBooks(booksFromServer)
    }
    getBooks()
  }, [])
    return (
        <>
            <NavBar showSearchBar={true}/>
            
                <div className='container'>
                {books.length>0?(
                    <Row xs={1} md={2}>
                    {books.map((book) => 
                        <Col key={book._id}>
                            <BookCard book={book}/>
                        </Col>
                    )}
                    </Row>
                    ):<p>No Books to show</p>}
                </div>
        </>
    )
}
export default HomeScreen