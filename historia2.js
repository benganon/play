// let free = false;

// const validarCliente = (time) => {
//     let edad = prompt("cual es su edad")
//     if (edad > 18) {

//         if (time >= 2 && time < 7 && free == false) {
//             alert("podes pasar gratis por que sos la primera persona despues de las 2AM");
//             free = true;

//         } else {
//             alert(`son las ${time} :HS y podes psar pero tendras que pagar la entrada`)
//         }
//     } else {
//         alert("no podes pasar por que sos menor de edad")
//     }
//     document.write
// }

// validarCliente(23);
// validarCliente(24);
// validarCliente(2);
// validarCliente(0.6);
// validarCliente(1);
// validarCliente(2);
// validarCliente(2.4);
// validarCliente(3);

//                          ******** EJERCICIO 2 ********

// pedir por pantalla los nombres de los participantes
// tambien a partir de las 9.30 pm ya no podran pasar
// === los participantes del salon seran recibidos sin vigilancia
// === los participantes que no seran recibidos bajo vigilancia




// const participantes = (time) => {
//     let integrantes = prompt("ingrese su nombre");

//     if (time <= 9) {
//         if (integrantes == "maria" || integrantes == "pepe" || integrantes == "juan") {
//             alert("BIENVENIDO puedes pasar sin vigilancia")
//         } else {
//             alert("BIENVENIDO pasaras con vigilancia")
//         }
//     } else {
//         alert("no pudes pasar por que son las " + time)
//     }

// }

// participantes(1);
// participantes(2);
// participantes(3);
// participantes(4);
// participantes(10);
// participantes(11);
// participantes(12);


// ***** CREAR UN JUEGO CREATIVO*******
usuario = prompt("ingresa su nombre")

alert(`hola ${usuario} tienes 3 INTENTOS PARA ADIVINAR MI NUMERO FAVORITO`)
numero = 4;

for (let i = 1; i < numero; i++) {
    persona = prompt("ingrese un numero es tu intento " + i);
    if (i == 3) {
        alert(`LO SIENTO ${usuario} AGOTASTE TODO TUS INTENTOS`)
    } else if (persona < 42) {
        alert("te falta")
    } else if (persona == 42) {
        alert("HAS GANADO EL JUEGO DE ROGER 😊")
        break;
    } else if (persona > 42) {
        alert("te pasaste")
    } else {
        alert("no escribio un numero 😞")
    }

}