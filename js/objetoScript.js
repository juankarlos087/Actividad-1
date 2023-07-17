let elementos = localStorage.getItem('listaItems');
        elementos = elementos ? JSON.parse(elementos) : [];
        mostrarElementos();

        function agregarElemento() {
            let productoValor = document.getElementById('producto').value;
            let cantidadValor = parseFloat(document.getElementById('cantidad').value);
            let valorValor = parseFloat(document.getElementById('valor').value);

            if (productoValor && cantidadValor && valorValor) {
                let totalValor = (cantidadValor * valorValor).toFixed(2);
                document.getElementById('total').value = totalValor;

                elementos.push({
                    'producto': productoValor,
                    'cantidad': cantidadValor,
                    'valor': valorValor,
                    'total': totalValor
                });
                mostrarElementos();
            }
        }

        function mostrarElementos() {
            document.getElementById('producto').value = '';
            document.getElementById('cantidad').value = '';
            document.getElementById('valor').value = '';
            document.getElementById('total').value = '';

            let html = '';
            elementos.forEach((elem, index) => {
                html += `<div class="item-row">
                    <div class="col">${elem.producto}</div>
                    <div class="col">${elem.cantidad}</div>
                    <div class="col">${elem.valor}</div>
                    <div class="col">${elem.total}</div>
                    <div class="col">
                        <button type="button" class="btn btn-warning" onclick="eliminarItem(${index})">X</button>
                    </div>
                </div>`;
            });

            localStorage.setItem('listaItems', JSON.stringify(elementos));
            document.getElementById('elementos').innerHTML = html;
        }

        function eliminarItem(elemento) {
            elementos.splice(elemento, 1);
            mostrarElementos();
        }



