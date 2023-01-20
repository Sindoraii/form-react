export function checkNumberWithWhiteSpace(fieldName, value) {
    const copy = JSON.parse(JSON.stringify(value))
    const chars = Array.from(copy);
    let error = {};

    if (chars.length !== 0) {
        chars.forEach((char) => {
            console.log(char);

            if (isNaN(Number(char))) {
                    error = {
                        field: fieldName,
                        message: 'Value must include only numbers'
                    }
                    return error;
            } else if(chars[0] === " " ) {
                error = {
                    field: fieldName,
                    message: 'Field is required'
                }
            }
        })
    } else {
        error = {
            field: fieldName,
            message: 'Field is required'
        }
    }
    return error;
}
export function checkNumbers(fieldName, value) {
    const copy = JSON.parse(JSON.stringify(value))
    const chars = Array.from(copy);
    let error = {};

    chars.forEach((char) => {
        if (isNaN(Number(char)) || char === " ") {
            error = {
                field: fieldName,
                message: 'Value must include only numbers'
            }
            return error;
        }
    })
    return error;
}
