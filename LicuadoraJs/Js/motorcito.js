/*console.log('Hola que tal soy el chico de las poesias')*/


/* declaramos variable con estado inicial*/
var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");

var botonLicuadora = document.getElementById("blender-button-sound");
var sonidoLicuadora = document.getElementById("blender-sound");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") { // esto es lo mismo que decir si esta apagada encendela//
        estadoLicuadora = "encendido";
        hacerBrrBrr();
        licuadora.classList.add("active");
        console.log("me prendiste") // y por consola tirame " me prendiste"//
    } else {
        estadoLicuadora = "apagada"; // si esta diferente de "apgada", es decir "encendida"
        hacerBrrBrr();
        licuadora.classList.remove("active");
        console.log("me apagaste"); // apagala
    }
}

function hacerBrrBrr() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play(); // si esta encendida, reproducir sonido del boton//
        sonidoLicuadora.pause(); // y pausarme el sonido de la licuadora //
        sonidoLicuadora.currentTime = 0;
        // aca como pausamos arriba el sonido ( x ej en el seg 2) para que vuelva a reproducirse desde 0, se declara currentTime=0;
    }
}
