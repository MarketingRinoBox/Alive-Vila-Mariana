import './Diferenciais.css'

function Diferenciais() {
    return (
        <div className='diferenciais'>
            <h1 id='diferenciais' ><span>d</span>iferenciais</h1>
            <div className='tracado'></div>
            <div className='diferenciais-box'>
                <div className='diferenciais-box-texto'>
                    <ul>
                        <li>
                            <div className='listaDiferenciais'>
                                <i className="fa-sharp fa-solid fa-circle"></i>WiFi nas áreas comuns*
                            </div>
                        </li>
                        <li>
                            <div className='listaDiferenciais'>
                                <i className="fa-sharp fa-solid fa-circle"></i>Lavanderia compartilhada com projeto e instalação by OMO
                            </div>
                        </li>
                        <li>
                            <div className='listaDiferenciais'>
                                <i className="fa-sharp fa-solid fa-circle"></i>Tratamento acústico anti-ruídos**
                            </div>
                        </li>
                        <li>
                            <div className='listaDiferenciais'>
                                <i className="fa-sharp fa-solid fa-circle"></i>Espaço Coworking no térreo
                            </div>
                        </li>
                        <li>
                            <div className='listaDiferenciais'>
                                <i className="fa-sharp fa-solid fa-circle"></i>Lazer em espaço completo, com piscina, churrasqueira e Sky Lounge
                            </div>
                        </li>
                        <li>
                            <div className='listaDiferenciais-alt'>
                                *Será entregue infraestrutura para instalação, operação a cargo do condomínio.
                            </div>
                        </li>
                        <li>
                            <div className='listaDiferenciais-alt'>
                                **Conforme norma de desempenho (NBR 15575/2013).
                            </div>
                        </li>
                    </ul>
                </div>
                <img src='./omo-imagem.png' alt='' />
            </div>
            <div className='spanArea'>
                <span>a</span>
            </div>
        </div>
    )
}

export default Diferenciais