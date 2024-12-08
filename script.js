// Calcular o tempo juntos
const startDate = new Date('2024-07-21T21:00:00');
setInterval(() => {
    const now = new Date();
    const elapsed = now - startDate;
    const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30)) % 12;
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24)) % 30;
    const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsed / 1000) % 60);

    document.getElementById('timer').innerText = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}, 1000);

// Lista de frases românticas
const quotes = [
    "Desde que te conheci, cada dia é uma aventura maravilhosa.",
    "Seu sorriso ilumina meus dias, e seus olhos castanhos me encantam a cada olhar.",
    "Amo os seus cabelos vermelhos que refletem sua paixão e alegria.",
    "Você trouxe cor e vida aos meus dias, e eu sou eternamente grato.",
    "Cada momento com você é um tesouro que guardo no meu coração.",
    "Os dias ao seu lado são preenchidos com amor e felicidade.",
    "Você é a melodia que embala meus dias e a paz que acalma meu coração.",
    "Seu amor é a luz que guia meu caminho e o calor que aquece meu coração."
];

// Atualizar a frase romântica
function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

updateQuote();
setInterval(updateQuote, 10000);
