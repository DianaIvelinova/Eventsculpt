import { Col, Row, Spinner } from "react-bootstrap";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import ActivityFilters from "./ActivityFilters";
import { PagingParams } from "../../../app/models/pagination";
import InfiniteScroll from "react-infinite-scroller";
import ActivityListItemPlaceholder from "./ActivityListItemPlaceHolder";

export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, setPagingParams, pagination, activityRegistry } = activityStore;
    const [loadingNext, setLoadingNext] = useState(false);

    function handleGetNext() {
        setLoadingNext(true);
        setPagingParams(new PagingParams(pagination!.currentPage + 1));
        loadActivities().then(() => setLoadingNext(false));
    }

    useEffect(() => {
        loadActivities();
    }, [loadActivities])

    return (
        <>
            <Row>
                <Col width="10">
                {activityStore.loadingInitial && activityRegistry.size === 0 && !loadingNext ? (
                    <>
                        <ActivityListItemPlaceholder />
                        <ActivityListItemPlaceholder />
                    </>
                ) : (
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={handleGetNext}
                            hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
                            initialLoad={false}
                        >
                            <ActivityList />
                        </InfiniteScroll>
                    )}
                </Col>
                <Col width="6">
                    <ActivityFilters />              
                </Col>
                <Col width="10">
                {loadingNext && (
                    <div className="d-flex justify-content-center align-items-center">
                        <Spinner animation="border" role="status" />
                    </div>
                )}
                </Col>
            </Row>
        </>
    )
})