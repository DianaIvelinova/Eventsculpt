import { Container, Nav, Navbar, Image, Dropdown } from "react-bootstrap";
import { useStore } from "../stores/store";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

export default observer(function NavBar() {

    const {userStore: {user, logout}} = useStore();

    return (
      <header>
        <Navbar className="navbar navbar-dark bg-dark" fixed="top">
          <Container>
            <Navbar.Brand href="/activities">
              <img
                className="d-inline-block align-top me-2"
                src="/cocktail.png"
                alt="cocktail"
                width="30"
                height="25"
              />
              <span className="fw-bold text-light">Eventsculpt</span>
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Item className="d-flex flex-row">
                <Link to={`/profiles/${user?.username}`}>
                  <Image src={user?.image || "/user.svg"} roundedCircle width={40} height={40} className="me-2 user-image" />
                </Link>
                <Dropdown>
                  <Dropdown.Toggle className="fw-bold" variant="light"> {user?.displayName} </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to={"/createActivity"}> Create Activity </Dropdown.Item>
                    <Dropdown.Item onClick={logout}> Logout </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </header>
    );
});
