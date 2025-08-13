//Singleton:jab literal ki tarah declare kre toh singleton nahi hota hain

//symbiol
 const mySym = Symbol("Key1");//symbol lo object ki key mai add kro and print it

// object literals
Object.create // constructor method
const JsUser = {
    name : "Suryansu",
    "full name" : "Suryanshu saini",
    [mySym] : "myKey1",// if YOU WANT SYMBOL NOT STRING INSTEAD OF (mySym : "myKey1")
    age : 20,
    location : "roorkee",
    email : "crack@google.com",
    lastLoginDays : ["Monday","Tuesday"]
};
// // access objects
// console.log(JsUser.email);
// console.log(JsUser["email"]);// remember tot ake as string inside
// //console.log(JsUser[email]); // error

// //console.log(JsUser.["full name"]); error learn how to access this
// console.log(JsUser["full name"]); 
 
// print symbol but normallly its basically a string only
//console.log(JsUser.mySym);
//console.log(typeof(JsUser.mySym)); // giving string its a problem

// correct way for symbol use []
// console.log(JsUser[mySym]);
// console.log(typeof mySym);

//we can change and freeze data inside object 
// console.log(JsUser.age);
// JsUser.age = 10;
// console.log(JsUser.age);
// //to freeze use
// Object.freeze(JsUser);
// JsUser.email = "abc@Fi.com";
// console.log(JsUser.email); // not changed



//--------------------
JsUser.greeting = function(){
    console.log("Hello JS User");
}
//------imp---------
console.log(JsUser.greeting); //[Function (anonymous)] function not executed but only reference has came
console.log(JsUser.greeting()); // dont forget to unfreeze first

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greetingTwo());