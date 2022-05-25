import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom'
import AddBook from './components/AddBookForm'
import FormScreen from './screens/form'
import HomeScreen from './screens/home'
import WelcomeScreen from './screens/welcome'

const App = () => {
  const [userId, setUserId] = useState('')
  const [books, setBooks] = useState([])

/*   useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await fetchBooks()
      console.log('booksFromServer')
      console.log(booksFromServer)
      setBooks(booksFromServer)
      console.log('books')
      console.log(books)
    }
    
    getBooks()
  }, [])
 */  // Fetch Books
  const fetchBooks = async () => {
    const res = await fetch('http://localhost:5000/book/allBooks')
    const data = await res.json()
    return data
  }

  // Fetch Book
  const fetchBook = async (id) => {
    const res = await fetch(`http://localhost:5000/book/${id}`)
    const data = await res.json()

    return data
  }

  // Add Book
  const addBook = async (bookTitle, userId) => {
    const res = await fetch('http://localhost:5000/book/addBook', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({bookTitle, userId}),
    })

    const data = await res.json()
    if(data.status === 200)
      setBooks(fetchBooks())
/*     const navigate = useNavigate();
 */    data.status === 200
      ?(
        <Navigate to="/book/allBooks"/>
      )
      : alert(data.error);
    //setBooks([...books, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newBook = { id, ...Book }
    // setBooks([...books, newBook])
  }


  // Delete Book
  const deleteBook = async (id) => {
    const res = await fetch(`http://localhost:5000/book/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setBooks(books.filter((book) => book.id !== id))
      : alert('Error Deleting This Book')
  }

  // Add user
  const addUser = async (email, password) => {
    const res = await fetch('http://localhost:5000/reader/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    })

    const data = await res.json()
/*     const navigate = useNavigate();
 */    data.status === 200
      ?(
        <Navigate to="/book/allBooks"/>
      )
      : alert(data.error);

      setUserId(data._id)

  }
  return (
    <Router>
        <Routes>
          <Route path='/' element={<WelcomeScreen/>}/>
          <Route path='/reader/login' element={<FormScreen isLoginForm={true} onAdd= {addBook} login={addUser} userId={userId} />
          }/>
          <Route path='/book/addBook' element={<FormScreen isLoginForm={false} onAdd= {addBook} login={addUser} userId={userId} />}/>
          <Route path='/book/allBooks' element={<HomeScreen fetchBooks={fetchBooks}/>}/>
        </Routes>
    </Router>
  )
}

export default App