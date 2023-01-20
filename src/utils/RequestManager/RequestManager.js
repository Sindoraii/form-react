import Validator from "./Validator/Validator";
import {outputMapper} from "./outputMapper";
import {submitter} from "./submitter";

class RequestManager {
    sendRequest(userData,updaterMode) {
        const validator = new Validator(userData);
        const errors = validator.validate();

        if(errors.length === 0) {
            const output = outputMapper(userData);
            const response = submitter(output);
            response.then( () => {
                /* set new user data and change view mode */
                updaterMode('review',userData);

            });
        }
        return errors;
    }

}
export default RequestManager;
