function submitQuiz() {
    let answers = [
        "Markup Language",
        "Styling",
        "Programming Language"
    ];

    let score = 0;

    answers.forEach((ans, i) => {
        let selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === ans) {
            score++;
        }
    });

    document.getElementById("result").innerText =
        "Score: " + score + "/" + answers.length;
}