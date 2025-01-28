export const trimstrings = (newData) => {
    for (let key in newData) {
        if (newData.hasOwnProperty(key) && typeof newData[key] === 'string') {
            newData[key] = newData[key].trim();
        }
    }
}