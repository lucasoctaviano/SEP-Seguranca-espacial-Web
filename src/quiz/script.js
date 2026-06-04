let formulario = document.querySelector("#quiz-formes");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let gabarito = [
        "LIXO ESPACIAL",
        "TRANSPARENCIA",
        "EVITANDO COLISÕES",
        "ALERTA DE COLISÃO",
        "SEGURANÇA ORBITAL",
        "PYTHON",
        "TEMPO REAL",
    ];

    let resposta = document.querySelectorAll(".resposta");

    let acertos = 0;

    let vazio = false;

    for (let i = 0; i < resposta.length; i++) {
        let respostaUsuario = resposta[i].value.trim().toUpperCase();

        if (respostaUsuario === "") {
            vazio = true;

            resposta[i].style.borderColor = "yellow";
        } else if (respostaUsuario === gabarito[i]) {
            acertos += 1;

            resposta[i].style.borderColor = "green";
        } else {
            resposta[i].style.borderColor = "red";
        };
    };

    if (vazio === true) {
        alert("Por favor, responda todas as questões com borda amarela")
    } else {
        alert(`Você acertou ${acertos} de 10 perguntas!`);
    };
});