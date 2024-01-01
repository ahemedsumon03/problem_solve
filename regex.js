// const bdphone = '++8801730991748';

// const regex = /#?[\da-fA-F]{2}[\da-fA-F]{2}[\da-fA-F]{2}/g;
// bangladesh phone number
const mygmail = 'ahemedsumon03@gmail.com';
// const regex = /(\+88)?01[\d]{9}/g;
const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g;


let match = mygmail.match(regex);

let index = mygmail.search(regex);

let replace = mygmail.replace(regex,'mamun@gmail.com');

let test = regex.test(mygmail);

console.log({ match, index, replace, test });
