import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom'
import FormScreen from './screens/form'
import HomeScreen from './screens/home'
import WelcomeScreen from './screens/welcome'
let globalId = ''

const App = () => {
  const [userId, setUserId] = useState('')
  const [books, setBooks] = useState([])

  useEffect(() => {
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
  // Fetch Books
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
  const addBook = async (title, userId) => {
    console.log(title)
    console.log(userId)
    const res = await fetch('http://localhost:5000/book/addBook', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({title, userId}),
    })
    console.log(res.body)

    const data = await res.json()
    console.log(data)
    if(res.status === 200)
      setBooks([...books, data])

/*     const navigate = useNavigate();
 */    res.status === 200
      ?(
        <Route exact path='/'>
          <Navigate to="/book/allBooks"/>
        </Route>
      )
      : alert(data.error);

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
    const body = {email, password}
    const res = await fetch('http://localhost:5000/reader/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(email, password),
    })

    const data = await res.json()
/*     const navigate = useNavigate();
 */
    if(res.status === 200){
      setUserId(data._id)
    }
    res.status === 200
      ?(
        <Navigate to="/book/allBooks"/>
      )
      : alert(data.error);
      console.log('globalId')
      console.log(globalId)
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

export {App, globalId}