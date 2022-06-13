const splitCipher = (cipher) => {
	const index = cipher.indexOf(' ');
	const name = cipher.slice(0, index);
	const message = cipher.slice(index + 1);
	return { name, message };
};

const decipher = (code, key) => {
	let value = code.charCodeAt(0) - key;
	value = value < 65 ? value + 26 : value;
	return String.fromCharCode(value);
};

const decodeMessage = (message, key) => {
	const list = message.split('');
	const decodedMessage = list.map((code) => decipher(code, key));
	return decodedMessage;
};

module.exports = { decodeMessage, decipher, splitCipher };
