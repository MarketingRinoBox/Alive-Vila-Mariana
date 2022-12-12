import './MainSection.css'
import { useState } from 'react'

function MainSection() {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className='mainSection'>
            <div className='mainSection-area'>
                <div className='mainSection-area-texto'>
                    <img src='./dwincorp.png' alt='Dw Incorp'/>
                    <h1>Invista no melhor de <br/><strong><span>S</span>ão <span>P</span>aulo</strong></h1>
                    <p>Ideal para você que quer praticidade, sofisticação e o lazer que merece!</p>
                    <a href='#galeria'>Saiba mais!</a>
                </div>
                <div className='icon-scroll' />
                <div className='mainSection-forms'>
                    <form id="llCaptureForm" className="llform001" action="//paginas.rocks/capture" method="post">
                        <input type="hidden" id="mid" name="mid" value="667545" />
                        <input type="hidden" id="fid" name="fid" value="54968" />
                        <input type="hidden" id="formType" name="formType" value="dynamic" />
                        <div className='investimentoMoradia'>
                            <label ><h1>Inscreva-se <br/>agora!</h1></label>
                            <div className="field-error" id="llerror83633"></div>
                            <div className="radio-list"  >
                                <div className="radio">
                                    <label>
                                        <input type="radio" id="llfield161345" name="llfield83633" value="Investimento"
                                            checked={checked}
                                            onChange={handleChange}
                                        /> Investimento
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" id="llfield161346" name="llfield83633" value="Moradia" /> Moradia
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='inputs'>
                            <input type="text" id="llfield69862" name="llfield69862" placeholder="Nome:" />
                            <div className="field-error" id="llerror69862"></div>
                        </div>
                        <div className='inputs'>
                            <input type="tel" id="llfield69864" name="llfield69864" placeholder="Tel.:" />
                            <div className="field-error" id="llerror69864"></div>
                        </div>
                        <div className='inputs'>
                            <input type="email" id="llfield69863" name="llfield69863" placeholder="E-mail:" data-required="true" />
                            <div className="field-error" id="llerror69863"></div>
                        </div>
                        <div>
                            <div className="field-error" id="LGPDValidation"></div>
                            <div className="checkbox-list" data-required="true" >
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" id="LGPDValidation" name="LGPDValidation" value="1" /> Autorizo o recebimento de informações dos empreendimentos das empresas DW Incorp e Unity Engenharia via e-mail, WhatsApp e/ou telefone celular.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="button-bar">
                            <button type="submit">Enviar</button>
                        </div>
                        <div className="loading-box" style={{display: "none"}}>
                            <img src="//paginas.rocks/content/images/spinner.gif" alt=''/>
                            <div>loading...</div>
                        </div>
                        <div className="error-box" style={{display: "none"}}>
                            <img src="//paginas.rocks/content/images/error-icon.png" alt=''/>
                            <div></div>
                            <button type="button" className="btn" id="btn-error">Ok</button>
                        </div>
                        <img src="https://llimages.com/redirect/redirect.aspx?A=V&f=54968&m=667545" style={{display: "none"}} alt=""/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MainSection