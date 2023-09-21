import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProductsCard.css'


//TODO: add icon instead of add to cart text
//TODO: CSS formatting - not really a priority until the end


function ProductsCard(props) {

    const {oneProduct} = props;
    console.log('oneProduct', oneProduct);
    return(
        <div className="products-card">
            <Card className='card-bootstrap'>
                <Card.Body>
                    <Card.Img src={oneProduct.thumbnail} className='product-image'/>
                    <Card.Title style={{'margin-top': '1rem'}}>{oneProduct.title}</Card.Title>
                    <Card.Text>{oneProduct.price + '$'}</Card.Text>
                    <div className='product-buttons'>
                        <Button variant="dark" style={{'margin-right': '1rem'}}><Link to='/products/details'>Detalii</Link></Button>
                        <Button variant="dark">Add to cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductsCard;