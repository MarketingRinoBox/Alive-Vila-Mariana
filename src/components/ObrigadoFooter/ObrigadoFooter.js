import './ObrigadoFooter.css'

function ObrigadoFooter() {
    return (
        <div className='obrigadoFooter'>
            <div className='obrigadoFooter-footer'>
                <img src='./dwincorp.png' alt='Logo da unity'/>
                <p>Desenvolvido por Rino Box© 2022 - Todos os direitos reservados.</p>
                <div className='obrigadoFooter-icones'>
                    <a href='https://www.facebook.com/unityengenhariabr'><i class="fa-brands fa-facebook"></i></a>
                    <a href='https://api.whatsapp.com/send?phone=551132571717'><i class="fa-brands fa-whatsapp"></i></a>
                    <a href='https://www.instagram.com/unityengenhariabr/'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ObrigadoFooter