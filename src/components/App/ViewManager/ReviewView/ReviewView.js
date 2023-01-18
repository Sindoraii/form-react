import styles from  "./ReviewView.module.css";
import ErrorWrapper from "../../../common/ErrorWrapper/ErrorWrapper";

const ReviewView = (props) => {
    return(
        <form className={styles.form} >
            <h1>Client form</h1>
            <fieldset  className={styles.fieldset} disabled={true}>
                <h2>Contact information</h2>
                <ErrorWrapper>
                    <label className={styles.label}>
                        Name:
                        <input type="text"
                               readOnly={true}
                               className={styles.input}
                               value={props.entity.name}
                        />
                    </label>
                </ErrorWrapper>
                <ErrorWrapper >
                    <label className={styles.label}>
                        Surname:
                        <input type="text"
                               readOnly={true}
                               className={styles.input}
                               value={props.entity.surname}
                        />
                    </label>
                </ErrorWrapper>
                <ErrorWrapper>
                    <label className={styles.label}>
                        Email:
                        <input type="email"
                               readOnly={true}
                               className={styles.input}
                               value={props.entity.email}
                        />
                    </label>
                </ErrorWrapper>
                <ErrorWrapper>
                    <label className={styles.label}>
                        Birthday:
                        <input type="date"
                               readOnly={true}
                               className={styles.input}
                               value={props.entity.dateOfBirth}
                        />
                    </label>
                </ErrorWrapper>
            </fieldset>
            <fieldset className={styles.fieldset} disabled={true}>
                <h2>Payment information</h2>
                <ErrorWrapper>
                    <label className={styles.label}>
                        Card:
                        <input type="text"
                               readOnly={true}
                               className={styles.input}
                               value={props.entity.cardNumber}
                        />
                    </label>
                </ErrorWrapper>
                <ErrorWrapper>
                    <label className={styles.label}>
                        Expiration:
                        <input type="month"
                               readOnly={true}
                               className={styles.input}
                               value={props.entity.cardExpiration}
                        />
                    </label>
                </ErrorWrapper>
                <ErrorWrapper>
                    <label className={styles.label}>
                        CVC:
                        <input type="password"
                               readOnly={true}
                               className={styles.input}
                               value={props.entity.cardCvc}
                        />
                    </label>
                </ErrorWrapper>
            </fieldset>
            <button type="button" className={styles.editButton}>Edit</button>
        </form>
    )
}
export default ReviewView;
