function agregarContenedor() {
    fetch('/dock', {method:'POST'})
    .then(response => response.text())
    .then(message => alert(message))
    .catch(error=> console.error(error))
}

function eliminarContenedor() {
    fetch('/dock', {method: 'DELETE'})
    .then(response => response.text())
    .then(message => alert(message))
    .catch(error=> console.error(error))
}
function obtenerIPContenedor() {
    // Nombre del contenedor a obtener
    const nombreContenedor = 'contenedor1';

    //  solicitud GET al servidor para obtener la dirección IP
    fetch(`/getContainerIP/${nombreContenedor}`)
    .then(response => response.json())
    .then(data => {
        // Actualiza el elemento en la página con la dirección IP obtenida
        const ipContainerElement = document.getElementById('ipContainer');
        ipContainerElement.textContent = data.ipAddress;
    })
    .catch(error => {
        console.error(error);
    });
}
