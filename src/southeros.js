const { splitCipher } = require('./utilities');

class Southeros {
	constructor(kingdoms) {
		this.kingdoms = [...kingdoms];
	}
	findKingdom(name) {
		return this.kingdoms.find((kingdom) => kingdom.isKingdom(name));
	}
	isAlly(name, message, ruler) {
		const kingdom = this.findKingdom(name);
		return kingdom.isAlly(message) && ruler != name;
	}
	getAllies(ruler) {
		const rulerKingdom = this.findKingdom(ruler);
		return rulerKingdom.getAllies();
	}
	findAlliance(cipher, ruler) {
		for (let i = 0; i < cipher.length; i++) {
			const { name, message } = splitCipher(cipher[i]);
			const rulerKingdom = this.findKingdom(ruler);
			if (this.isAlly(name, message, ruler)) {
				rulerKingdom.updateAlly(name);
			}
		}
		return this.getAllies(ruler);
	}
}

module.exports = Southeros;
