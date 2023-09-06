import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Users from './components/Users';
import Slider from './components/Slider';
import Movies from './components/Movies';
import People from './components/People';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <div data-bs-spy="scroll" data-bs-target="#header_nav" tabIndex="0">
                    <section id="day17">
                        <h2 className="container">Day 17</h2>
                        <Users></Users>
                        <hr className="container"></hr>
                    </section>
                    <section id="day18">
                        <h2 className="container">Day 18</h2>
                        <Slider></Slider>
                        <Movies></Movies>
                        <hr className="container"></hr>
                    </section>
                    <section id="day19">
                        <h2 className="container">Day 19</h2>
                        <People></People>
                        <hr className="container"></hr>
                    </section>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;