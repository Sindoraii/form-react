export const setMinDate = () => {
    const year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;

    if (month < 10) {
        month = 0 + String(month);
    }
    return year + '-' + month;
}

export const setMaxDate = () => {
    const EXPIRATION = 5;
    const year = new Date().getFullYear() + EXPIRATION;
    let month = new Date().getMonth() + 1;

    if (month < 10) {
        month = 0 + String(month);
    }
    return year + '-' + month;
}

