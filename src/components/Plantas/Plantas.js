import './Plantas.css'
import Carousel from 'react-elastic-carousel'

function Plantas() {
    return (
        <div className='plantas'>
            <h1 id='plantas' ><span>p</span>lantas</h1>
            <div className='tracado'></div>
            <Carousel>
                <div className='plantas-area'>
                    <div className='plantas-area-texto'>
                        <h1>Studio 24m²</h1>
                        <p>O studio de 24 m² conta com tomadas USB, caixa acoplada do vaso com sistema dual-flush, infraestrutura completa para instalação de ar-condicionado (equipamentos por conta do cliente).</p>
                    </div>
                    <div className='plantas-area-imagem'>
                        <img src='./24m2.png' alt='Imagem da planta'/>
                    </div>
                </div>
                <div className='plantas-area'>
                    <div className='plantas-area-texto'>
                        <h1>1 Dorm. 28M²</h1>
                        <p>O apartamento de 28 m² conta com tomadas USB, caixa acoplada do vaso com sistema dual-flush, infraestrutura completa para instalação de ar-condicionado (equipamentos por conta do cliente).</p>
                    </div>
                    <div className='plantas-area-imagem'>
                        <img src='./28m2.png' alt='Imagem da planta'/>
                    </div>
                </div>
                <div className='plantas-area'>
                    <div className='plantas-area-texto'>
                        <h1>1 Dorm. 25M²</h1>
                        <p>O apartamento de 25 m² conta com tomadas USB, caixa acoplada do vaso com sistema dual-flush, infraestrutura completa para instalação de ar-condicionado (equipamentos por conta do cliente).</p>
                    </div>
                    <div className='plantas-area-imagem'>
                        <img src='./25m2.png' alt='Imagem da planta'/>
                    </div>
                </div>
                <div className='plantas-area'>
                    <div className='plantas-area-texto'>
                        <h1>1 Dorm. 26M²</h1>
                        <p>O apartamento de 26 m² conta com tomadas USB, caixa acoplada do vaso com sistema dual-flush, infraestrutura completa para instalação de ar-condicionado (equipamentos por conta do cliente).</p>
                    </div>
                    <div className='plantas-area-imagem'>
                        <img src='./26m2.png' alt='Imagem da planta'/>
                    </div>
                </div>
            </Carousel>

        </div>
    )
}

export default Plantas