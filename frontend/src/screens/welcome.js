import NavBar from '../components/Navbar'
import {Button} from 'react-bootstrap'
import WelcomeCarousel from '../components/Carousel'
const WelcomeScreen = () =>{
    return (
        <>
            <NavBar showSearchBar={false}/>
            <div className='container'>
                <WelcomeCarousel/>
                <div className="d-grid gap-2">
                    <Button className='mt-5' variant="outline-success" size='lg' href='/reader/login'>Login</Button>
                </div>                
            </div>
        </>
    )
}
export default WelcomeScreen