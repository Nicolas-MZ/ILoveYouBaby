// Calcular o tempo juntos
const startDate = new Date('2024-07-21T21:00:00');
setInterval(() => {
    const now = new Date();

    const years = now.getFullYear() - startDate.getFullYear();
    const months = now.getMonth() - startDate.getMonth() + (12 * (now.getFullYear() - startDate.getFullYear()));
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const days = now.getDate() - startDate.getDate();
    
    let totalMonths = months;
    if (days < 0) {
        totalMonths--;
    }
    
    const actualYears = Math.floor(totalMonths / 12);
    const actualMonths = totalMonths % 12;
    
    const actualDays = now.getDate() - startDate.getDate();
    if (actualDays < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        actualDays += prevMonth;
    }
    
    const hours = now.getHours() - startDate.getHours();
    const minutes = now.getMinutes() - startDate.getMinutes();
    const seconds = now.getSeconds() - startDate.getSeconds();

    document.getElementById('years').innerText = actualYears;
    document.getElementById('months').innerText = actualMonths;
    document.getElementById('days').innerText = actualDays;
    document.getElementById('hours').innerText = hours >= 0 ? hours : 24 + hours;
    document.getElementById('minutes').innerText = minutes >= 0 ? minutes : 60 + minutes;
    document.getElementById('seconds').innerText = seconds >= 0 ? seconds : 60 + seconds;
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
