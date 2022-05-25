import LoginForm from '../components/loginForm'
import NavBar from '../components/Navbar'
import AddBook from '../components/AddBookForm'

const FormScreen = ({isLoginForm, onAdd, login, userId}) =>{
    return (
        <>
            <NavBar showSearchBar={false}/>
            <div className='container'>
                {isLoginForm?(<LoginForm login={login}/>):(<AddBook onSubmit={onAdd} userId={userId}/>)}
            </div>
        </>
    )
}
export default FormScreen

