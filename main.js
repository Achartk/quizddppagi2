const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    // Tambahkan 3 soal lainnya 
    {
        "q": "Siapakah Hokage pertama konoha?",
        "o": [
            'Soekarno',
            'Hasirama Senju',
            'Uzumaki Naruto',
            'Jokowi',
        ],
        "a": 1 
    },
    {
        "q": "apa ibukota indonesia?",
        "o": [
            'Jakarta',
            'Bandung',
            'Surabaya',
            'Yogyakarta',
        ],
        "a": 0 
    },
    {
        "q": "Chidori adalah ilmu dari?",
        "o": [
            'Cinta',
            'angin',
            'Petir',
            'Tumbuhan',
        ],
        "a": 2 
    }
];

let nama = prompt('Input nama: ')

// Lengkapi code program yang belum selesai

console.log("Kuis selesai")
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)


