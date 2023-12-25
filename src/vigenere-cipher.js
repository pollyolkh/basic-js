const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Invalid input. Both message and key are required.');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (char.match(/[A-Z]/)) {
        const messageCharCode = char.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0);
        const encryptedCharCode = ((messageCharCode + keyCharCode) % 26) + 'A'.charCodeAt(0);
        const encryptedChar = String.fromCharCode(encryptedCharCode);

        encryptedMessage += encryptedChar;
        keyIndex++;
      } else {
        encryptedMessage += char;
      }
    }

    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Invalid input. Both encryptedMessage and key are required.');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];

      if (char.match(/[A-Z]/)) {
        const encryptedCharCode = char.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0);
        const decryptedCharCode = ((encryptedCharCode - keyCharCode + 26) % 26) + 'A'.charCodeAt(0);
        const decryptedChar = String.fromCharCode(decryptedCharCode);

        decryptedMessage += decryptedChar;
        keyIndex++;
      } else {
        decryptedMessage += char;
      }
    }

    return this.direct ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

