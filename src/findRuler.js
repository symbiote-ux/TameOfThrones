const Kingdom = require('./kingdom');
const Southeros = require('./southeros');

const findRuler = (list, cipher, king) => {
	const kingdoms = list.map(({ name, emblem }) => {
		return new Kingdom(name, emblem);
	});
	const southeros = new Southeros(kingdoms);
	const cipherList = cipher.split('\n');
	const alliance = southeros.findAlliance(cipherList, king);
	if (alliance.length < 3) return ['NONE'];
	alliance.unshift(king);
	return alliance;
};

module.exports = { findRuler };
