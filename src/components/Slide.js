import Card from 'react-bootstrap/Card';

const Slide = (props) => {
    const { src, alt } = props;
    return (
        <Card className="Slide my-3">
            <Card.Body>
                <img src={src} alt={alt}></img>
            </Card.Body>
        </Card>
    );
};

export default Slide;