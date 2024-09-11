const prompt = require("prompt-sync")();

console.log(
  "Welcome trainer. So you want to be a pokemon professor? Let me quiz you. "
);

const question1 = prompt(
  "What is the starter pokemon that professor Oak gave to Ash? "
);
const question1answer = "Pikachu";

if (question1.toUpperCase === question1answer.toUpperCase) {
  console.log("You got it correct!");
} else {
  console.log("You got it wrong...");
}
