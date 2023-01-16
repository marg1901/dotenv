// server.js
require('dotenv').config() // this line is mandatory when you want to read variables from the '.env' file 
console.log(`Je m'appelle ${process.env.MY_NAME}`);
console.log(`Je suis née à ${process.env.MY_CITY}`);
console.log(`Ma langue maternelle est le ${process.env.MY_LANGUAGE}`);