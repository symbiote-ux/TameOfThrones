const assert = require('chai').assert;
const { decodeMessage, decipher, splitCipher } = require('../src/utilities');

describe('decodeMessage', function () {
	it('Should give decoded messages according to the key', function () {
		assert.deepEqual(decodeMessage('ROZO', 3), ['O', 'L', 'W', 'L']);
	});
});

describe('decipher', function () {
	it('Should decipher the code according to key and give letter', function () {
		assert.equal(decipher('Z', 3), 'W');
	});
});

describe('splitCipher', function () {
	it('Should split the cipher into two parts i.e. name and msg', function () {
		const actual = {
			name: 'Joe',
			message: 'Hello',
		};
		assert.deepStrictEqual(splitCipher('Joe Hello'), actual);
	});
});
