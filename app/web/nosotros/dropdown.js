'use client'

import Accordion from 'react-bootstrap/Accordion';

export default function Dropdown() {

    return (
        <>
            <Accordion className='container-dropdow' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Planifica con anticipación</Accordion.Header>
                    <Accordion.Body>
                        Reserva tus boletos de avión con suficiente tiempo de antelación
                        para obtener las mejores tarifas y opciones de vuelo.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>¿Cuáles son las políticas de equipaje de la aerolínea?</Accordion.Header>
                    <Accordion.Body>
                        Las políticas de equipaje varían según la aerolínea y el tipo de
                        boleto que hayas adquirido. Te recomendamos revisar las políticas
                        de equipaje de la aerolínea antes de tu viaje o contactarnos para
                        obtener más información sobre las restricciones y costos adicionales
                        que puedan aplicar.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Verifica tu pasaporte y/o visa</Accordion.Header>
                    <Accordion.Body>
                        Asegúrate de tener un pasaporte válido y verifica si necesitas una
                        visa para tu destino antes de viajar. Algunos países requieren que
                        los pasaportes tengan una validez mínima de seis meses.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>¿Qué debo hacer si necesito hacer cambios en mi reserva?</Accordion.Header>
                    <Accordion.Body>
                        Si necesitas realizar cambios en tu reserva, te recomendamos ponerte
                        en contacto con nuestro equipo de atención al cliente lo antes posible.
                        Algunos cambios pueden estar sujetos a políticas de la aerolínea y pueden
                        implicar cargos adicionales.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Llega al aeropuerto con tiempo suficiente</Accordion.Header>
                    <Accordion.Body>
                        Es recomendable llegar al aeropuerto al menos dos horas antes de la
                        salida programada de tu vuelo para tener tiempo de realizar el check-in,
                        pasar por el control de seguridad y llegar a la puerta de embarque a tiempo.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Familiarízate con las normas de seguridad</Accordion.Header>
                    <Accordion.Body>
                        Asegúrate de estar al tanto de las normas de seguridad en el aeropuerto y sigue las
                        indicaciones del personal de seguridad. Esto incluye restricciones de líquidos, objetos
                        prohibidos y procedimientos de inspección.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </>
    )
}


