import './FichaTecnica.css'

function FichaTecnica() {
    return (
        <div className='fichaTecnica'>
            <h1 id='fichaTecnica'><span>f</span>icha técnica</h1>
            <div className="fichaTecnica-box">
                    <div className="fichaTecnica-area-endereco">
                        <div className="fichaTecnica-area-itens">
                            <ul className="enderecos-lista">
                                <li>Tipologias:</li>
                                <li>Residencial + Loja</li>
                            </ul>
                            <ul className="enderecos-lista">
                                <li>Área do terreno:</li>
                                <li>1.486m²</li>
                            </ul>
                            <ul className="enderecos-lista">
                                <li>Área total construída:</li>
                                <li>9.047m²</li>
                            </ul>
                            <ul className="enderecos-lista">
                                <li>Projeto de Arquitetura:</li>
                                <li>OFC Arquitetura</li>
                            </ul>
                            <ul className="enderecos-lista">
                                <li>Projeto de Interiores:</li>
                                <li>Fabiana Rosello <br/>Arquitetura e Interiores</li>
                            </ul>
                            <ul className="enderecos-lista">
                                <li>Projeto de Paisagismo:</li>
                                <li>Calux Jardins | CP Projetos</li>
                            </ul>
                        </div>
                        <div className="fichaTecnica-area-itens">

                            <ul className="enderecos-lista">
                                <li>Número de pavimentos e unidades por andar</li>
                                <ul>
                                    <li>20 pavimentos, sendo:</li>
                                    <li>1 subsolo (garagens)</li>
                                    <li>Térreo (acessos, loja e unidades nR)</li>
                                    <li>1° (15 finais de unidades nR)</li>
                                    <li>2° ao 8° (15 finais por pavimento – R)</li>
                                    <li>9° ao 10° (13 finais por pavimento - R)</li>
                                    <li>10º (área de lazer)</li>
                                    <li>11º ao 20º (8 finais por pavimento - R)</li>
                                </ul>
                            </ul>
                            <ul className="enderecos-lista">
                                <li>Total de Unidades</li>
                                <ul>
                                <li>208 unidades, sendo:</li>
                                <li>Loja</li>
                                <li>Studios - 64 Resid. & 9 Não resid.</li>
                                <li>1 Dorm. - 98 Resid. & 9 Não resid.</li>
                                <li>2 Dorm. - 16 Resid. & 2 Não resid.</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default FichaTecnica