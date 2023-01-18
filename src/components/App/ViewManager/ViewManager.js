import ReviewView from "./ReviewView/ReviewView";
import NewView from "./NewView/NewView";

const ViewManager = ({entity, isEdit}) => {
    return (
        <>
            <ReviewView
                entity={entity}
            />
            <NewView
                entity={entity}
            />
        </>


    )
}
export default ViewManager;
