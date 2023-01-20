import {useState} from "react";
import styles from "./EditView.module.css";
import ErrorWrapper from "../../../common/ErrorWrapper/ErrorWrapper";
import {setMaxDate, setMinDate} from "../../../../utils/settingExpirationDate";

const EditView = (props) => {
    const [fields,setFields] = useState(props.entity);
    const [errors,setErrors] = useState([]);

    const getMessageError=(fieldName)=> {
        const error = errors.find((item)=> fieldName === item.field);

        if(error === undefined) {
            return null;
        } else {
            return error.message;
        }
    }

    /* HANDLERS */
    const changeHandler = (event) => {
        const changeState = () => {
            let state = JSON.parse(JSON.stringify(fields));
            for (let key in state) {
                if (event.target.name === key) {
                    state[key] = event.target.value;
                }
            }
            return state;
        }
        setFields(changeState());
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const validationResult = props.sender(fields,props.changeMode);

        if(validationResult.length !== 0) {
            setErrors(validationResult);
        } else {
            setErrors([]);
        }
    }

    return (
        <form
            onSubmit={(event)=>submitHandler(event)}
            className={styles.formEditView}
            noValidate={true}>
            <h1>Client form</h1>
            <fieldset className={styles.fieldset}>
                <h2>Contact information</h2>
                <ErrorWrapper message={getMessageError('name')}>
                    <label className={styles.label}>
                        Name:
                        <input type="text"
                               maxLength="1000"
                               className={styles.input}
                               name="name"
                               value={fields.name}
                               onChange={(e) => changeHandler(e)}
                        />
                    </label>
                </ErrorWrapper>
                <ErrorWrapper message={getMessageError('surname')}>
                    <label className={styles.label}>
                        Surname:
                        <input type="text" maxLength="1000"
                               className={styles.input}
                               name="surname"
                               value={fields.surname}
                               onChange={(e) => changeHandler(e)}
                        />
                    </label>
                </ErrorWrapper>
                <ErrorWrapper message={getMessageError('email')}>
                    <label className={styles.label}>
                        Email:
                        <input type="email"
                               maxLength="320"
                               className={styles.input}
                               name="email"
                               value={fields.email}
                               onChange={(e) => changeHandler(e)}
                        />
                    </label>
                </ErrorWrapper>
                <ErrorWrapper message={getMessageError('dateOfBirth')}>
                    <label className={styles.label}>
                        Birthday:
                        <input type="date"
                               min={`${new Date().getFullYear() - 100}-01-01`}
                               className={styles.input}
                               name="dateOfBirth"
                               value={fields.dateOfBirth}
                               onChange={(e) => changeHandler(e)}
                        />
                    </label>
                </ErrorWrapper>
            </fieldset>
            <fieldset className={styles.fieldset}>
                <h2>Payment information</h2>
                <ErrorWrapper  message={getMessageError('cardNumber')}>
                    <label className={styles.label}>
                        Card:
                        <input type="text"
                               maxLength="23"
                               className={styles.input}
                               name="cardNumber"
                               value={fields.cardNumber}
                               onChange={(e) => changeHandler(e)}
                        />
                    </label>
                </ErrorWrapper>
                <ErrorWrapper  message={getMessageError('cardExpiration')}>
                    <label className={styles.label}>
                        Expiration:
                        <input type="month"
                               min={setMinDate()}
                               max={setMaxDate()}
                               className={styles.input}
                               name="cardExpiration"
                               value={fields.cardExpiration}
                               onChange={(e) => changeHandler(e)}
                        />
                    </label>
                </ErrorWrapper>
                <ErrorWrapper message={getMessageError('cardCvc')}>
                    <label className={styles.label}>
                        CVC:
                        <input type="password"
                               maxLength="4"
                               inputMode="numeric"
                               className={styles.input}
                               name="cardCvc"
                               value={fields.cardCvc}
                               onChange={(e) => changeHandler(e)}
                        />
                    </label>
                </ErrorWrapper>
            </fieldset>
            <button type="submit"
                    className={styles.submitButton}
            >Submit</button>
        </form>
    )
}

export default EditView;
