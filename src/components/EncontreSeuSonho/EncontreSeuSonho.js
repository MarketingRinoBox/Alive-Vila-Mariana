import './EncontreSeuSonho.css'
import React from 'react';

function EncontreSeuSonho() {


    return (
        <div className='encontreSeuSonho'>
            <h1 id='encontreSeuSonho' ><span>e</span>ncontre seu sonho</h1>
            <div className='tracado'></div>
            <div className="cards">
                <div className='card-inner'>
                    <img alt='' src='./diy-belavista.png' />
                    <div className='card-inner-text'>
                        <div className='card-inner-box'>
                            <div className='card-box-texto'>
                                <h1>DIY BELA VISTA</h1>
                                <p>UNITY ENGENHARIA</p>
                            </div>
                            <div className='card-box-icone'>
                                <i id='bookmark' className="fa-regular fa-bookmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-inner disable'>
                    <img alt='' src='./ahead-aclimacao.png' />
                    <div className='card-inner-text'>
                        <div className='card-inner-box'>
                            <div className='card-box-texto'>
                                <h1>AHEAD ACLIMAÇÃO</h1>
                                <p>DW INCORP</p>
                            </div>
                            <div className='card-box-icone'>
                                <i id='bookmark' className="fa-regular fa-bookmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-inner'>
                    <img alt='' src='./alive-vila-mariana.png' />
                    <div className='card-inner-text'>
                        <div className='card-inner-box'>
                            <div className='card-box-texto'>
                                <h1>ALIVE VILA MARIANA</h1>
                                <p>DW INCORP</p>
                            </div>
                            <div className='card-box-icone'>
                                <i id='bookmark' className="fa-regular fa-bookmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-inner disable'>
                    <img alt='' src='./alto-da-boa-vista.png' />
                    <div className='card-inner-text'>
                        <div className='card-inner-box'>
                            <div className='card-box-texto'>
                                <h1>ALTO DA BOA VISTA</h1>
                                <p>DW INCORP</p>
                            </div>
                            <div className='card-box-icone'>
                                <i id='bookmark' className="fa-regular fa-bookmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EncontreSeuSonho