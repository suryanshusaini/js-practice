const marvel_hero = ["thor","ironman","spiderman"];
const dc_hero = ["superman","batman","flash"];
/*
marvel_hero.push(dc_hero); // this willnot merge array but create one inside of another
console.log(marvel_hero);
console.log(marvel_hero[3]);
console.log(marvel_hero[3][1]);
*/

//concat
//const all_hero = marvel_hero.concat(dc_hero); // concat add two or more arrays here
//console.log(all_hero);

//**spread **:  
const all_new_hero = [...marvel_hero,...dc_hero];
console.log(all_new_hero);

// if any situation arose like this where array inside array inside array
const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array =  another_arr.flat(Infinity);//in depth but give exactly in depth mostly
console.log(real_another_array);
// here flat basically covert it into 1d

console.log(Array.from("HITESH"));//[ 'H', 'I', 'T', 'E', 'S', 'H' ]

//******important*******
console.log(Array.from({name : "hitesh"})) // empty [] interesting
//******important*******

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]
// of,from,is array study more about them 