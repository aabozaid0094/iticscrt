import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <header className="sticky-top">
            <Navbar bg="dark" expand="sm">
                <Container>
                    <Navbar.Brand href="#home">React Tasks</Navbar.Brand>
                    <Navbar.Toggle aria-controls="header_nav" />
                    <Navbar.Collapse id="header_nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="https://github.com/aabozaid0094/iticscrt" target="_blank">Code Repo</Nav.Link>
                            <Nav.Link href="#day17">Day 17</Nav.Link>
                            <Nav.Link href="#day18">Day 18</Nav.Link>
                            <Nav.Link href="#day19">Day 19</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;