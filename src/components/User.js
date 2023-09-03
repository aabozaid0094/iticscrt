import Card from 'react-bootstrap/Card';

const User = (props) => {
    const { name, phone, website } = props;
    return (
        <Card className="User">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <div>{phone}</div>
                    <div>{website}</div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default User;