import React from 'react'
import ReactDom from 'react-dom'
import { Button } from '@material-ui/core'

import '../style/Modal.css'


const MODAL_STYLES = {
    position: 'fixed',
    width: '450px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
    borderRadius: '10px'
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
}

function Modal({open, onClose}) {
    if (!open) return null;

    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES}/>

        <div style={MODAL_STYLES}>
            <span class="btn-close" onClick={onClose}>&#x2715;</span>
            <h1>Register</h1>
            <form className="register-form">
                <div className="input-top">
                    <input className="input" type="text" placeholder="Email" />
                </div>
                <div className="input-bottom">
                    <input className="input" type="text" placeholder="Password" />
                </div>
                <p>
                    Wir werden dich anrufen oder dir eine SMS senden, um deine Nummer zu 
                    bestätigen. Es können die üblichen Gebühren für die Nachrichten- und 
                    Datenübertragung anfallen.
                </p>
                <Button>Weiter</Button>
            </form>
            <p>Hast du bereits ein Nutzerkonto?</p>
            <a href="#">Register</a>
        </div>
        
        </>,
        document.getElementById('portal')
    )
}

export default Modal
