const assert = require('chai').assert;
const Kingdom = require('../src/kingdom');
const Southeros = require('../src/southeros');

describe('Southeros', function () {
  describe('findAlliance', function () {
    it('Should give alliance of the ruler', function () {
      const cipher = ['AIR ROZO', 'LAND FAIJWJSOOFAMAU', 'ICE STHSTSTVSASOS'];
      const ruler = 'SPACE';
      const list = [
        { name: 'SPACE', emblem: 'GORILLA' },
        { name: 'LAND', emblem: 'PANDA' },
        { name: 'WATER', emblem: 'OCTOPUS' },
        { name: 'ICE', emblem: 'MAMMOTH' },
        { name: 'AIR', emblem: 'OWL' },
        { name: 'FIRE', emblem: 'DRAGON' },
      ];
      const kingdoms = list.map(({ name, emblem }) => {
        return new Kingdom(name, emblem);
      });
      const southeros = new Southeros(kingdoms);
      const expected = southeros.findAlliance(cipher, ruler);
      assert.deepEqual(expected, ['AIR', 'LAND', 'ICE']);
    });
  });
  describe('getAllies', function () {
    it('Should give allies of particular king', function () {
      const cipher = ['AIR ROZO', 'LAND FAIJWJSOOFAMAU', 'ICE STHSTSTVSASOS'];
      const ruler = 'SPACE';
      const list = [
        { name: 'SPACE', emblem: 'GORILLA' },
        { name: 'LAND', emblem: 'PANDA' },
        { name: 'WATER', emblem: 'OCTOPUS' },
        { name: 'ICE', emblem: 'MAMMOTH' },
        { name: 'AIR', emblem: 'OWL' },
        { name: 'FIRE', emblem: 'DRAGON' },
      ];
      const kingdoms = list.map(({ name, emblem }) => {
        return new Kingdom(name, emblem);
      });
      const southeros = new Southeros(kingdoms);
      southeros.findAlliance(cipher, ruler);
      const expected = southeros.getAllies(ruler);
      assert.deepEqual(expected, ['AIR', 'LAND', 'ICE']);
    });
  });
});
