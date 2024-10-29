import { Button, Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">   
                        <img className="d-inline-block align-top" src="/cocktail.png" alt="cocktail" width="25" height="25" /> Eventsculpt
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/activities">Activities</Nav.Link>
                        <Nav.Link href="/createActivity">
                            <Button variant="light">Create Activity</Button>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
