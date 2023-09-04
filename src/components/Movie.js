import { Component } from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PuffLoader from "react-spinners/ClipLoader";

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { movie: null };
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/photos/1')
            .then(response => this.setState({ movie: response.data }));
    }
    render() {
        return (
            (!this.state.movie)
                ? <PuffLoader color="#dee2e6" />
                : (
                    <div className="Movie d-flex flex-column align-items-center text-center">
                        <Card className="my-3">
                            <Card.Body>
                                <Card.Title>{this.state.movie.title}</Card.Title>
                                <Card.Text>
                                    <img src={this.state.movie.thumbnailUrl} alt={"Movie" + this.state.movie.id}></img>
                                </Card.Text>
                                <Button variant="secondary" className="me-2 my-2" target="_blank" href={this.state.movie.url}>Full Image</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
        );
    }
}

export default Movie;