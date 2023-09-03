import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">Day 17</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;