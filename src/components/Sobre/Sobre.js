import './Sobre.css'

function Sobre() {
    return (
        <div className='sobre'>
            <div className='sobre-area'>
                <div className='sobre-area-texto ajusteImg1'>
                    <img src='./a.png'/>
                    <p>O Alive Vila Mariana está em um dos bairros mais procurados em São Paulo, com um dos
                        maiores IDHs da cidade. Próximo das regiões centrais e rodeado de hospitais, faculdades,
                        facilidades e várias opções de lazer.</p>
                </div>
                <div className='sobre-area-texto ajusteImg2'>
                    <img className='ajusteImg' src='./a.png'/>
                    <p>É possível ter uma rotina intensa e ainda assim morar bem. Proporcionando facilidade no dia a
                        dia e liberdade para escolher o lazer, morar no Alive Vila Mariana é ter tudo à mão, com
                        conforto e estilo.</p>
                </div>
            </div>
        </div>
    )
}

export default Sobre