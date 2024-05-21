
var elementos = {
    video: document.getElementById('video'),
    titulo: document.getElementById('titulo'),
    seta: document.getElementById('seta'),
    gatos: document.getElementById('gatitos'),
    btn1: document.getElementById('btn1'),
    btn2: document.getElementById('btn2'),
    btn3: document.getElementById('btn3')
};

function esconderElemento(elemento) {
    elemento.style.display = 'none';
}

function mostrarElemento(elemento) {
    elemento.style.display = 'flex';
}

function reiniciarJogo() {
    elementos.titulo.innerHTML = 'Qual par de alelo correspondente a pelagem desse filhote ?';
    elementos.titulo.style.marginTop = '0';
    esconderElemento(elementos.seta);
    mostrarElemento(elementos.gatos);
    mostrarElemento(elementos.btn1);
    mostrarElemento(elementos.btn2);
    mostrarElemento(elementos.btn3);
    elementos.btn1.innerHTML = 'AA';
    elementos.btn2.innerHTML = 'Aa';
    elementos.btn3.innerHTML = 'aa';
}

setTimeout(function() {
    esconderElemento(elementos.video);
    elementos.titulo.innerHTML = 'Olá vamos ajudar a mamãe gato a definir os alelos dos seus filhotes';
    elementos.titulo.style.marginTop = '30vh';
    mostrarElemento(elementos.seta);
}, 1000);

elementos.seta.addEventListener('click', function() {
    reiniciarJogo();
});

elementos.btn2.addEventListener('click', function() {
    elementos.titulo.innerHTML = 'Parabéns! Você acertou!';
    esconderElemento(elementos.gatos);
    esconderElemento(elementos.btn1);
    esconderElemento(elementos.btn2);
    esconderElemento(elementos.btn3);
    mostrarElemento(elementos.seta);
});

elementos.seta.addEventListener('click', function() {
    reiniciarJogo();
});

elementos.btn3.addEventListener('click', function() {
    elementos.titulo.innerHTML = 'Resposta errada clique para tentar novamente';
    esconderElemento(elementos.gatos);
    esconderElemento(elementos.btn1);
    esconderElemento(elementos.btn2);
    esconderElemento(elementos.btn3);
    mostrarElemento(elementos.seta);
});