import RequestManager from "../../../utils/RequestManager/RequestManager";
import ReviewView from "./ReviewView/ReviewView";
import NewView from "./NewView/NewView";
import EditView from "./EditView/EditView";
import {useState} from "react";

const ViewManager = ({entity, isEdit}) => {
    const [mode,setMode] = useState(calcMode());
    const [userData,setUserData] = useState(entity);
    const requestManager = new RequestManager();

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

    function updateMode (newMode,data = userData)  {
        if(['new','edit','review'].includes(newMode)) {
            setMode(newMode);
            setUserData(data);
        } else {
            throw new Error('Mode is not found');
        }
    }


    switch (mode) {
        case 'new':
            return(
                <NewView
                    changeMode={updateMode}
                    sender={requestManager.sendRequest}/>
            )
        case 'review':
            return (
                <ReviewView
                    entity={userData}
                    changeMode={updateMode}
                />
            )
        case 'edit':
            return (
                <EditView
                    entity={userData}
                    changeMode={updateMode}
                    sender={requestManager.sendRequest}
                />
            )
        default:
            return(
                <NewView/>
            )
    }
}
export default ViewManager;
