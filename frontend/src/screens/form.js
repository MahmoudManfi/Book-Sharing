import LoginForm from '../components/loginForm'
import NavBar from '../components/Navbar'
import AddBook from '../components/AddBookForm'

const FormScreen = ({isLoginForm}) =>{
    return (
        <>
            <NavBar showSearchBar={false}/>
            <div className='container'>
                {isLoginForm?(<LoginForm />):(<AddBook/>)}
            </div>
        </>
    )
}
export default FormScreen

