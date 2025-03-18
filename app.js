// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        mostrarLista();
        input.value = "";
        input.focus();
    } else if (amigos.includes(nombre)) {
        alert("El nombre ya está en la lista.");
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía agregue un amigo para continuar.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigoSorteado) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultadoDiv.appendChild(li);
}


