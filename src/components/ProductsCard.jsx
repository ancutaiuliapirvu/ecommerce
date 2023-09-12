import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


//TODO: transform mock data to actual data
//TODO: add actual product image
//TODO: add icon instead of add to cart text
//TODO: CSS formatting - not really a priority until the end


function ProductsCard() {
    return(
        <div className="products-card">
            <Card bg='primary' style={{width: '25%'}}>
                <Card.Img />
                <Card.Body>
                    <Card.Title>Nume</Card.Title>
                    <Card.Text>Price</Card.Text>
                    <Button><Link to='/products/details'>Detalii</Link></Button>
                    <Button>Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductsCard;