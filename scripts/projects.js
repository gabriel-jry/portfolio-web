let cardAberto = null;

function mostrar_oculto_content(button) {
    const card = button.closest('.card');
    const ocultoContent = card.querySelector('.oculto-content');
    const cardsContainer = document.querySelector('.cards'); // Div principal que contém os cards

    // Fecha o card anteriormente aberto (se existir)
    if (cardAberto !== null) {
        fechar_oculto_content(cardAberto.querySelector('.close-button'));
    }

    // Exibe o conteúdo oculto
    ocultoContent.style.display = 'flex';
    card.classList.add('no-hover'); // Desativa o hover no card aberto
    cardAberto = card; // Armazena o card aberto

    // Desativa o zoom e muda o z-index de todos os outros cards
    document.querySelectorAll('.card').forEach(otherCard => {
        if (otherCard !== card) {
            otherCard.style.zIndex = '0'; // Define z-index 0 para os cards que não estão abertos
            otherCard.classList.add('no-hover'); // Remove o efeito de hover
        }
    });

    // Garante que o z-index da .oculto-content seja o maior possível
    ocultoContent.style.zIndex = '9999'; // Garantir que o conteúdo oculto esteja acima de tudo

    // Centraliza a rolagem na div principal com um deslocamento de 30px acima
    const cardsRect = cardsContainer.getBoundingClientRect(); // Obtém as coordenadas da div .cards
    const scrollTop = window.scrollY || document.documentElement.scrollTop; // Posição atual de rolagem
    const centerY = scrollTop + cardsRect.top + cardsRect.height / 2 - window.innerHeight / 2 - 30; // Calcula o centro com deslocamento

    // Move a rolagem suavemente para o centro da div .cards
    window.scrollTo({
        top: centerY,
        behavior: 'smooth'
    });
}

function fechar_oculto_content(button) {
    const card = button.closest('.card');
    const ocultoContent = card.querySelector('.oculto-content');

    // Fecha o conteúdo oculto
    ocultoContent.style.display = 'none';
    card.classList.remove('no-hover'); // Restaura o hover no card fechado

    // Restaura o z-index da .oculto-content para o valor inicial (0 ou outro valor desejado)
    ocultoContent.style.zIndex = ''; // Remove qualquer z-index customizado

    // Restaura o z-index dos cards
    document.querySelectorAll('.card').forEach(otherCard => {
        otherCard.style.zIndex = '1'; // Restaura o z-index padrão para os cards
        otherCard.classList.remove('no-hover'); // Restaura o efeito de hover
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
        fechar_oculto_content(button);
    });
});
