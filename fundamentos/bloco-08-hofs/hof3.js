const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  let danoDragao = Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);
  return danoDragao;
}
dragonDamage();

const warriorDamage = () => {
  const danoMaximo = warrior.strength * warrior.weaponDmg;
  const danoMinimo = warrior.strength;
  let danoWarrior = Math.floor(Math.random() * (danoMaximo - danoMinimo + 1) + danoMinimo);
  return danoWarrior;
}
warriorDamage();

const mago = () => {
  const danoMaximo = mage.intelligence * 2;
  const danoMinimo = mage.intelligence;
  let mana = mage.mana;
  let danoMago = Math.floor(Math.random() * (danoMaximo - danoMinimo + 1) + danoMinimo);
  if (mana >= 15) {
    mana -= 15;
  } else {
    return 'Você não tem mana suficiente.'
  }

  return console.log({
    dano: danoMago,
    mana: mana
  });
}
mago();