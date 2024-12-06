window.onload = function() {
    // Data de início do relacionamento
    const dataInicial = new Date('2020-01-01T00:00:00'); // Mude para a data de início de vocês
    const contador = document.getElementById('contador');
    const mensagem = document.getElementById('mensagem');

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

    // Atualiza a contagem imediatamente
    atualizarContador();
    // Atualiza a cada segundo
    setInterval(atualizarContador, 1000);

    // Mensagem personalizada
    const mensagemPersonalizada = "Você é a luz da minha vida, e cada dia ao seu lado é um presente!";
    mensagem.textContent = mensagemPersonalizada;
}
