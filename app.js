function sortear() {
    var numero = Math.floor(Math.random() * 100) + 1;
    document.getElementById("resultado").innerHTML = "O número sorteado é: " + numero;
}