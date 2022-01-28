let bot = document.getElementById("bot");
let botonIniciar = document.querySelector(".botoniniciar")
let botonPiedra = document.getElementById("piedra");
let botonPapel = document.getElementById("papel");
let botonTijera = document.getElementById("tijera");
let compuGame = document.querySelector(".compu")
let usuarioGame = document.querySelector(".usuario")
let contador = document.querySelector(".contador")
let h2Desaparecer = document.querySelector(".desaparecerh2")
let botonReiniciar = document.querySelector(".botonreiniciar")
let h3Cambia = document.querySelector(".h3cambia")

botonIniciar.addEventListener("click",()=>{
    setTimeout(()=>{
        usuarioGame.style.display = "flex";
    },4000)
    let arr = [2,1,"¡A jugar!"];
    let sound = new Audio('sound.mp3');
    botonIniciar.style.animationName = "desaparecer"
    botonIniciar.style.display = "none";
    h2Desaparecer.style.animationName = "desaparecer"
    setTimeout(()=>{
        contador.removeAttribute("style")
        setTimeout(()=>{
            contador.innerHTML = arr[0];
            sound.play();
            setTimeout(()=>{
                contador.innerHTML = arr[1];
                sound.play();
                setTimeout(()=>{
                    contador.innerHTML = arr[2];
                    sound.play();
                    setTimeout(()=>{
                        contador.style.animationName = "desaparecer"
                        compuGame.style.animationName = "aparecer";
                        usuarioGame.style.animationName = "aparecer";
                    },600)
                },1000)
            },1000)
        },1000)
    },500)
})

let num = Math.round(Math.random()*3);
let resultados;

const botPlay = ()=>{   
   if(num == 1) {
       bot.removeAttribute("style");
       bot.style.animationName = "aparecer";
   }
   if(num == 2) {
       bot.removeAttribute("style");
       bot.removeAttribute("class");
       bot.setAttribute("class","fas fa-hand-paper");
       bot.style.animationName = "aparecer";
   }
   if(num == 3){
    bot.removeAttribute("style");
    bot.removeAttribute("class");
    bot.setAttribute("class","fas fa-hand-scissors");
    bot.style.animationName = "aparecer";
   }
}

botonPiedra.addEventListener("click",()=>{
    botPlay();
    resultados = 1;
    setTimeout(()=>{
        if(num == 1) {
            h3Cambia.innerHTML = "Empataste";
            h3Cambia.style.animationName = "agrandar"
            h3Cambia.style.color = "white";
        } else if(num == 2) {
            h3Cambia.innerHTML = "Perdiste";
            h3Cambia.style.animationName = "agrandar"
            h3Cambia.style.color = "red";
        } else {
            h3Cambia.innerHTML = "Ganaste";
            h3Cambia.style.animationName = "agrandar"
            h3Cambia.style.color = "#4fc35d";
        }
    },300)
})
botonPapel.addEventListener("click",()=>{
    botPlay();
    resultados = 2;
    setTimeout(()=>{
        if(num == 1) {
            h3Cambia.innerHTML = "Ganaste";
            h3Cambia.style.animationName = "agrandar"
            h3Cambia.style.color = "#4fc35d";
        } else if(num == 2) {
            h3Cambia.innerHTML = "Empataste";
            h3Cambia.style.animationName = "agrandar"
            h3Cambia.style.color = "white";
        } else {
            h3Cambia.innerHTML = "Perdiste";
            h3Cambia.style.animationName = "agrandar"
            h3Cambia.style.color = "red";
        }
    },300)
})
botonTijera.addEventListener("click",()=>{
    botPlay();
    resultados = 3;
    setTimeout(()=>{
        if(num == 1) {
            h3Cambia.innerHTML = "Perdiste";
            h3Cambia.style.animationName = "agrandar"
            h3Cambia.style.color = "red";
        } else if(num == 2) {
            h3Cambia.innerHTML = "Ganaste";
            h3Cambia.style.animationName = "agrandar"
            h3Cambia.style.color = "#4fc35d";
        } else {
            h3Cambia.innerHTML = "Empataste";
            h3Cambia.style.animationName = "agrandar"
            h3Cambia.style.color = "white";
        }
    },300)
})
