import { Button, Container, Nav, Navbar, Image, Dropdown } from "react-bootstrap";
import { useStore } from "../stores/store";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

export default observer(function NavBar() {

    const {userStore: {user, logout}} = useStore();

    return (
      <header>
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
          <Container>
            <Navbar.Brand href="/">
              <img
                className="d-inline-block align-top"
                src="/cocktail.png"
                alt="cocktail"
                width="25"
                height="25"
              />{" "}
              Eventsculpt
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/activities">Activities</Nav.Link>
              <Nav.Link href="/errors">Error</Nav.Link>
              <Nav.Link href="/createActivity">
                <Button variant="light">Create Activity</Button>
              </Nav.Link>
              <Nav.Item className="ml-auto">
                <Image src={user?.image || "/cute.png"} roundedCircle width={40} height={40} className="mr-2" />
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="user-dropdown">
                    {user?.displayName}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to={`/profiles/${user?.username}`}>
                      My Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </header>
    );
});
