
let myVar = "country";

let user = {
  theName: "taoufik",
  "country of": "Egypt",
};

console.log(user.theName);
console.log(user.country); // user.country
console.log(user["country of"]); // user.country
console.log(user.myVar); // user.country
console.log(user[myVar]); // user.country