const prompt = require("prompt-sync")();

console.log(
  "Welcome trainer. So you want to be a pokemon professor? Let me quiz you. "
);

let correctAnswers = 0;
const totalQuestions = 10;

const question1 = prompt(
  "What is the starter pokemon that professor Oak gave to Ash? "
);
const question1Answer = "PIKACHU";

if (question1.toUpperCase() === question1Answer) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong... but lets continue your quizz");
}

const question2 = prompt("Question 2: What pokemon evolves into Gyarados? ");
const question2Answer = "MAGIKARP";

if (question2.toUpperCase() === question2Answer) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong... ");
}

const question3 = prompt(
  "What type is Mewtwo? "
);
const question3Answer = "PSYCHIC";

if (question3.toUpperCase() === question3Answer) {
  console.log("Correct Answer!");
  correctAnswers++;
} else {
  console.log("wrong... answer...");
}
const question4 = prompt(
  "Which Pokémon is known as the “Flame Pokémon” and is the final evolution of Charmander? "
);
const question4Answer = "CHARIZARD";

if (question4.toUpperCase() === question4Answer) {
  console.log("Correct Answer!");
  correctAnswers++;
} else {
  console.log("wrong... answer...");
}
const question5 = prompt(
  "What is the evolved form of Metapod? "
);
const question5Answer = "BUTTERFREE";

if (question5.toUpperCase() === question5Answer) {
  console.log("Correct Answer!");
  correctAnswers++;
} else {
  console.log("wrong... answer...");
}
const question6 = prompt(
  "Which Gym Leader in Pewter City specializes in Rock-type Pokémon? "
);
const question6Answer = "BROCK";

if (question6.toUpperCase() === question6Answer) {
  console.log("Correct Answer!");
  correctAnswers++;
} else {
  console.log("wrong... answer...");
}
const question7 = prompt(
  "Who is the Gym Leader in Cerulean City with a focus on Water-type Pokémon? "
);
const question7Answer = "MISTY";

if (question7.toUpperCase() === question7Answer) {
  console.log("Correct Answer!");
  correctAnswers++;
} else {
  console.log("wrong... answer...");
}
const question8 = prompt(
  "What type is Blastoise? "
);
const question8Answer = "WATER";

if (question8.toUpperCase() === question8Answer) {
  console.log("Correct Answer!");
  correctAnswers++;
} else {
  console.log("wrong... answer...");
}
const question9 = prompt(
  "What type of Pokémon does Lance specialize in? "
);
const question9Answer = "DRAGON";

if (question9.toUpperCase() === question9Answer) {
  console.log("Correct Answer!");
  correctAnswers++;
} else {
  console.log("wrong... answer...");
}
const question10 = prompt(
  "The Answer is G"
);
const question10Answer = "G";

if (question10.toUpperCase() === question10Answer) {
  console.log("Correct Answer!");
  correctAnswers++;
} else {
  console.log("wrong... answer...");
}


const percent = Math.round((correctAnswers / totalQuestions) * 100);  // for the given percent depending on how many questions were answered right
console.log("You got", correctAnswers, "questions correct!");
console.log("thats a total of", percent, "percent");
// giving a title based on score
if (correctAnswers < 4) {
  console.log(
    "Based on your score I'd have to give you the title: Rookie Trainer"
  );
} else if (correctAnswers === 5) { 
    console.log("Based on your score I'd have to give you the title: Beginner Trainer");
} else if (correctAnswers === 6) {
    console.log("Based on your score I'd have to give you the title: Novice Trainer");
} else if (correctAnswers === 7) {
    console.log("Based on your score I'd have to give you the title: Skilled Trainer");
} else if (correctAnswers === 8) {
    console.log("Based on your score I'd have to give you the title: Elite Trainer");
} else if (correctAnswers === 9) {
    console.log("Based on your score I'd have to give you the title: Master Trainer");
} else if (correctAnswers === 10) {
    console.log("CONGRATULATIONS YOU GUESSED IT ALL RIGHT! Based on your score I'd have to give you the title: Pokémon Master");
}
