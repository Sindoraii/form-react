/* preparing value of month for comparison */
export const prepareMonth = (value) => {
    if (value[0] === '0') {
        return Number(value[1]);
    } else {
        return Number(value);
    }
}
