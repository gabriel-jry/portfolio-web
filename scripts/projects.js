let cardAberto = null;

function mostrar_oculto_content(button) {
    const card = button.closest('.card');
    const ocultoContent = card.querySelector('.oculto-content');

    // Só exibe o conteúdo se não houver nenhum card aberto
    if (cardAberto !== null) {
        fechar_oculto_content(cardAberto.querySelector('.close-button'));
    }

    // Exibe o conteúdo oculto
    ocultoContent.style.display = 'flex';
    card.classList.add('no-hover'); // Desativa hover no card aberto
    cardAberto = card; // Armazena o card aberto

    // Desativa a interação com outros cards
    document.querySelectorAll('.card').forEach(otherCard => {
        if (otherCard !== card) {
            otherCard.classList.add('no-hover');
            otherCard.querySelector('.oculto-content').style.display = 'none'; // Fecha outros cards
        }
    });
}

function fechar_oculto_content(button) {
    const card = button.closest('.card');
    const ocultoContent = card.querySelector('.oculto-content');

    // Fecha o conteúdo oculto
    ocultoContent.style.display = 'none';
    card.classList.remove('no-hover'); // Restaura o hover

    // Permite interação com outros cards
    document.querySelectorAll('.card').forEach(otherCard => {
        otherCard.classList.remove('no-hover');
    });

    // Limpa a referência ao card aberto
    cardAberto = null;
}

// Adiciona o evento de clique nos botões de "ver mais"
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        mostrar_oculto_content(button);
    });
});

// Adiciona o evento de clique nos botões de "fechar"
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = button.closest('.card');
        const ocultoContent = card.querySelector('.oculto-content');
        ocultoContent.style.display = 'none';
        card.classList.remove('no-hover');
        cardAberto = null;
    });
});
