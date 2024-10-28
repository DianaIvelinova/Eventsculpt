import { Button, Container, Nav, Navbar } from "react-bootstrap";

interface Props {
    openForm: () => void;
}

export default function NavBar({ openForm }:Props) {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#">   
                        <img className="d-inline-block align-top" src="/cocktail.png" alt="cocktail" width="25" height="25" /> Eventsculpt
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#Activities">Activities</Nav.Link>
                        <Button onClick={openForm} variant="light">Create Activity</Button>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
