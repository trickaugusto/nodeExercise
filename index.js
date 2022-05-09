const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer pra melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
];

const ask = (index = 0) => {
    return process.stdout.write("\n\n" + questions[index] + " > ");
}

ask();

const answers = [];

// fica ouvindo até que o usuario digite uma resposta
process.stdin.on('data', (data) => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length){
        ask(answers.length);
    } else {
        console.log(answers);
        process.exit(); // fecha o processo
    }
});

process.on('exit', () => {
    console.log(`
        Maravilha!

        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu hoje e você poderia melhorar foi:
        ${answers[1]}

        O que te deixou feliz hoje:
        ${answers[2]}

        Você ajudou ${answers[3]} pessoas hoje!!

        Volte amanhã para novas reflexões!
    `);
}); // quando o processo terminar no .exit()