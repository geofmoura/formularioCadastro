document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.form-image img');
    let currentIndex = 0; // Índice da imagem atual

    // Função para alternar imagens automaticamente com transição suave
    function changeImage() {
        // Esconde todas as imagens com transição suave
        images.forEach(image => {
            image.style.transition = 'opacity 0.5s ease';
            image.style.opacity = 0;
            image.style.zIndex = 0; // Coloca a imagem de volta ao seu zIndex original
            image.classList.remove('center-image'); // Remove a classe de centralização
        });

        // Mostra a próxima imagem com transição suave
        images[currentIndex].style.opacity = 1;
        images[currentIndex].style.zIndex = 1; // Coloca a imagem acima das outras
        images[currentIndex].classList.add('center-image'); // Adiciona classe para centralizar a imagem

        // Salva o índice da imagem atual no localStorage
        localStorage.setItem('lastImage', currentIndex + 1);

        // Incrementa o índice para a próxima imagem
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Chama a função para a primeira imagem ao carregar a página
    changeImage();

    // Define intervalo para alternar as imagens a cada 3 segundos (3000 milissegundos)
    setInterval(changeImage, 3000);
});
