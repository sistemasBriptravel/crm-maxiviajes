import './nosotros.css'

import Dropdown from './dropdown'

export default function Nosotros() {
    return (
        <>
            <div id='ayuda-briptravel' className='container-nosotros'>
                <div className='nosotros-tittle-section'>
                    <h3 data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
                        Descubre el mundo con <span>Briptravel</span>
                    </h3>
                    <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">Tenga en cuenta todas nuestras recomendaciones y tips a la hora viajar!</p>
                </div>
                <div className='child-container-nosotros'>
                    <div className='img-preg-frecuentes'>
                        <img width={350} height={420} src='./img-preg-frecuentes.jpg' />
                    </div>
                    <Dropdown />
                </div>
            </div>
        </>
    )
}
