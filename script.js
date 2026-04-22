const lionQuiz = [
    {
        question: "What is the average weight of an adult male African lion?",
        options: ["150 kg", "190 kg", "250 kg", "300 kg"],
        correctAnswer: "190 kg",
        explanation: "Adult male African lions typically weigh between 150-250 kg, with 190 kg being the average."
    },
    {
        question: "What is a group of lions called?",
        options: ["A pack", "A pride", "A herd", "A colony"],
        correctAnswer: "A pride",
        explanation: "Lions are social cats and live in groups called prides, typically consisting of related females, their cubs, and a small number of adult males."
    },
    {
        question: "How long can a lion live in the wild?",
        options: ["8-10 years", "10-14 years", "15-20 years", "20-25 years"],
        correctAnswer: "10-14 years",
        explanation: "Lions in the wild typically live 10-14 years, while in captivity they can live up to 20 years or more."
    },
    {
        question: "What percentage of hunting is done by female lions?",
        options: ["50%", "70%", "85-90%", "100%"],
        correctAnswer: "85-90%",
        explanation: "Female lions (lionesses) do about 85-90% of the hunting, working together to stalk and bring down prey."
    },
    {
        question: "How fast can a lion run in short bursts?",
        options: ["30 km/h", "50 km/h", "80 km/h", "100 km/h"],
        correctAnswer: "80 km/h",
        explanation: "Lions can reach speeds of up to 80 km/h (50 mph) in short bursts, but they lack stamina for long chases."
    }
];

// Function to run the quiz
function runQuiz() {
    let score = 0;
    
    lionQuiz.forEach((item, index) => {
        console.log(`\nQuestion ${index + 1}: ${item.question}`);
        console.log("Options:", item.options.join(", "));
        console.log(`Answer: ${item.correctAnswer}`);
        console.log(`Explanation: ${item.explanation}`);
    });
}

// Run the quiz
runQuiz();

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lionQuiz;
}
