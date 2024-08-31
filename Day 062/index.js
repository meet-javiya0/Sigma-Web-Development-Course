/* Create a business name generator by combining list of adjectives and shop name and another word
Do not use array for this instead use random number to select from list of adjectives, shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let randomNumber = Math.random();

let adjectives;
let shopName;
let anotherWord;

console.log(randomNumber);
if (randomNumber < 0.33) {
    adjectives = "Crazy";
} else if (randomNumber < 0.66) {
    adjectives = "Amazing";
} else {
    adjectives = "Fire";
}

randomNumber = Math.random();
console.log(randomNumber);
if (randomNumber < 0.33) {
    shopName = "Engine";
} else if (randomNumber < 0.66) {
    shopName = "Foods";
} else {
    shopName = "Garments";
}

randomNumber = Math.random();
console.log(randomNumber);
if (randomNumber < 0.33) {
    anotherWord = "Bros";
} else if (randomNumber < 0.66) {
    anotherWord = "Limited";
} else {
    anotherWord = "Hub";
}

console.log(`Business Name: ${adjectives} ${shopName} ${anotherWord}`);