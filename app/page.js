import ActiveFrames from '@/components/ActiveFrame'
import Hero from './web/hero/hero'
import Promo from './web/promo/Promo'
import Info from './web/info/info'
import Nosotros from './web/nosotros/nosotros'

import { BsWhatsapp } from 'react-icons/bs';

export default function Home() {
  return (
    <main className="main">
      <ActiveFrames />

      <section id="Hero">
        <Hero />
      </section>

      <section id="Promos">
        <Promo />
      </section>

      <section id="Info">
        <Info />
      </section>

      <section id="Nosotros">
        <Nosotros />
      </section>

      <a className="containerWspIcon" target="_blank" href="https://api.whatsapp.com/send/?phone=5491152638334&amp;text&amp;type=phone_number&amp;app_absent=0">
        <BsWhatsapp className="wspIcon" />
      </a>

    </main>
  )
}
