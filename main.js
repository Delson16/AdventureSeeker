var button = document.getElementById('readButton');

button.addEventListener('click', function () {
    var paragrafo = document.querySelector('.paragrafo');
    var txt = document.querySelector('.txt');

    paragrafo.classList.toggle('active');
    txt.classList.toggle('active');

    if (paragrafo.classList.contains('active')) {
        return button.textContent = 'Ler menos'
    }
    return button.textContent = 'Ler mais'
})

function mostrarTexto(texto = 'text1', sessao = 1) {

    switch (sessao) {
        case 1:
            var titulo = document.querySelector('.titulo');
            var paragrafo = document.querySelector('.paragrafo');
            var img = document.querySelector('.img');

            if (texto == 'text1') {
                titulo.innerText = 'História e Cultura Milenar';
                paragrafo.innerHTML = '<p>A cidade de Roma é um tesouro vivo da história e da cultura milenar, onde cada rua e cada monumento conta uma história fascinante. Do imponente Coliseu, que ecoa os rugidos das multidões dos antigos espetáculos de gladiadores, ao majestoso Vaticano, lar da Igreja Católica e suas obras de arte renascentistas, cada passo em Roma é uma jornada no tempo. Através de museus repletos de tesouros arqueológicos e igrejas adornadas com afrescos de mestres como Michelangelo e Rafael, os visitantes têm a oportunidade de testemunhar em primeira mão a grandeza e a influência duradoura do Império Romano e da civilização ocidental.</p>'
                // img.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYyM4aERBaSAEu1QA5CbcCbOjyUxhfdhWqQ&usqp=CAU)'

            }
            else if(texto == 'text2'){
                titulo.innerText = 'Culinária Italiana';
                paragrafo.innerHTML = '<p>Uma visita a Roma não estaria completa sem uma incursão pela culinária italiana, uma explosão de sabores que cativa todos os sentidos. Das massas artesanais cozidas al dente aos pedaços de pizza fresca e crocante, cada prato é uma homenagem à tradição e ao amor pela comida. Em meio às ruas movimentadas, os mercados locais oferecem uma variedade tentadora de queijos, azeites, carnes curadas e produtos frescos da região, convidando os visitantes a se perder em um mundo de aromas e sabores autênticos.</p>'
            }
            else{
                titulo.innerText = 'Atmosfera Romântica';
                paragrafo.innerHTML = '<p>Roma é uma cidade que exala romance em cada esquina, com suas praças pitorescas, fontes cintilantes e vistas deslumbrantes. À luz do sol dourado, os Jardins Villa Borghese oferecem um refúgio tranquilo para casais apaixonados, enquanto à noite, as ruas ganham vida com o brilho suave das luzes e o som de risadas e músicas ao vivo. Entre os becos estreitos e os cafés charmosos, os casais podem compartilhar momentos íntimos e criar memórias duradouras em uma cidade que parece ter sido feita para o romance.</p>'
            }
    }
}