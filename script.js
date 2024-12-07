window.onload = function() {
    const dataInicial = new Date('2024-07-21T21:00:00'); // Data inicial do relacionamento
    const contador = document.getElementById('contador');
    const mensagem = document.getElementById('mensagem');

    const frases = [
        "Desde que te conheci, cada dia é uma aventura maravilhosa.",
        "Seu sorriso ilumina meus dias, e seus olhos castanhos me encantam a cada olhar.",
        "Amo os seus cabelos vermelhos que refletem sua paixão e alegria.",
        "Você trouxe cor e vida aos meus dias, e eu sou eternamente grato.",
        "Cada momento com você é um tesouro que guardo no meu coração.",
        "Os dias ao seu lado são preenchidos com amor e felicidade.",
        "Você é a melodia que embala meus dias e a paz que acalma meu coração.",
        "Seu amor é a luz que guia meu caminho e o calor que aquece meu coração."
    ];

    function atualizarContador() {
        const agora = new Date();
        let diferenca = agora - dataInicial;

        const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
        diferenca -= anos * 1000 * 60 * 60 * 24 * 365;

        const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30));
        diferenca -= meses * 1000 * 60 * 60 * 24 * 30;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        diferenca -= dias * 1000 * 60 * 60 * 24;

        const horas = Math.floor(diferenca / (1000 * 60 * 60));
        diferenca -= horas * 1000 * 60 * 60;

        const minutos = Math.floor(diferenca / (1000 * 60));
        diferenca -= minutos * 1000 * 60;

        const segundos = Math.floor(diferenca / 1000);

        contador.textContent = `Estamos juntos há ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos!`;
    }

    function mostrarMensagem() {
        const indice = Math.floor(Math.random() * frases.length);
        mensagem.textContent = frases[indice];
    }

    // Atualiza a contagem e a mensagem imediatamente
    atualizarContador();
    mostrarMensagem();
    // Atualiza a contagem a cada segundo
    setInterval(atualizarContador, 1000);
}
