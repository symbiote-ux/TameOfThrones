const fs = require('fs');
const { findRuler } = require('./src/findRuler');

const getKingdoms = () => {
  return [
    { name: 'SPACE', emblem: 'GORILLA' },
    { name: 'LAND', emblem: 'PANDA' },
    { name: 'WATER', emblem: 'OCTOPUS' },
    { name: 'ICE', emblem: 'MAMMOTH' },
    { name: 'AIR', emblem: 'OWL' },
    { name: 'FIRE', emblem: 'DRAGON' },
  ];
};

const main = () => {
  const filename = process.argv[2];
  const cipher = fs.readFileSync(filename, 'utf8');
  const ruler = findRuler(getKingdoms(), cipher, 'SPACE');
  console.log(ruler.join(' '));
};

main();
