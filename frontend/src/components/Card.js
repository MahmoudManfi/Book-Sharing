import {Card, Button, CardGroup, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cover from '../welcome.jpg'
import { run as runHolder } from 'holderjs/holder';

const BookCard = ({book}) =>{
    return (
        <div className='container'>
            <Card>
                <Card.Img variant="top" src={cover} />
                <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="outline-success">Exchange</Button>
                </Card.Body>
            </Card>
        </div>
/*         <CardGroup className='container'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="bottom" src={cover} />
        <Card.Body>
            <Card.Title>The Beginning After The End V10</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="outline-success">Go somewhere</Button>
        </Card.Body>
        </Card>
        </CardGroup>
 */    )
}
export default BookCard

