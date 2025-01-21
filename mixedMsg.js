let character = [
    'slime',
    'goblin',
    'zombie',
    'panda',
    'robot',
   'demon lord',
   'hero',
   'villainess',
   'step mom',
   'side character'
];

let adjective = [
    'strongest',
    'lamest',
    'overpowered',
    'weakest',
    'richest',
    'famous',
];

let jobs = [
    'mage',
    'wizard',
    'sorcerer',
    'merchant',
    'necromancer',
    'farmer',
    'swordsman'
];

const mixedMessage = () => {
    let char = Math.floor(Math.random() * character.length);
    let adj = Math.floor(Math.random() * adjective.length);
    let job = Math.floor(Math.random() * jobs.length);
    return `I was reincarnated as a ${character[char]} and became the ${adjective[adj]} ${jobs[job]}`;
}

console.log(mixedMessage());
