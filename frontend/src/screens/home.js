import NavBar from '../components/Navbar'
import { Link } from 'react-router-dom'
import BookCard from '../components/Card'

const HomeScreen = () =>{
    return (
        <>
            <NavBar showSearchBar={true}/>
            <BookCard/>
        </>
    )
}
export default HomeScreen

