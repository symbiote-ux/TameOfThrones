const { assert } = require('chai');
const Kingdom = require('../src/kingdom');

describe('Kingdom', () => {
  describe('getAllies', () => {
    it('Should give empty list when a king has no allies', () => {
      const kingdom = new Kingdom('SPACE', 'GORILLA');
      assert.isEmpty(kingdom.getAllies());
    });
    it('Should give list of allies when a king has allies', () => {
      const kingdom = new Kingdom('SPACE', 'GORILLA');
      kingdom.updateAlly('AIR');
      assert.deepEqual(kingdom.getAllies(), ['AIR']);
    });
    it('Should not add ally when a king is already an ally', () => {
      const kingdom = new Kingdom('SPACE', 'GORILLA');
      kingdom.updateAlly('AIR');
      kingdom.updateAlly('AIR');
      assert.deepEqual(kingdom.getAllies(), ['AIR']);
    });
  });
  describe('updateAlly', () => {
    it('Should add ally to the list', () => {
      const kingdom = new Kingdom('SPACE', 'GORILLA');
      kingdom.updateAlly('AIR');
      assert.deepEqual(kingdom.getAllies(), ['AIR']);
    });
    it('Should not add ally to the list when ally is present', () => {
      const kingdom = new Kingdom('SPACE', 'GORILLA');
      kingdom.updateAlly('AIR');
      kingdom.updateAlly('AIR');
      assert.deepEqual(kingdom.getAllies(), ['AIR']);
    });
  });
  describe('isAlly', () => {
    it('Should give true when a king is ally', () => {
      const kingdom = new Kingdom('AIR', 'OWL');
      assert.isTrue(kingdom.isAlly('ROZO'));
    });
    it('Should give false when a king is not a ally', () => {
      const kingdom = new Kingdom('AIR', 'OWL');
      assert.isFalse(kingdom.isAlly('TOZO'));
    });
    it('Should give false,frequency of char does not matches', () => {
      const kingdom = new Kingdom('ICE', 'MAMMOTH');
      assert.isFalse(kingdom.isAlly('THEEVAO'));
    });
    it('Should give true when frequency of characters matches', () => {
      const kingdom = new Kingdom('ICE', 'MAMMOTH');
      assert.isTrue(kingdom.isAlly('THTTVAO'));
    });
  });
  describe('isKingdom', () => {
    it('Should give true when kingdom name matches', () => {
      const kingdom = new Kingdom('AIR', 'OWL');
      assert.isTrue(kingdom.isKingdom('AIR'));
    });
    it('Should give false when kingdom name does not matches', () => {
      const kingdom = new Kingdom('AIR', 'OWL');
      assert.isFalse(kingdom.isKingdom('ICE'));
    });
  });
});
