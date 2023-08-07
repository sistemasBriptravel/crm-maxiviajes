import Link from 'next/link'
import './info.css'

export default function Info() {
    return (
        <>
            <div className='container-info'>
                <div className='info-tittle-section' data-aos="fade-right" data-aos-offset="200">
                    <h3> Conectando personas <br></br>con destinos extraordinarios </h3>
                    <p>Permítenos llevarte a un viaje lleno de descubrimientos, aventuras y momentos memorables.</p>
                </div>
                <div className='child-container-info'>
                    <div className='container-list-tips'>
                        <div>
                            <h4 className='tittle-tips'>Experiencias turísticas y <span>tours</span> personalizados.</h4>
                            <p className='text-tips'>Nuestros tours son cuidadosamente diseñados para llevarte a destinos asombrosos, donde podrás sumergirte en la cultura, la historia y la belleza de cada lugar. Ya sea que estés buscando un escape relajante en una playa paradisíaca, una aventura llena de emociones en la naturaleza o una inmersión en la riqueza cultural de una ciudad vibrante, tenemos el tour perfecto para ti.</p>
                        </div>
                        <div>
                            <h4 className='tittle-tips'>Nuestro equipo de expertos en <span>viajes</span> a tu servicio.</h4>
                            <p className='text-tips'>Nuestros agentes están altamente capacitados y tienen un amplio conocimiento de los destinos que ofrecemos. Están listos para brindarte asesoramiento y recomendaciones para que tu viaje sea verdaderamente único y memorable.</p>
                        </div>
                        <div>
                            <h4 className='tittle-tips'>Sumérgete en una aventura inolvidable con <span>Briptravel</span></h4>
                            <p className='text-tips'>Estamos emocionados de ser parte de tu próxima aventura y ayudarte a crear recuerdos que durarán toda la vida. En Briptravel, creemos que el mundo está lleno de tesoros por descubrir, y estamos aquí para guiarte en cada paso del camino. <br></br> ¡Empecemos a planificar tu próximo viaje juntos!</p>
                        </div>
                    </div>
                    <div className='img-info-preg-frecuentes'>
                        <img width={350} height={420} src='./info-puente.jpg' />
                    </div>
                </div>

                <div className='container-call-agente'>
                    <div className='child-container-call-agente'>
                        <div>
                            {/* <lord-icon style={{ width: "70px", height: "70px" }} trigger="loop" src="./call-contacto.json"> </lord-icon> */}
                            
                                <h3>Agente Briptravel, ¡Comprá con atención personalizada!</h3>
                                <p>Llamanos y recibe una atención exclusiva para planificar tu viaje.</p>
                          
                        </div>
                        <a data-aos="fade-up" className='btn-call-agente' href="https://api.whatsapp.com/send/?phone=5114800534&amp;text&amp;type=phone_number&amp;app_absent=0" target='_blank' >Contactarme</a>
                    </div>
                </div>
            </div>
        </>
    )
}
