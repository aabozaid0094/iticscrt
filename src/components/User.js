import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const User = (props) => {
    const { name, phone, website, company, address} = props;
    return (
        <Col xxl="3" lg="4" sm="6" xs="12" className="my-3">
            <Card className="User">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span className="d-flex">{company.name}</span>
                        <span className="d-flex">{phone}</span>
                    </Card.Text>
                    <Button variant="secondary" className="me-2 my-2">{website}</Button>
                    <Button variant="primary" className="me-2 my-2" target="_blank" href={"https://www.google.com/maps/search/?api=1&query=" + address.geo.lat + "," + address.geo.lng}>Map Address</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default User;