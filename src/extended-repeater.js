module.exports = function repeater(str, options) {
    let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
    separator = separator || '+';
    additionSeparator = additionSeparator || '|';
    addition = addition === undefined ? '' : addition;
    str += repeatWithSeparator(addition, additionSeparator, additionRepeatTimes);
    return repeatWithSeparator(str, separator, repeatTimes);
};

function repeatWithSeparator(str, separator, repeatTimes) {
    repeatTimes = repeatTimes || 1;
    let resultString = "";
    for (let i = 0; i < repeatTimes; i++) {
        resultString += str;
        if (i < repeatTimes - 1) {
            resultString += separator;
        }
    }
    return resultString;
}