import './ObrigadoHeader.css'
import { Link } from 'react-router-dom'

function ObrigadoHeader() {
    return (
        <div className='obrigadoHeader'>
            <Link to='/'><img src='./logo-alive.png' alt='Logo da Alive'/></Link>
        </div>
    )
}

export default ObrigadoHeader