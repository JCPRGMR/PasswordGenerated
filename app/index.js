var longitud = document.getElementById("longitud")
var valor = document.getElementById("valor")
var btnGenerar = document.getElementById("btnGenerar")
var resultado = document.getElementById("resultado")

// Cambiar la longitud mostrado
longitud.oninput = () => {
    valor.textContent = longitud.value
}

// Generar contraseña
btnGenerar.onclick = () => {
    const size = parseInt(longitud.value)
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_+~|}{[]:;?><,./-="
    let password = ""

    // For para concatenar cada caracter random
    for (let i = 0; i < size; i++){
        password += chars[Math.floor(Math.random() * chars.length)]
    }
    // Enviar el password e imprimirlo en resultado
    resultado.textContent = password
}