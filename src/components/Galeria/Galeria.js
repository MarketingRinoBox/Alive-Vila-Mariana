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

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);

    return (
        <div className='galeria'>
            <h1 id='galeria' ><span>g</span>aleria</h1>
            <div className='tracado'></div>
            <Carousel
                    nextIcon={<img alt="" className='prevNextIcon' src='./nextIconCinza.png' />}
                    prevIcon={<img alt="" className='prevNextIcon' src='prevIconCinza.png' />}
                >

                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao1 pegarImagem' onClick={handleShow} src='./alive_salao-de-festa.jpg' />
                            <div className='icone-lupa'>
                            <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                            <Carousel>
                                                <CarouselItem><img alt="" src='./alive_salao-de-festa.jpg' /></CarouselItem>
                                                <CarouselItem><img alt="" src='./alive_churrasqueira.jpg' /></CarouselItem>
                                                <CarouselItem><img alt="" src='./alive_piscina.jpg' /></CarouselItem>
                                            </Carousel>
                                        </Modal.Body>
                                </Modal>
                            </div>
                            <div className='galeria-box-texto'>
                                <p><strong><span>Bici</span>cletário</strong></p>
                                <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao pegarImagem' onClick={handleShow2} src='./alive_churrasqueira.jpg' />
                            <div className='icone-lupa'>
                                <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show2} onHide={handleClose2}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Carousel>
                                            <CarouselItem><img alt="" src='./alive_churrasqueira.jpg' /></CarouselItem>
                                            <CarouselItem><img alt="" src='./alive_piscina.jpg' /></CarouselItem>
                                            <CarouselItem><img alt="" src='./alive_salao-de-festa.jpg' /></CarouselItem>
                                        </Carousel>
                                    </Modal.Body>
                                </Modal>
                            </div>
                            <div className='galeria-box-texto'>
                                <p><strong><span>Área</span> da Churrasqueira</strong></p>
                                <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="galeria-carousel-img">
                        <div className='galeria-carousel-img-inner'>

                            <img alt="" className='inner-correcao pegarImagem' onClick={handleShow3} src='./alive_piscina.jpg' />
                            <div className='icone-lupa'>
                                <img alt="" className='lupaIcone' src="./lupa.png" />
                                <Modal show={show3} onHide={handleClose3}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Carousel>
                                            <CarouselItem><img alt="" src='./alive_piscina.jpg' /></CarouselItem>
                                            <CarouselItem><img alt="" src='./alive_salao-de-festa.jpg' /></CarouselItem>
                                            <CarouselItem><img alt="" src='./alive_churrasqueira.jpg' /></CarouselItem>

                                        </Carousel>
                                    </Modal.Body>
                                </Modal>
                            </div>
                            <div className='galeria-box-texto'>
                                <p><strong><span>Área</span> da Piscina</strong></p>
                                <p>*Imagem preliminar sujeito a alterações</p>
                            </div>
                        </div>
                    </CarouselItem>
                </Carousel>
        </div>
    )
}

export default Galeria