import { memo } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Person = (props) => {
    const { name, age} = props;
    return (
        <Col xxl="3" lg="4" sm="6" xs="12" className="my-3">
            <Card className="Person">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{age}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default memo(Person);