import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <Container>
            <h1>Home</h1>
            <h3> <Link to='/activities'>activities</Link></h3>
        </Container>
    )
}