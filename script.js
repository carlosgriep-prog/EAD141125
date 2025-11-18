const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");

botao1.addEventListener("click", function() {
    window.location.href = "https://www.google.com/search?q=academias+de+artes+marciais+em+caxias+do+sul";
});

botao2.addEventListener("click", function() {
    window.location.href = "https://www.bauerfeind.com.br/como-melhorar-a-performance-nas-artes-marciais?srsltid=AfmBOop-pO3NQqzpBh5fprrQmqUQS6VseWBHUVxkGFEl3lHCAjQ92zKN";
});

const lutador = document.getElementById("lutador");

<<<<<<< HEAD

=======
>>>>>>> b77307405a90197b01a798ffe9685ab7e1fdb81e
const imagemOriginal = "Bruce_Irvin_TTT2-400x361.webp";
const imagemNova = "Sagat.webp";

let trocado = false;

lutador.addEventListener("click", function () {
    if (!trocado) {
        lutador.src = imagemNova; 
        trocado = true;
    } else {
        lutador.src = imagemOriginal;
        trocado = false;
    }
});
