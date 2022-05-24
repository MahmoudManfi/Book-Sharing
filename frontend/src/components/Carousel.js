
import {Carousel, Image} from 'react-bootstrap'
import { run as runHolder } from 'holderjs/holder';
import img from '../img.jpeg'

/* import firstSlide from 'holder.js/800x400?text=First slide&bg=373940'
import secondSlide from 'holder.js/800x400?text=First slide&bg=373940'
import thirdSlide from 'holder.js/800x400?text=First slide&bg=373940'
 */const WelcomeCarousel = () =>{
    return (
        <Carousel>
        <Carousel.Item>
            <Image
            className="d-block w-100"
            src="holder.js/800x400?text=ZBOOk&bg=373940"
            alt="First slide"
            background={img}
            />
            <Carousel.Caption>
            <h3>Reading Is Much Easier Now</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
            className="d-block w-100"
            src="holder.js/800x400?text=Sharing Knowledge&bg=282c34"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>You Can Exchange Books</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
            className="d-block w-100"
            src="holder.js/800x400?text=Earn Money&bg=20232a"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Through Selling Your Old Books</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

    )
}
export default WelcomeCarousel

