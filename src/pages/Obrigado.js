import '../App.css'
import ObrigadoFooter from '../components/ObrigadoFooter/ObrigadoFooter.js'
import ObrigadoHeader from '../components/ObrigadoHeader/ObrigadoHeader.js'
import ObrigadoMainSection from '../components/ObrigadoMainSection/ObrigadoMainSection.js'

function Obrigado() {
    return (
        <div className='obrigado'>
            <ObrigadoHeader />
            <ObrigadoMainSection />
            <ObrigadoFooter />
        </div>
    )
}

export default Obrigado