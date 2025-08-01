//Array para almacenar los nombres de tus amigos
let amigos = []

function agregarAmigos () {
    const nombre = document.getElementById('amigos')
    if (nombre.value === '') {
        alertaVacio()
    } else {
        amigos.push(nombre.value)
        nombre.value = ''
        mostrarAmigos()
    }
    console.log (agregarAmigos)
}
agregarAmigos = (axel
    
)