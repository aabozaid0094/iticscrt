import { PureComponent } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class Movie extends PureComponent {
    render() {
        const imgPath = "https://image.tmdb.org/t/p/w500/";
        return (
            <Col xxl="3" lg="4" sm="6" xs="12" className="my-3">
                <Card className="Movie my-3">
                    <Card.Img variant="top" src={imgPath + this.props.poster_path} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            <span className="d-flex">{this.props.overview}</span>

                        </Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{this.props.release_date}</ListGroup.Item>
                        <ListGroup.Item>{`${this.props.vote_average} (${this.props.vote_count})`}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        );
    }
}

export default Movie;