module.exports = function transform(arr) {
    const deleteNext = "--discard-next";
    const deletePrev = "--discard-prev";
    const doubleNext = "--double-next";
    const doublePrev = "--double-prev";
    if (!Array.isArray(arr)) throw new Error();
    if (doublePrev === arr[0]) {
        arr = arr.slice(1, arr.length);
    }
    if (doubleNext === arr[arr.length - 1]) { 
        arr = arr.slice(0, arr.length - 1);
    }
    const resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === deleteNext) {
            i++;
        } else if (element === deletePrev) {
            resultArray.pop(element);
        } else if (element === doubleNext && i < arr.length - 1) {
            resultArray.push(arr[i + 1]);
        } else if (element === doublePrev && i > 0) {
            resultArray.push(arr[i - 1]);
        } else {
            resultArray.push(element);
        }
    }
    return resultArray;
};
