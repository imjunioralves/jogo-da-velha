const celulas = Array.from(document.querySelectorAll('.celula'));
let turno = "X"; // Começa com X
function verificaVencedor() {
    const combinacoes = [
        [0,1,2], [3,4,5], [6,7,8], // linhas
        [0,3,6], [1,4,7], [2,5,8], // colunas
        [0,4,8], [2,4,6]           // diagonais
    ];
    for (const combo of combinacoes) {
        const [a, b, c] = combo;
        if (
            celulas[a].textContent &&
            celulas[a].textContent === celulas[b].textContent &&
            celulas[a].textContent === celulas[c].textContent
        ) {
            console.log(`Você ganhou: ${celulas[a].textContent}`);
            alert(`Jogador ${celulas[a].textContent} venceu`);
            return true;
        }
    } return false;
}

// Seleciona todas as células


celulas.forEach(celula => {
    celula.addEventListener('click', () => {
        if (celula.textContent === "") { // Só marca se estiver vazio
            celula.textContent = turno;

            if (verificaVencedor()) {
                celulas.forEach(c => c.style.pointerEvents = 'none')
                return;
            }
            turno = turno === "X" ? "O" : "X"; // Alterna turno
        }
    });
});

