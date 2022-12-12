import './Galeria.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';

function Galeria() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    // const [show4, setShow4] = useState(false);
    // const handleClose4 = () => setShow4(false);
    // const handleShow4 = () => setShow4(true);

    return (
        <div className='galeria'>
            <h1 id='galeria' ><span>g</span>aleria</h1>
            <div className='tracado'></div>
            <Carousel
                    nextIcon={<img alt="" className='prevNextIcon' src='./next-icon.png' />}
                    prevIcon={<img alt="" className='prevNextIcon' src='./prev-icon.png' />}
                >

                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao1 pegarImagem' onClick={handleShow} src='./alive_churrasqueira.png' />
                            <div className='icone-lupa'>
                            <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                            <Carousel>
                                                <CarouselItem><img alt="" src='./alive_churrasqueira.png' /></CarouselItem>
                                                {/* <CarouselItem><img alt="" src='./alive_piscina.png' /></CarouselItem> */}
                                                <CarouselItem><img alt="" src='./alive_salado-de-festas.png' /></CarouselItem>
                                                <CarouselItem><img alt="" src='./alive_piscina_cobertura.png' /></CarouselItem>
                                            </Carousel>
                                        </Modal.Body>
                                </Modal>
                            </div>
                            <div className='galeria-box-texto'>
                                <p><strong><span>Sky</span> lounge</strong></p>
                                <p>*Imagem preliminar sujeita a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao1 pegarImagem' onClick={handleShow2} src='./alive_piscina.png' />
                            <div className='icone-lupa'>
                                <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show2} onHide={handleClose2}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Carousel>
                                            {/* <CarouselItem><img alt="" src='./alive_piscina.png' /></CarouselItem> */}
                                            <CarouselItem><img alt="" src='./alive_salado-de-festas.png' /></CarouselItem>
                                            <CarouselItem><img alt="" src='./alive_piscina_cobertura.png' /></CarouselItem>
                                            <CarouselItem><img alt="" src='./alive_churrasqueira.png' /></CarouselItem>
                                        </Carousel>
                                    </Modal.Body>
                                </Modal>
                            </div>
                            <div className='galeria-box-texto'>
                                <p><strong><span>Piscina</span> e solarium</strong></p>
                                <p>*Imagem preliminar sujeita a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao1 pegarImagem' onClick={handleShow3} src='./alive_salado-de-festas.png' />
                            <div className='icone-lupa'>
                                <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show3} onHide={handleClose3}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Carousel>
                                            <CarouselItem><img alt="" src='./alive_salado-de-festas.png' /></CarouselItem>
                                            <CarouselItem><img alt="" src='./alive_piscina_cobertura.png' /></CarouselItem>
                                            <CarouselItem><img alt="" src='./alive_churrasqueira.png' /></CarouselItem>
                                            {/* <CarouselItem><img alt="" src='./alive_piscina.png' /></CarouselItem> */}

                                        </Carousel>
                                    </Modal.Body>
                                </Modal>
                            </div>
                            <div className='galeria-box-texto'>
                                <p><strong><span>Salão</span> de Festas</strong></p>
                                <p>*Imagem preliminar sujeita a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    {/* <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao1 pegarImagem' onClick={handleShow4} src='./alive_piscina_cobertura.png' />
                            <div className='icone-lupa'>
                                <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show4} onHide={handleClose4}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Carousel>
                                            <CarouselItem><img alt="" src='./alive_piscina_cobertura.png' /></CarouselItem>
                                            <CarouselItem><img alt="" src='./alive_salado-de-festas.png' /></CarouselItem>
                                            <CarouselItem><img alt="" src='./alive_churrasqueira.jpg' /></CarouselItem>
                                            <CarouselItem><img alt="" src='./alive_piscina.png' /></CarouselItem>

                                        </Carousel>
                                    </Modal.Body>
                                </Modal>
                            </div>
                            <div className='galeria-box-texto'>
                                <p><strong><span>Piscina</span> Cobertura</strong></p>
                                <p>*Imagem preliminar sujeita a alterações</p>
                            </div>
                        </div>
                    </CarouselItem> */}
                </Carousel>
        </div>
    )
}

export default Galeria