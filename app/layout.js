'use client'

import localFont from 'next/font/local'
import { Montserrat } from 'next/font/google'
import Navigation from '@/components/Navbar/Navigation'
import Footer from '@/components/Footer/Footer'
import Script from 'next/script'

//STYLE GLOBAL
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const artiLight = localFont({
  src: '../fonts/ArticulatCF-Regular.woff2',
  variable: '--font-arti-light',
})

const mont = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

        {/* METATAGS */}
        <link rel="icon" href="./icon-briptravel.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Briptravel - Argentina</title>
        <meta name="description" content="Descubre destinos increíbles y reserva tus vuelos y tours con la Agencia de viajes Briptravel. Tenemos los mejores precios y opciones para hacer de tus viajes una experiencia inolvidable" />
        <meta name="keywords" content="Agencia de viajes, pasajes de avión, tours, destinos, viajes, vuelos" />
        <link rel="canonical" href="https://www.briptravel.com.ar" />
        <link rel="alternate" hreflang="es" href="https://www.briptravel.com.ar" />
        <link rel="alternate" hreflang="en" href="https://briptravel.com.ar" />
        <meta name="robots" content="index,follow" />
        <link rel="sitemap" type="application/xml" href="https://briptravel.com.ar/sitemap.xml" />

        {/* Google tag BRIPTRAVEL AR (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-13CY08MSNJ" />
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-13CY08MSNJ'); `}
        </Script>

      </head>
      <body className={` ${artiLight.variable} ${mont.variable} `}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
