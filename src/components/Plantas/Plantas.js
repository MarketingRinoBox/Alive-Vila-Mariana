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
                        {/* <span>0 x dormitórios</span> */}
                        <p>O studio de 24 m² conta com tomadas USB, caixa acoplada do vaso com sistema dual-flush, infraestrutura completa para instalação de ar-condicionado (ar-condicionado por conta do cliente).</p>
                    </div>
                    {/* <div className='plantas-area-icones'>
                        <div className='plantas-icones'>
                            <img src='./carro-icone.png' alt='Carro icone'/>
                            <p>1 vaga</p>
                        </div>
                        <div className='plantas-icones'>
                            <img src='./cama-icone.png' alt='Cama icone'/>
                            <p>1 suite</p>
                        </div>
                    </div> */}
                    <div className='plantas-area-imagem'>
                        <img src='./p1.png' alt='Imagem da planta'/>
                    </div>
                </div>
                <div className='plantas-area'>
                    <div className='plantas-area-texto'>
                        <h1>Dorm 28M²</h1>
                        {/* <span>0 x dormitórios</span> */}
                        <p>O studio de 28 m² conta com tomadas USB, caixa acoplada do vaso com sistema dual-flush, infraestrutura completa para instalação de ar-condicionado (ar-condicionado por conta do cliente).</p>
                    </div>
                    {/* <div className='plantas-area-icones'>
                        <div className='plantas-icones'>
                            <img src='./carro-icone.png' alt='Carro icone'/>
                            <p>1 vaga</p>
                        </div>
                        <div className='plantas-icones'>
                            <img src='./cama-icone.png' alt='Cama icone'/>
                            <p>1 suite</p>
                        </div>
                    </div> */}
                    <div className='plantas-area-imagem'>
                        <img src='./p2.png' alt='Imagem da planta'/>
                    </div>
                </div>
                <div className='plantas-area'>
                    <div className='plantas-area-texto'>
                        <h1>Dorm 25M²</h1>
                        {/* <span>0 x dormitórios</span> */}
                        <p>O studio de 25 m² conta com tomadas USB, caixa acoplada do vaso com sistema dual-flush, infraestrutura completa para instalação de ar-condicionado (ar-condicionado por conta do cliente).</p>
                    </div>
                    {/* <div className='plantas-area-icones'>
                        <div className='plantas-icones'>
                            <img src='./carro-icone.png' alt='Carro icone'/>
                            <p>1 vaga</p>
                        </div>
                        <div className='plantas-icones'>
                            <img src='./cama-icone.png' alt='Cama icone'/>
                            <p>1 suite</p>
                        </div>
                    </div> */}
                    <div className='plantas-area-imagem'>
                        <img src='./p3.png' alt='Imagem da planta'/>
                    </div>
                </div>
                <div className='plantas-area'>
                    <div className='plantas-area-texto'>
                        <h1>Dorm 26M²</h1>
                        {/* <span>0 x dormitórios</span> */}
                        <p>O studio de 26 m² conta com tomadas USB, caixa acoplada do vaso com sistema dual-flush, infraestrutura completa para instalação de ar-condicionado (ar-condicionado por conta do cliente).</p>
                    </div>
                    {/* <div className='plantas-area-icones'>
                        <div className='plantas-icones'>
                            <img src='./carro-icone.png' alt='Carro icone'/>
                            <p>1 vaga</p>
                        </div>
                        <div className='plantas-icones'>
                            <img src='./cama-icone.png' alt='Cama icone'/>
                            <p>1 suite</p>
                        </div>
                    </div> */}
                    <div className='plantas-area-imagem'>
                        <img src='./p4.png' alt='Imagem da planta'/>
                    </div>
                </div>
            </Carousel>

        </div>
    )
}

export default Plantas