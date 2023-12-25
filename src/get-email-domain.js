const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (typeof email !== 'string') {
    throw new Error('Input should be a string');
  }

  const atIndex = email.lastIndexOf('@');
  if (atIndex === -1) {
    throw new Error('Invalid email address');
  }

  return email.slice(atIndex + 1);
}

module.exports = {
  getEmailDomain
};
