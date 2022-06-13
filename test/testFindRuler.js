const { assert } = require('chai');
const { findRuler } = require('../src/findRuler');

describe('findRuler', () => {
  it('Should give Ruler of Southeros when have sufficient allainces', () => {
    const king = 'SPACE';
    const cipher = 'AIR ROZO\r\nLAND FAIJWJSOOFAMAU\r\nICE STHSTSTVSASOS';
    const list = [
      { name: 'SPACE', emblem: 'GORILLA' },
      { name: 'LAND', emblem: 'PANDA' },
      { name: 'WATER', emblem: 'OCTOPUS' },
      { name: 'ICE', emblem: 'MAMMOTH' },
      { name: 'AIR', emblem: 'OWL' },
      { name: 'FIRE', emblem: 'DRAGON' },
    ];
    const ruler = findRuler(list, cipher, king);
    assert.deepEqual(ruler, ['SPACE', 'AIR', 'LAND', 'ICE']);
  });
  it('Should give NONE when King have not sufficient allainces', () => {
    const king = 'SPACE';
    const cipher =
      'AIR OWLAOWLBOWLC\r\nLAND OFBBMUFDICCSO\r\nICE VTBTBHTBBBOBAB\r\nWATER SUMMER IS COMING';
    const list = [
      { name: 'SPACE', emblem: 'GORILLA' },
      { name: 'LAND', emblem: 'PANDA' },
      { name: 'WATER', emblem: 'OCTOPUS' },
      { name: 'ICE', emblem: 'MAMMOTH' },
      { name: 'AIR', emblem: 'OWL' },
      { name: 'FIRE', emblem: 'DRAGON' },
    ];
    const ruler = findRuler(list, cipher, king);
    assert.deepEqual(ruler, ['NONE']);
  });
  it('Should give NONE when King have itself as a allainces', () => {
    const king = 'SPACE';
    const cipher = 'AIR ROZO\r\nSPACE NVYPSSH\r\nICE STHSTSTVSASOS';
    const list = [
      { name: 'SPACE', emblem: 'GORILLA' },
      { name: 'LAND', emblem: 'PANDA' },
      { name: 'WATER', emblem: 'OCTOPUS' },
      { name: 'ICE', emblem: 'MAMMOTH' },
      { name: 'AIR', emblem: 'OWL' },
      { name: 'FIRE', emblem: 'DRAGON' },
    ];
    const ruler = findRuler(list, cipher, king);
    assert.deepEqual(ruler, ['NONE']);
  });
});
