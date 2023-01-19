import ReviewView from "./ReviewView/ReviewView";
import NewView from "./NewView/NewView";
import EditView from "./EditView/EditView";
import {useState} from "react";

const ViewManager = ({entity, isEdit}) => {
    const [mode,setMode] = useState(calcMode());

    function calcMode() {
        if (Object.keys(entity).length === 0) {
            return 'new';
        }
        if (!isEdit) {
            return 'review';
        } else {
            return 'edit';
        }
    }

    switch (mode) {
        case 'new':
            return(
                <NewView/>
            )
        case 'review':
            return (
                <ReviewView entity={entity}/>
            )
        case 'edit':
            return (
                <EditView entity={entity}/>
            )
        default:
            return(
                <NewView/>
            )
    }
}
export default ViewManager;
