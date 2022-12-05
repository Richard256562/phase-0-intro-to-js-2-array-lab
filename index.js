//Using arrays
//Using destructive methods to manipulate arrays
//using non destructive methods to display arrays

// Describe cats
const cats= ["Milo", "Otis", "Garfield"];

//DestructivelyAppendCatsName
cats.push("Ralph");
console.log (cats)


cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

//destructivelyPrependCat(name)
cats.unshift("Bob");
console.log (cats);

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
console.log (cats)

//destructivelyRemoveLastCat
cats.pop();
console.log (cats);

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
console.log (cats)


//destructivelyRemoveFirstCat
cats.shift();
console.log (cats)

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
console.log (cats)

//appendCat(name)
const coolCats =  [...cats, "Broom"];
console.log (coolCats);
console.log (cats);

//'prependCat(name)
 const uncoolCats= ["Arnold", ...cats]
console.log (uncoolCats);

//removeLastCat
cats.splice(2);
console.log (cats);

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
console.log (cats)

//'removeFirstCat
cats.splice(0,1);
console.log (cats)

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
console.log (cats)


