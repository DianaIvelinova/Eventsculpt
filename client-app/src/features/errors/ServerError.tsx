import { observer } from "mobx-react-lite";
import { Container, Alert } from "react-bootstrap";
import { useStore } from "../../app/stores/store";

export default observer(function ServerError() {
    const { commonStore } = useStore();

    return (
        <Container>
            <h1 className="display-4">Server Error</h1>
            <h5 className="text-danger">{commonStore.error?.message}</h5>
            {commonStore.error?.details && (
                <Alert variant="secondary" className="mt-3">
                    <h4 className="text-teal">Stack trace</h4>
                    <code style={{ marginTop: '10px', whiteSpace: 'pre-wrap' }}>
                        {commonStore.error.details}
                    </code>
                </Alert>
            )}
        </Container>
    );
});
