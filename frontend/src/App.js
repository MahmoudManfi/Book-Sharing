import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FormScreen from './screens/form'
import HomeScreen from './screens/home'
import WelcomeScreen from './screens/welcome'

const App = () => {
  const [books, setBooks] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await fetchBooks()
      setBooks(booksFromServer)
    }

    getBooks()
  }, [])

  // Fetch Books
  const fetchBooks = async () => {
    const res = await fetch('http://localhost:5000/book')
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
  const addBook = async (book) => {
    const res = await fetch('http://localhost:5000/book', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(book),
    })

    const data = await res.json()

    setBooks([...books, data])

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

  // Fetch User= Reader
  const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:5000/reader/${id}`)
    const data = await res.json()

    return data
  }

  return (
    <Router>
        <Routes>
          <Route path='/' element={<WelcomeScreen/>}/>
          <Route path='/reader/login' element={<FormScreen isLoginForm={true}/>
          }/>
          <Route path='/book/allBooks' element={<HomeScreen books={[books]}/>}/>
          <Route path='/book/addBook' element={<FormScreen isLoginForm={false}/>}/>
        </Routes>
    </Router>
  )
}

export default App