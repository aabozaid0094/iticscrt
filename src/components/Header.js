import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">ITI Client Side Course React Task</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;