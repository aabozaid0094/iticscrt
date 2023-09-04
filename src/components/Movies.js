import { Component } from 'react';
import Axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Movie from './Movie';
import PuffLoader from "react-spinners/ClipLoader";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = { movies: [] };
    }
    componentDidMount() {
        const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
        const url = "https://api.themoviedb.org/3";
        const path = "/discover/movie?sort_by=popularity.desc";
        const apiUrl = (url, path, apiKey) => url + path + apiKey;
        Axios.get(apiUrl(url, path, apiKey))
            .then(response => {
                this.setState({ movies: response.data.results });
                // console.log(response.data);
            });
    }
    render() {
        return (
            <Container className="Movies">
                <Row className="justify-content-center">
                {
                    (!this.state.movies.length>0)
                        ? <PuffLoader className="my-3" color="#dee2e6" />
                        : this.state.movies.map(movie => <Movie key={movie.id} {...movie}></Movie>)
                }
                </Row>
            </Container>
        );
    }
}

export default Movies;