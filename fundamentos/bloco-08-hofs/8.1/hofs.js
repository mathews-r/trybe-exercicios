const morning = () => 'Acordando!!';

const coffee = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(morning));
console.log(doingThings(coffee));
console.log(doingThings(sleep));
