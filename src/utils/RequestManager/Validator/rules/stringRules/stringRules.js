import {setMaxDate, setMinDate} from "../../../../common/settingExpirationDate";
import {prepareMonth} from "../../../../common/setMonth";

export function checkStringWithoutNumbers (fieldName,value) {
    const chars = value.split("");

    if(chars.find((item) => !isNaN(Number(item))) !== undefined) {
        return {
            field: fieldName,
            message: "This field should not include numbers",
        }
    } else {
        return {};
    }
}

export function checkStringMinLength(fieldName,value, minLength) {
    if(value.length < minLength) {
        return {
            field: fieldName,
            message: `Length should not be less than ${minLength} symbols`,
        }
    } else {
        return {};
    }
}

export function checkRequiredString(fieldName,value) {
    if(value === "") {
        return {
            field: fieldName,
            message: 'This field is required'
        }
    } else {
        return {};
    }
}

/* email validation */
export function checkEmail(fieldName, value) {
    let regExp = /[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/

    if (regExp.test(value)) {
        return {}
    } else {
        return {
            field: fieldName,
            message: 'Email is incorrect'
        }
    }
}

export function checkMinYear(fieldName, value) {
    const OLDEST_AGE = 100;
    const yearOfUser = Number(value.slice(0, 4));
    const inputMinYear = new Date().getFullYear() - OLDEST_AGE;

    if (yearOfUser < inputMinYear) {
        return {
            field: fieldName,
            message: `Value of year must be ${inputMinYear} or later`
        }
    } else {
        return {};
    }
}

export function checkValueMonthInput(fieldName, value) {
    if(value === "") {
        return {
            field: fieldName,
            message: `Date is incorrect`
        }
    } else {
        const userYear = Number(value.slice(0,4));
        const userMonth = value.slice(5);
        const minDate = setMinDate();
        const maxDate = setMaxDate();
        const minYear = Number(minDate.slice(0,4));
        const maxYear = Number(maxDate.slice(0,4));
        const month = Number(minDate.slice(6));

        if(userYear > maxYear || userYear < minYear) {
            return {
                field: fieldName,
                message: "Value of year is incorrect"
            }
        }

        if(userYear === minYear || userYear === maxYear) {
            if(prepareMonth(userMonth) < prepareMonth(month)) {
                return {
                    field: fieldName,
                    message: "Value of month is incorrect"
                }
            }
        }
        return {};
    }
}

export function checkMaxInputDate(fieldName, value) {
    const EXPIRATION = 5;
    const yearOfUser = Number(value.slice(0, 4));
    const inputMaxYear = new Date().getFullYear() + EXPIRATION;
    const monthOfUserStr = value.slice(5);
    let monthOfUserNumber = 0;
    const inputMaxMonth = new Date().getMonth() + 1;

    if(monthOfUserStr[0] === '0') {
        monthOfUserNumber = Number(monthOfUserStr[1]);
    } else {
        monthOfUserNumber = Number(monthOfUserStr);
    }
    /* comparison of dates  */
    if(yearOfUser > inputMaxYear) {
        return {
            field: fieldName,
            message: `Value of year is incorrect`
        }
    } else {
        if(monthOfUserNumber > inputMaxMonth) {
            return {
                field: fieldName,
                message: `Value of month is incorrect`
            }
        } else {
            return {};
        }
    }
}
