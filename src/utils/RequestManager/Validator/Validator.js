import {
    checkEmail, checkValueMonthInput, checkMinYear,
    checkRequiredString,
    checkStringMinLength,
    checkStringWithoutNumbers
} from "./rules/stringRules/stringRules";
import {
    checkMinLength,
    checkNumbers,
    checkNumberWithWhiteSpace
} from "./rules/numberRules/numberRules";

class Validator {
    constructor(entity) {
        this.entity = entity;
    }

    #check(fieldName,fieldValue) {
        switch (fieldName) {
            case 'name':
                const nameErrors = [];
                addError(checkStringWithoutNumbers(fieldName,fieldValue),nameErrors);
                addError(checkStringMinLength(fieldName,fieldValue,4),nameErrors);
                addError(checkRequiredString(fieldName,fieldValue),nameErrors);
                return nameErrors;
            case 'surname':
                const surnameErrors = [];
                addError(checkStringWithoutNumbers(fieldName,fieldValue),surnameErrors);
                addError(checkStringMinLength(fieldName,fieldValue,5),surnameErrors);
                addError(checkRequiredString(fieldName,fieldValue),surnameErrors);
                return  surnameErrors;
            case 'email':
                const emailErrors = [];
                addError(checkEmail(fieldName,fieldValue),emailErrors);
                addError(checkRequiredString(fieldName,fieldValue),emailErrors);
                return emailErrors;
            case 'dateOfBirth':
                const dateErrors = [];
                addError(checkMinYear(fieldName,fieldValue),dateErrors);
                addError(checkRequiredString(fieldName,fieldValue),dateErrors);
                return dateErrors;
            case 'cardNumber':
                const cardNumberErrors = [];
                addError(checkNumberWithWhiteSpace(fieldName,fieldValue),cardNumberErrors);
                addError(checkMinLength(fieldName,fieldValue,16),cardNumberErrors);
                return cardNumberErrors;
            case 'cardExpiration':
                const cardExpirationErrors = [];
                addError(checkValueMonthInput(fieldName,fieldValue),cardExpirationErrors);
                return cardExpirationErrors;
            case 'cardCvc':
                const cvcErrors = [];
                addError(checkMinLength(fieldName,fieldValue,3),cvcErrors);
                addError(checkNumbers(fieldName,fieldValue),cvcErrors);
                return cvcErrors;
            default:
                throw new Error("Field name is undefined");
        }

        function addError(error,arr) {
            if(Object.keys(error).length !== 0) {
                arr.push(error);
            }
        }
    }

    validate() {
        let errors = [];
        for (let key in this.entity) {
            const checkResult = this.#check(key,this.entity[key]);

            if(checkResult.length !== 0) {
                errors = errors.concat(checkResult);
            }
        }
        return errors;
    }
}
export default Validator;
