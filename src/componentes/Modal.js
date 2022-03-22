import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Modal = ({open, onClose}) =>{

    const[first_name, setFirstName] = useState('');
    const[last_name, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[birthday, setBirthday] = useState('');

    return(
        <>
        {open &&
            <Overlay>
            <ContenedorForm>
                    <BotonCerrar onClick={()=>onClose(!open)}><i className="fa-solid fa-xmark"></i></BotonCerrar>
                <form >
                    <h2>Agregar User</h2>
                    <div className="container-item">
                        <label>Nombre</label><br/>
                        <input type='text' id="first_name" onChange={e=> setFirstName(e.target.value)} value={first_name}></input>
                    </div>
                    <div className="container-item">
                        <label>Apellido</label><br/>
                        <input type='text' id="last_name" onChange={e=> setLastName(e.target.value)} value={last_name} ></input>
                    </div>
                    <div className="container-item">
                        <label>Correo</label><br/>
                        <input type='email' id="email" onChange={e=> setEmail(e.target.value)} value={email}></input>
                    </div>
                    <div className="container-item">
                        <label>Contraseña</label><br/>
                        <input type='password' id="password" onChange={e=> setPassword(e.target.value)} value={password} ></input>
                    </div>
                    <div className="container-item">
                        <label>Cumpleaños</label><br/>
                        <input type='date' id="birthday" onChange={e=> setBirthday(e.target.value)} value={birthday}></input>
                    </div>
                    <div className="container-item">
                    <button ><i className="fa-solid fa-floppy-disk"/>Agregar</button>
                    </div>
                </form>
            </ContenedorForm>
        </Overlay>
        }
        </>
    );
};


export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    aling-items: center;
    justify-content: center;
    z-index: 10;
`;
const ContenedorForm = styled.div`
    position: absolute;
    width: 300px;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition:.5s ease all;
`;
const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    width: 30px;
    height: 30px;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;
    border: none;

    &:hover{
        background: #f2f2f2;
    }
`;