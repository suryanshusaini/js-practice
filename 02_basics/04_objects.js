/*
//now we will be doing singleton and contructor
const tinderUser = new Object(); // this is singleton
// const obj = {}; // non-singleton
// console.log(tinderUser);
// console.log(obj);
tinderUser.id = "23bce8898";
tinderUser.name = "surya";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

//------------object inside object-----------

const regularUser = {
    email : "some@gmail.com" ,
    fullname : {
        userfullname : {
            firstname : "suryanshu",
            lastname : "saini"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2 : "b"
}
const obj2 = {
    3:"a",
    4:"b"
}
// const obj3 = {obj1,obj2} // it will just combine the array not adding seperately
//const obj3 = Object.assign(obj1,obj2);
// const obj3 = Object.assign({},obj1,obj2);// this is a good practice to use{} first
// console.log(obj1); // we can see if we use {} this above obj1 remains same but if we remove {} this obj1 will be same as the obj3
// console.log(obj3);

//another method is ********spread********
// use it more
const obj3 = {...obj1, ...obj2}; // use {curly brackets here}
console.log(obj3);


//arrys-object

// const arr = [{id:123,name:"surya",age:20}];
// console.log(arr[0].id);
// console.log(arr[0]);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // arrar bna deta hai

//to check it exist
// console.log(tinderUser.hasOwnProperty('isLogged'));

*/
//**********[ OBJECT DE-STRUCTURING ]**************/
// remember destructuring is also in array 
const course = {
    coursename : "js in hindi",
    price : "999",
    courseinstructor : "hitesh"
}
// course.instructor
const {courseinstructor : instructor} = course;
// const {courseinstructor} = course;
// console.log(courseinstructor);
console.log(instructor);

//******* [ API CONCEPT ] ******
// -> basically apna kaam kisi or k sar par daal dena
//{"name" : "surya"} => this is JSON
//fetch
// it's also possible that API will not always be {} it can also be [{},{}] objcet inside array
