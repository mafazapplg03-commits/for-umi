// Script untuk Kartu Ucapan Interaktif
const interactiveCard = document.getElementById('greetingCard');
const closeCardBtn = document.getElementById('closeCardBtn');

interactiveCard.addEventListener('click', () => {
    interactiveCard.classList.add('open');
});

closeCardBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Mencegah card terbuka kembali saat tombol tutup diklik
    interactiveCard.classList.remove('open');
});


// Script untuk Generator Pesan / Doa Cinta untuk Umi
const quotes = [
    "\"Umi adalah pelita dalam keluarga, yang cahayanya takkan pernah padam oleh waktu.\"",
    "\"Terima kasih Umi, atas setiap pelukan hangat yang selalu menyembuhkan lelah.\"",
    "\"Doa Umi adalah jimat paling mujarab yang mengantarkan kesuksesan dalam setiap langkah.\"",
    "\"Senyum Umi adalah kebahagiaan terbesar bagi kami sekeluarga.\"",
    "\"Kasih sayang Umi bagaikan teduhnya naungan di bawah pohon rindang yang menenangkan.\"",
    "\"Sejauh apapun kaki melangkah, rumah dan rindu selalu bermuara pada pelukan Umi.\""
];

const quoteDisplay = document.getElementById('quoteDisplay');
const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.style.opacity = 0;
    
    setTimeout(() => {
        quoteDisplay.textContent = quotes[randomIndex];
        quoteDisplay.style.opacity = 1;
    }, 200);
});

// Efek transisi halus untuk quote display
quoteDisplay.style.transition = 'opacity 0.3s ease';