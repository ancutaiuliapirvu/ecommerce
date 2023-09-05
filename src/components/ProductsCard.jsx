import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductsCard() {
    return(
        <div className="products-card">
            <Card bg='primary' style={{width: '25%'}}>
                <Card.Img />
                <Card.Body>
                    <Card.Title>Nume</Card.Title>
                    <Card.Text>Price</Card.Text>
                    <Button>Detalii</Button>
                    <Button>Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductsCard;