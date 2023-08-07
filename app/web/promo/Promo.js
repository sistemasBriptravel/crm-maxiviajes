
import Link from 'next/link'
import Image from 'next/image'
import './promo.css'

export default function Promo() {

    return (
        <>
            <div id='promociones-briptravel' className='container-promo'>
                <div className='container-banners'>
                    <div className='promo-tittle-section'>
                        <h3>Viaja sin límites y disfruta sin preocupaciones</h3>
                    </div>
                    <div className='child-container-promo'>
                        {/* Promo 2 */}
                        <Link href="https://api.whatsapp.com/send/?phone=5491152638334&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <Image width={450} height={400} quality={50} className='brip-promo-img' src='https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/0ea7cda5-fddc-49d8-b0f5-9694a6e4ed00/public' alt="promocion de viaje en avion Briptravel" />
                        </Link>
                        {/* Promo 4 */}
                        <Link href="https://api.whatsapp.com/send/?phone=5491152638334&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <Image width={450} height={400} quality={50} className='brip-promo-img' src='https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/b0791908-ee08-44f3-af34-f9a341e90800/public' alt="promocion de viaje en avion Briptravel" />
                        </Link>
                        {/* Promo 6 */}
                        <Link href="https://api.whatsapp.com/send/?phone=5491152638334&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <Image width={450} height={400} quality={50} className='brip-promo-img' src='https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/97b94ffc-1696-4fed-2a59-b73c3bc8fb00/public' alt="promocion de viaje en avion Briptravel" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
