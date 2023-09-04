import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Users from './components/Users';
import Slider from './components/Slider';
import Movies from './components/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <Users></Users>
                <hr></hr>
                <Slider></Slider>
                <Movies></Movies>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;