//arrays
// shallow vs deep copies
// shallow means same reference point 
// deep copied do not sahre the same reference point

const arr = [1,23,"suryansu",'surya',null,undefined];
const myarr = [0,1,2,3,4,5];
       
//console.log(arr[1]);

/*

//-----ARRAY-METHODS-------
myarr.push(6);
myarr.push(7); // add element to the last of an array
console.log(myarr);

myarr.pop(); // remove element from the end of an array
console.log(myarr);
*/

myarr.unshift(9); // to add in start of an array but its time consuming as every element has to move a step ahead
console.log(myarr);
myarr.shift();
console.log(myarr);
console.log(myarr.includes(9)); // check and give true/false.
console.log(myarr.indexOf(9)); // -1 if absent in array

const newarr = myarr.join(); // convert to string and bind it
console.log(myarr); //array format
console.log(newarr); // directly but type is changed
console.log(typeof newarr); // string

/*
// slice
console.log("A ",myarr);

const myn1 = myarr.slice(1,3);
console.log(myn1);
console.log("B ",myarr);

//splice
console.log("c ",myarr);
const myn2 = myarr.splice(1,3);
console.log(myn2);
console.log("D ",myarr);

//NOTE: in splice it basically remove that portion from an array which manipulate it
*/

