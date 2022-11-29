import './Header.css' 
import { useState } from 'react';

function Header() {

    const [style, setStyle] = useState("drop-down");

    const changeStyle = () => {
        if (style === "drop-down") {
            setStyle("drop-down--active");
        } else {
            setStyle("drop-down");
        }
    };


    return (
        <div className='header'>
            <div className='header-area'>
                <div className='header-area-menu'>
                    <img src='./logo-alive.png' alt='Logo da Alive'/>
                    <ul className='menu-mobile'>
                        <li><a href='#galeria'>Galeria</a></li>
                        <li><a href='#diferenciais'>Diferenciais</a></li>
                        <li><a href='#plantas'>Plantas</a></li>
                        <li><a href='#encontreSeuSonho'>Encontre seu sonho</a></li>
                    </ul>
                </div>
                <div className="table_center">
                        <div onClick={changeStyle} className={style}>
                            <div id="dropDown" className="drop-down__button">
                                <span className="drop-down__name"><i className="fa-solid fa-bars"></i></span>
                                <div className="drop-down__menu-box">
                                    <ul className="drop-down__menu">
                                        <li><a className="drop-down__item" href='#galeria'>Galeria</a></li>
                                        <li><a className="drop-down__item" href='#diferenciais'>Diferenciais</a></li>
                                        <li><a className="drop-down__item" href='#plantas'>Plantas</a></li>
                                        <li><a className="drop-down__item" href='#encontreSeuSonho'>Encontre seu sonho</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='header-area-contato'>
                    <a href='https://api.whatsapp.com/send?phone=55'><img src="./iconezinho-pessoa.png" alt=''/>Contato</a>
                </div>
            </div>
        </div>
    )
}

export default Header