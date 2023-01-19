import styles from "./NewView.module.css";
import ErrorWrapper from "../../../common/ErrorWrapper/ErrorWrapper";
import {useState} from "react";
import {setMinDate,setMaxDate} from "../../../../utils/settingExpirationDate";

const NewView = () => {
    const [fields,setFields] = useState({
        name: '',
        surname: '',
        email: '',
        dateOfBirth: '',
        cardNumber: '',
        cardExpiration: '',
        cardCvc: ''
    });

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


    return (
        <form className={styles.formNewView} noValidate={true}>
            <h1>Client form</h1>
            <fieldset className={styles.fieldset}>
                <h2>Contact information</h2>
                <ErrorWrapper>
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
                <ErrorWrapper>
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
                <ErrorWrapper>
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
                <ErrorWrapper>
                    <label className={styles.label}>
                        Birthday:
                        <input type="date"
                               min={`${new Date().getFullYear() - 100}-01-01`}
                               className={styles.input}
                               name="dateOfBirth"
                               value={fields.c}
                               onChange={(e) => changeHandler(e)}
                        />
                    </label>
                </ErrorWrapper>
            </fieldset>
            <fieldset className={styles.fieldset}>
                <h2>Payment information</h2>
                <ErrorWrapper>
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
                <ErrorWrapper>
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
                <ErrorWrapper>
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
            <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
    )
}

export default NewView;