function showScreen(numero) {
    document.querySelectorAll('.screen').forEach(
        function(elemento) {
            elemento.style.display = 'none';
        }
    );
    document.getElementById('screen' + numero).style.display = 'block';
}