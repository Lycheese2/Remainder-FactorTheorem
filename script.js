// Function to check the user's answer and show solution
function checkAnswer() {
    let userInput = document.getElementById("userInput").value;
    let correctAnswer = 0;  // f(x) = x³ - 6x² + 11x - 6, remainder when divided by (x - 2)
    let f_of_2 = Math.pow(2, 3) - 6 * Math.pow(2, 2) + 11 * 2 - 6; // Calculate f(2)

    // Check if the user's input matches the correct answer
    if (userInput == f_of_2) {
        document.getElementById("feedback").textContent = `🎉 Correct! The remainder is ${f_of_2}. Great job!`;
        document.getElementById("feedback").style.color = "green";
        document.getElementById("solution").style.display = "none";  // Hide solution if answer is correct
    } else {
        document.getElementById("feedback").textContent = `❌ Oops! Try again. The remainder is ${f_of_2}.`;
        document.getElementById("feedback").style.color = "red";
        document.getElementById("solution").style.display = "block";  // Show the solution if answer is wrong
    }
}
