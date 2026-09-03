// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Tasks:
// 01. Store Mark's and John's mass and height in variables.
// 02. Calculate both their BMIs using the formula (you can even implement both versions).
// 03. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// 04. Bonus: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// Data:
// - Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// - Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

// 01.
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// 02.
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

// 03.
const markHigherBMI = BMIMark > BMIJohn;

// 04.
console.log(BMIMark, BMIJohn, markHigherBMI);
