const toggleCheckbox = document.getElementById('toggle');

// Adiciona o evento de mudança no checkbox
toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
        // Adiciona a classe para o modo claro
        document.body.classList.add('light-mode');
    } else {
        // Remove a classe para voltar ao modo padrão
        document.body.classList.remove('light-mode');
    }
});
