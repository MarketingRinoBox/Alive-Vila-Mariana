import './Porque.css'
import Carousel from 'react-elastic-carousel'
import { useRef } from 'react';

function Porque() {

    const carouselRef = useRef(null);
    let resetTimeout;

    return (
        <div className='porque'>
            <div className='porque-area'>
                <div className='porque-area-texto'>
                    <h1>Por que <span>a</span>live?</h1>
                    <p>Morar Na Vila Mariana, é mais do que um privilégio: é estar mais perto da cidade inteira e bem
                        ao tudo o que é preciso para viver bem: serviços, escolas, saúde, lazer e trabalho.</p>
                    <p>Para quem tem uma rotina intensa e quer morar bem, mas quer que o seu lar facilite a sua
                        vida. Quer liberdade para escolher o seu lazer. E quer a alegria de ter tudo sempre à mão.</p>
                </div>
            </div>
            <Carousel
            enableMouseSwipe={false}
            enableSwipe={false}
            ref={carouselRef}
            pagination={true}
            showArrows={false}
            autoPlaySpeed={4000}
            isRTL={false}
            onNextEnd={({ index }) => {
                clearTimeout(resetTimeout);
                resetTimeout = setTimeout(() => {
                    carouselRef?.current?.goTo(0);
                }, 4500); // same time
            }}
            enableAutoPlay={true}
            itemsToScroll={2}
            itemsToShow={3}
            >
                <div className='iconesWrapper'>
                    <img src='./logo-alive.png' alt='icone '/>
                    <p>Mais de 157 mil trabalhadores formais na região</p>
                </div>
                <div className='iconesWrapper'>
                    <img src='./logo-alive.png' alt='icone '/>
                    <p>Mobilidade e fácil acesso a 4 estações de metrô (Vila Mariana, Santa Cruz, Ana Rosa e Paraíso)</p>
                </div>
                <div className='iconesWrapper'>
                    <img src='./logo-alive.png' alt='icone '/>
                    <p>Região com o 7º melhor IDH de São Paulo</p>
                </div>
                <div className='iconesWrapper'>
                    <img src='./logo-alive.png' alt='icone '/>
                    <p>Próximo à Instituições de Ensino e Hospitais</p>
                </div>
                <div className='iconesWrapper'>
                    <img src='./logo-alive.png' alt='icone '/>
                    <p>Fácil acesso aos principais centros culturais, urbanos e empresariais da cidade</p>
                </div>
            </Carousel>
            <div className='spanArea'>
                <span>a</span>
            </div>
        </div>
    )
}

export default Porque