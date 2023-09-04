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
                <h2 className="container">Day 17</h2>
                <Users></Users>
                <hr className="container"></hr>
                <h2 className="container">Day 18</h2>
                <Slider></Slider>
                <Movies></Movies>
                <hr className="container"></hr>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;