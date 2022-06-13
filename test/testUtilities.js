const { assert } = require('chai');
const { decodeMessage, decipher, splitCipher } = require('../src/utilities');

describe('Utilities', () => {
  describe('decodeMessage', () => {
    it('Should give decoded messages according to the key', () => {
      assert.deepEqual(decodeMessage('ROZO', 3), ['O', 'L', 'W', 'L']);
    });
  });

  describe('decipher', function () {
    it('Should decipher the code according to key and give letter', () => {
      assert.equal(decipher('Z', 3), 'W');
    });
  });

  describe('splitCipher', function () {
    it('Should split the cipher into two parts i.e. name and msg', () => {
      const actual = {
        name: 'Joe',
        message: 'Hello',
      };
      assert.deepStrictEqual(splitCipher('Joe Hello'), actual);
    });
  });
});
