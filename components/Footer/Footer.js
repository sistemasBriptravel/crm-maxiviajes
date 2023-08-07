
import Image from 'next/image';

import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';

import './footer.css';

export default function Footer() {
    return (
        <>
            <footer className='container-footer'>
                <div className='container-newsletter'>
                    <div>
                        <h3> Ofertas exclusivas para todos los viajes </h3>
                        <p>Recibe todas nuestras ofertas.</p>
                    </div>
                    <div className='child-container-newsletter'>
                        <input placeholder='Ingrese su email' />
                        <a href='#' className='btn-newsletter'>Subscribirme</a>
                    </div>
                </div>
                <div className='child-container-footer'>
                    <div className='container-info-footer'>
                        <div>
                            <h4 className='tittle-cont-footer'><FaPhoneAlt className='icon-tittle-footer' /><strong>¿Necesitas ayuda?</strong></h4>
                            <div className='flex-brip'>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=5114800534&amp;text&amp;type=phone_number&amp;app_absent=0">
                                    <Image width={32} height={18} src="https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/b1ce0191-673e-4bd5-7e31-a9343f2a4e00/mobile" />
                                    +51 14800534
                                </a>
                            </div>
                            <div className='flex-brip'>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=5491152638334&amp;text&amp;type=phone_number&amp;app_absent=0">
                                    <Image width={32} height={20} src="https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/6f2b14d7-d54d-4e02-c0c6-2cf9318db300/mobile" />
                                    +54 1152638334
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className='tittle-cont-footer'><strong>Contactanos</strong></h4>
                            <a className="nombre-redes" href='mailto:ventas@briptravel.com'><HiMail className='icon-footer-text' /> ventas@briptravel.com</a>
                            <a className="nombre-redes" href='mailto:reservas@briptravel.com'><HiMail className='icon-footer-text' /> reservas@briptravel.com</a>
                        </div>
                        <div>
                            <h4 className='tittle-cont-footer'><strong>Dirección</strong></h4>
                            <a className="nombre-redes" href='https://goo.gl/maps/qSoaKS16roGstpKR7'><FaMapMarkerAlt className='icon-footer-location' />Av. Corrientes 3447</a>
                            <a className="nombre-redes" href='https://goo.gl/maps/fEL4twrcZMTRnVUo6'><FaMapMarkerAlt className='icon-footer-location' />Av. Corrientes 2451</a>
                        </div>
                        <div>
                            <h4 className='tittle-cont-footer'><strong>Nuestras Redes</strong></h4>
                            <a target="_blank" className="nombre-redes" href="https://www.facebook.com/bripargentina"><AiFillFacebook className='icon-footer-insta' />Facebook Briptravel</a>
                            <a target="_blank" className="nombre-redes" href="https://www.instagram.com/bripargentina/"><AiFillInstagram className='icon-footer-insta' />Instagram Brip Travel</a>
                        </div>
                    </div>
                </div>
                <div className="child-footer">
                    <p>©2023 Briptravel. Todos los derechos reservados. </p>
                </div>
            </footer>
        </>
    )
}
