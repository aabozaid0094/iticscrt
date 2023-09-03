import './App.css';
import { Component } from 'react';
import Users from './components/Users';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <Users></Users>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;