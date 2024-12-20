// Calcular o tempo juntos
const startDate = new Date('2024-07-21T21:00:00');
setInterval(() => {
    const now = new Date();

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    
    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }

    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        months--;
        days += daysInMonth(now.getFullYear(), now.getMonth() - 1);
    }

    if (months < 0) {
        years--;
        months += 12;
    }

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
    "Cada momento com você é um tesouro que guardo no meu coração.",
    "Os dias ao seu lado são preenchidos com amor e felicidade.",
    "Você é a melodia que embala meus dias e a paz que acalma meu coração.",
    "Seu amor é a luz que guia meu caminho e o calor que aquece meu coração.",
    "Desde o dia em que te conheci, meu coração bate mais forte.",
    "Cada momento ao seu lado é único, e fica eternizado em meu coração."
];

// Atualizar a frase romântica
function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

updateQuote();
setInterval(updateQuote, 10000);
