let elementos = localStorage.getItem('listaElementos');
elementos = elementos ? elementos.split(',') : [];
mostrarElemento();


function agregarElemento() {
    let elemento = document.getElementById('elemento').value;
    elemento = elemento.split(',');
    for (let i = 0; i < elemento.length; i++) {
        if (elemento[i]) {
            elementos.push(elemento[i]);
            mostrarElemento();
        }
    }
}

function mostrarElemento() {
    document.getElementById('elemento').value = '';
    let html = '';
    for (let i = 0; i < elementos.length; i++) {
        html += `<div class="col-10 mb-3 elemento">${elementos[i]}</div>`;
        html += `<div class="col"><a href="#" class="btn btn-warning" onclick="eliminarElemento(${i})">X</a></div>`;
    }

    localStorage.setItem('listaElementos', elementos);
    document.getElementById('elementos').innerHTML = html;
}

function eliminarElemento(elemento) {
    elementos.splice(elemento, 1);
    mostrarElemento();
}
