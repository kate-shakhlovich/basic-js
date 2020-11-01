class VigenereCipheringMachine {
  constructor() {}
  encrypt(message, key) {
    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = "";
    for (let index = 0, symbolCount = 0; index < messageUpper.length; index++) {
      const messageChar = messageUpper.charAt(index);
      if (messageChar.toLowerCase() == messageChar.toUpperCase()) {
        symbolCount++;
        result += messageChar;
        continue;
      }
      const messageCode = messageUpper.charCodeAt(index);
      const keyCode = keyUpper.charCodeAt((index - symbolCount) % key.length);
      result += String.fromCharCode(
        ((messageCode - 65 + (keyCode - 65)) % 26) + 65
      );
    }
    return result;
    throw "Not implemented";
    // remove line with error and write your code here
  }

  decrypt(encryptedMessage, key) {
    const keyUpper = key.toUpperCase();
    let result = "";
    for (
      let index = 0, symbolCount = 0;
      index < encryptedMessage.length;
      index++
    ) {
      const encryptedMessageChar = encryptedMessage.charAt(index);
      if (
        encryptedMessageChar.toLowerCase() == encryptedMessageChar.toUpperCase()
      ) {
        symbolCount++;
        result += encryptedMessageChar;
        continue;
      }
      const encryptedMessageCode = encryptedMessage.charCodeAt(index);
      const keyCode = keyUpper.charCodeAt((index - symbolCount) % key.length);
      result += String.fromCharCode(
        ((encryptedMessageCode + 26 - keyCode) % 26) + 65
      );
    }
    return result;

    throw "Not implemented";
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
