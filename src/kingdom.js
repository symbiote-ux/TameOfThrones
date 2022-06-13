const { decodeMessage } = require('./utilities');

class Kingdom {
	constructor(name, emblem) {
		this.name = name;
		this.emblem = emblem;
		this.allies = [];
	}
	isKingdom(name) {
		return this.name === name;
	}
	isAlly(cipher) {
		const key = this.emblem.length;
		let message = decodeMessage(cipher, key);
		const letters = this.emblem.split('');
		for (let i = 0; i < letters.length; i++) {
			const index = message.indexOf(letters[i]);
			if (index < 0) return false;
			message.splice(index, 1);
		}
		return true;
	}
	updateAlly(name) {
		if (!this.allies.includes(name)) {
			this.allies.push(name);
		}
	}
	getAllies() {
		return [...this.allies];
	}
}

module.exports = Kingdom;
