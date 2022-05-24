import LoginForm from '../components/loginForm'
import NavBar from '../components/Navbar'
import { Link } from 'react-router-dom'

const LoginScreen = () =>{
    return (
        <>
            <NavBar showSearchBar={false}/>
            <div className='container'>
                <LoginForm />
            </div>
        </>
    )
}
export default LoginScreen

