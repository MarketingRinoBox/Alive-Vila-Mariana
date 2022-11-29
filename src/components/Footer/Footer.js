import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-area'>
                <div className='footer-text-area'>
                    <div className='footer-dwIncorp'>
                        <img src='./dwincorp.png' alt=''/>
                        <p>Imagens preliminares sujeitas a alteração. As unidades autônomas e áreas comuns do
                            empreendimento serão entregues conforme Projeto Legal, Memorial de Incorporação e

                            Memorial Descritivo de Acabamento do empreendimento, que prevalecerão em caso de conflito
                            com qualquer outro material ou informação relativa ao empreendimento. Os empreendimentos
                            serão comercializados por profissionais credenciados no Creci. A DW Incorp atua com parceria
                            de corretores de imóveis da região. Para estas ou mais informações, entre em contato
                            conosco.</p>
                    </div>
                    <div className='footer-contatos'>
                        <ul>
                            <li><strong>Central de vendas:</strong></li>
                            <li>11 5242-0204</li>
                        </ul>
                        <ul>
                            <li><strong>Atendimento ao cliente:</strong></li>
                            <li>11 3151-2366</li>
                        </ul>
                        <ul>
                            <li>atendimento@planik.com.br</li>
                        </ul>
                        <ul>
                            <li><strong>Horário de atendimento</strong></li>
                            <li>Segunda à quinta das 9:00h às 18:00h<br/>Sexta-feira, das 09 às 16h</li>
                        </ul>
                        <div className='footer-icons'>
                        <a href='https://www.instagram.com/alivevilamariana/'><i className="fa-brands fa-instagram"></i></a>
                        <a href='https://www.facebook.com/people/Alive-Vila-Mariana/100066727030986/'><i className="fa-brands fa-facebook-f"></i></a>
                        <a href='https://www.linkedin.com/company/dw-incorp/?originalSubdomain=br'><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className='footer-copy'>
                    <span>Politica De Privacidade</span>
                    <span>2022 Copyright - Todos os direitos reservados.</span>
                    <a href='https://api.whatsapp.com/send?phone=55'>Fale Conosco</a>
                </div>
            </div>
        </div>
    )
}

export default Footer