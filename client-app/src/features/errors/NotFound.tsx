import { Link } from "react-router-dom";
import { Button, Card, Image } from "react-bootstrap";

export default function NotFound() {
    return (
        <Card className="text-center m-5 p-5">
            <h1>
                <Image width={100} height={100} aria-label="search-icon" src="/search.svg"/>
            </h1>
            <h4 className="mb-4">
                Oops - we've looked everywhere but could not find what you are looking for!
            </h4>
            <Link to='/activities'>
                <Button variant="dark"> Return to activities page </Button>
            </Link>
        </Card>
    );
}
