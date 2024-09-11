const prompt = require("prompt-sync")();

console.log(
  "Welcome trainer. So you want to be a pokemon professor? Let me quiz you. "
);

const question1 = prompt(
  "What is the starter pokemon that professor Oak gave to Ash? "
);
const question1Answer = "PIKACHU";

if (question1.toUpperCase() === question1Answer) {
  console.log("You got it correct!");
} else {
  console.log("You got it wrong... but lets continue your quizz");
}

const question2 = prompt("Question 2: What pokemon evolves into Gyarados? ");
const question2Answer = "MAGIKARP";

if (question2.toUpperCase() === question2Answer) {
  console.log("You got it correct!");
} else {
  console.log("You got it wrong... ");
}

const question3 = prompt(
  "Which Pokémon is known as the “Flame Pokémon” and is the final evolution of Charmander? "
);
const question3Answer = "CHARIZARD";

if (question3.toUpperCase() === question3Answer) {
  console.log("Correct Answer!");
} else {
  console.log("wrong... answer...");
}
