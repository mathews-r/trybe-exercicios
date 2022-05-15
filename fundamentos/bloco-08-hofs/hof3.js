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

const dragonDamage = (dragon) => {
  let danoDragao = Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);
  return danoDragao;
}

const warriorDamage = (warrior) => {
  const danoMaximo = warrior.strength * warrior.weaponDmg;
  const danoMinimo = warrior.strength;
  let danoWarrior = Math.floor(Math.random() * (danoMaximo - danoMinimo + 1) + danoMinimo);
  return danoWarrior;
}

const magoDamage = (mage) => {
  const manaMage = mage.mana;
  const danoMinimo = mage.intelligence;
  const danoMaximo = mage.intelligence * 2;
  const turno = {
    mana: 0,
    damage: 0,
  };

  if (manaMage > 15) {
    const danoMago = Math.floor(Math.random() * (danoMaximo - danoMinimo + 1) + danoMinimo);
      turno.damage = danoMago;
      turno.mana = 15;
      return turno;
};
return turno;
}

const gameActions = {
    turnWarrior: (warriorDamage) => {
      const a = warriorDamage(warrior);
    warrior.damage = a;
    dragon.healthPoints -= a;
  },
    turnMage: (magoDamage) => {
      const b = magoDamage(mage);
      const d = b.damage;
    mage.damage = d;
    mage.mana -= d.mana;
    dragon.healthPoints -= d;
    },
    turnDragon: (dragonDamage) => {
      const c = dragonDamage(dragon);
    warrior.healthPoints -= c;
    mage.healthPoints -= c;
    dragon.damage = c;
    },
    resultadoTurno: () => battleMembers,
  };

gameActions.turnWarrior(warriorDamage);
gameActions.turnMage(magoDamage);
gameActions.turnDragon(dragonDamage);
console.log(gameActions.resultadoTurno());