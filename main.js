
function lerMais(sessao){

    var paragrafo = document.querySelectorAll('.paragrafo')[sessao];
    var txt = document.querySelectorAll('.txt')[sessao];
    var button = document.querySelectorAll('.readButton')[sessao];

    paragrafo.classList.toggle('active');
    txt.classList.toggle('active');

    if (paragrafo.classList.contains('active')){
        button.innerText = 'Ler menos';
    }
    else{
        button.innerText = 'Ler mais';
    }

}
function mostrarTexto(texto = 'text1', sessao = 1) {

    switch (sessao) {
        case 1:
            var titulo = document.querySelectorAll('.titulo')[0];
            var paragrafo = document.querySelectorAll('.paragrafo')[0];

            paragrafo.classList.remove('animation');
            titulo.classList.remove('animation-titulo');

            if (texto == 'text1') {
                titulo.innerText = 'História e Cultura Milenar';
                paragrafo.innerHTML = '<p>A cidade de Roma é um tesouro vivo da história e da cultura milenar, onde cada rua e cada monumento conta uma história fascinante. Do imponente Coliseu, que ecoa os rugidos das multidões dos antigos espetáculos de gladiadores, ao majestoso Vaticano, lar da Igreja Católica e suas obras de arte renascentistas, cada passo em Roma é uma jornada no tempo. Através de museus repletos de tesouros arqueológicos e igrejas adornadas com afrescos de mestres como Michelangelo e Rafael, os visitantes têm a oportunidade de testemunhar em primeira mão a grandeza e a influência duradoura do Império Romano e da civilização ocidental.</p>'
            }
            else if(texto == 'text2'){
                titulo.innerText = 'Culinária Italiana';
                paragrafo.innerHTML = '<p>Uma visita a Roma não estaria completa sem uma incursão pela culinária italiana, uma explosão de sabores que cativa todos os sentidos. Das massas artesanais cozidas al dente aos pedaços de pizza fresca e crocante, cada prato é uma homenagem à tradição e ao amor pela comida. Em meio às ruas movimentadas, os mercados locais oferecem uma variedade tentadora de queijos, azeites, carnes curadas e produtos frescos da região, convidando os visitantes a se perder em um mundo de aromas e sabores autênticos.</p>'
            }
            else{
                titulo.innerText = 'Atmosfera Romântica';
                paragrafo.innerHTML = '<p>Roma é uma cidade que exala romance em cada esquina, com suas praças pitorescas, fontes cintilantes e vistas deslumbrantes. À luz do sol dourado, os Jardins Villa Borghese oferecem um refúgio tranquilo para casais apaixonados, enquanto à noite, as ruas ganham vida com o brilho suave das luzes e o som de risadas e músicas ao vivo. Entre os becos estreitos e os cafés charmosos, os casais podem compartilhar momentos íntimos e criar memórias duradouras em uma cidade que parece ter sido feita para o romance.</p>'
            }
            setTimeout(function() {
                paragrafo.classList.add('animation');
                titulo.classList.add('animation-titulo');
            }, 10);
            break;
        case 2:
            var titulo = document.querySelectorAll('.titulo')[1];
            var paragrafo = document.querySelectorAll('.paragrafo')[1];

            paragrafo.classList.remove('animation');
            titulo.classList.remove('animation-titulo');

            if (texto == 'text1') {
                titulo.innerText = 'Diversidade e Energia';
                paragrafo.innerHTML = '<p>Nova York é uma cidade que pulsa com uma energia única e uma mistura de culturas que a torna verdadeiramente especial. Desde os arranha-céus imponentes de Manhattan até os bairros ecléticos do Brooklyn, cada parte da cidade possui uma atmosfera distinta e vibrante. Passear pelas ruas movimentadas de Nova York é como fazer uma viagem ao redor do mundo, com uma infinidade de restaurantes, lojas e eventos culturais que refletem a diversidade e a criatividade da cidade.</p>'
            }
            else if(texto == 'text2'){
                titulo.innerText = 'Arquitetura Urbana';
                paragrafo.innerHTML = '<p>Nova York é conhecida por sua icônica paisagem urbana e sua arquitetura impressionante, que inclui símbolos como a Estátua da Liberdade, o Empire State Building e a Ponte do Brooklyn. Esses marcos históricos não apenas encantam os visitantes com sua grandeza, mas também contam a história da cidade e seu papel no cenário global. Além disso, os bairros de Nova York são pontilhados com edifícios históricos, galerias de arte e espaços públicos que celebram a criatividade e a inovação.</p>'
            }
            else{
                titulo.innerText = 'Cultura e Entretenimento';
                paragrafo.innerHTML = '<p>Em Nova York, as opções de entretenimento são infinitas, desde espetáculos da Broadway até shows de música ao vivo, exposições de arte e festivais de comida. Os teatros da Broadway oferecem produções de classe mundial que atraem espectadores de todo o mundo, enquanto os museus de Nova York abrigam coleções que vão desde arte clássica até contemporânea. Além disso, a cidade é lar de uma cena gastronômica dinâmica, com uma infinidade de restaurantes que servem uma variedade de cozinhas do mundo todo. Em Nova York, a diversão nunca termina e sempre há algo novo para explorar e descobrir.</p>'
            }
            setTimeout(function() {
                paragrafo.classList.add('animation');
                titulo.classList.add('animation-titulo');
            }, 10);
            break;
        case 3:
            var titulo = document.querySelectorAll('.titulo')[2];
            var paragrafo = document.querySelectorAll('.paragrafo')[2];

            paragrafo.classList.remove('animation');
            titulo.classList.remove('animation-titulo');

            if (texto == 'text1') {
                titulo.innerText = 'Tradição e Espiritualidade';
                paragrafo.innerHTML = '<p>Kyoto é um santuário da tradição e espiritualidade japonesas, onde templos antigos e jardins zen refletem séculos de história e cultura. A cidade é famosa por seus templos históricos, como o Kinkaku-ji (Pavilhão Dourado) e o Kiyomizu-dera, que oferecem aos visitantes uma visão única da arquitetura e das práticas religiosas do Japão. Além disso, os festivais sazonais e as cerimônias de chá oferecem uma oportunidade para os visitantes experimentarem a serenidade e a beleza da cultura japonesa tradicional.</p>'
            }
            else if(texto == 'text2'){
                titulo.innerText = 'Natureza e Serenidade';
                paragrafo.innerHTML = '<p>Em meio à agitação da cidade, Kyoto oferece refúgios naturais de serenidade e beleza, como o Parque Maruyama e o Caminho do Filósofo. Estes espaços verdes são ideais para passeios relaxantes, contemplação e apreciação da natureza. Além disso, a cidade está cercada por montanhas e florestas exuberantes, oferecendo aos visitantes a oportunidade de fazer caminhadas, passeios de bicicleta e até mesmo retiros espirituais em templos nas montanhas.</p>'
            }
            else{
                titulo.innerText = 'Tradições Artesanais';
                paragrafo.innerHTML = '<p>Kyoto é um centro de artes e tradições artesanais, onde habilidades antigas são preservadas e celebradas. Os visitantes podem explorar bairros históricos, como Gion e Higashiyama, que são famosos por suas ruas de paralelepípedos, casas de chá tradicionais e lojas de artesanato. Além disso, a cidade é conhecida por suas cerâmicas, têxteis e papel washi de alta qualidade, que são produzidos por artesãos locais usando técnicas tradicionais transmitidas de geração em geração. Em Kyoto, os visitantes podem mergulhar nas artes e tradições do Japão e levar para casa lembranças únicas e significativas de sua viagem.</p>'
            }
            setTimeout(function() {
                paragrafo.classList.add('animation');
                titulo.classList.add('animation-titulo');
            }, 10);
            break;
    }
}
