// Calcular o tempo juntos
const startDate = new Date('2024-07-21T21:00:00');
setInterval(() => {
    const now = new Date();
    const totalYears = now.getFullYear() - startDate.getFullYear();
    const totalMonths = now.getMonth() - startDate.getMonth() + (12 * totalYears);
    
    // Contar os anos bissextos
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    
    const totalDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    const daysInStartMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();
    
    const years = Math.floor(totalMonths / 12);
    const months = (totalMonths % 12) - (now.getDate() < startDate.getDate() ? 1 : 0);
    const days = (now.getDate() + (now.getDate() < startDate.getDate() ? daysInStartMonth : 0)) - startDate.getDate();
    const hours = Math.floor((totalDays * 24 + now.getHours() - startDate.getHours()) % 24);
    const minutes = Math.floor((totalDays * 24 * 60 + now.getMinutes() - startDate.getMinutes()) % 60);
    const seconds = Math.floor((totalDays * 24 * 60 * 60 + now.getSeconds() - startDate.getSeconds()) % 60);
    
    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
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
