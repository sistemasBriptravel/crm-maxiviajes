'use client'

import React, { useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { FaUser } from 'react-icons/fa';
import { BsAirplane } from 'react-icons/bs';

import './modalLogin.css';

export default function ButtonModalLogin(props) {
    const dataTittle = props.tittle
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    return (
        <div>
            <Button className="btn-open-modal" auto shadow onPress={handler}> <FaUser /> {dataTittle} </Button>
            <Modal
                closeButton
                preventClose
                width="500px"
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <h3 className="tittle-modal-login">Inicia sesión o registrate para <br></br>acceder a tu perfil <span>Brip</span></h3>
                </Modal.Header>
                <Modal.Body>

                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="md"
                        placeholder="Email"
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="md"
                        placeholder="Contraseña"
                    />
                    {/* <Row justify="space-between">
                        <Text size={14}>Forgot password?</Text>
                    </Row> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Cerrar
                    </Button>
                    <Button auto onPress={closeHandler}>
                        Ingresar
                    </Button>
                </Modal.Footer>
                <BsAirplane className="icon-avion-login" />
            </Modal>
        </div>
    );
}
