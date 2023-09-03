import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
                    <div className="p-2">Copyright © 2023 A. Abo Zaid.</div>
                    <div className="p-2">All Rights Reserved.</div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;