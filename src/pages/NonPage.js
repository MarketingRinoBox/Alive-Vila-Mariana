import '../components/NonPage/errorPage.css'
import { Link } from 'react-router-dom'

export default function NonPage() {
    return (
        <div className="nonPage">
            <img src='./logo-alive.png' alt='Logo da Alive Vila Mariana'/>
            <h1>Página não encontrada</h1>
            <p>Por favor retorne a página inicial</p>
            <Link to='/'>Página Inicial</Link>
        </div>
    )
}