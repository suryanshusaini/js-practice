let score = 33;
let score_2 = "33abc";
//console.log(typeof score);
//console.log(typeof score_2);

// converting string to number 
//let valuInNumber = Number(score_2);
//console.log(typeof valuInNumber);
//
//console.log(valuInNumber);// 33abc will convert but it's a NaN

// if it is a null
//let score_3 = null;
//let valuInNumber1 = Number(score_3);

//console.log(valuInNumber1);// we get zero(0)

//if it is undefined

// -------CONVERSION--------
// ****NOTE****
// "33" => 33 (easily converting to number)
// "33abc" => Nan (not a number but it's type is number only)
// true => 1 false =>0

/*
let isTrue = 1;
let isTruebool = Boolean(isTrue); // answer will be converted to true
console.log(isTruebool);
*/
// but what about a empty string

/*
let empty = "";
let name = "surya"
let isnameBool= Boolean(name); // answer will be converted to false
let  isTruebool = Boolean(empty); // true
console.log(isTruebool);
console.log(isnameBool);
*/

// -----------NOTE---------
// 1 => true , 0 => false
// ""=> false , "surya" => true


//-------------STRING TO NUMBER----------------
let somenum = 33;
let stringnum = String(somenum);
console.log(stringnum);
console.log(typeof stringnum);