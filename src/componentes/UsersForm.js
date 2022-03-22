import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import swal from 'sweetalert';


const UsersForm = ({open, onClose, addUser,updateUser, useredit, edit}) =>{
    const[first_name, setFirstName] = useState('');
    const[last_name, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[birthday, setBirthday] = useState('');

    
    useEffect(()=>{
        if(useredit){
            setFirstName(useredit.first_name);
            setLastName(useredit.last_name);
            setEmail(useredit.email);
            setPassword(useredit.password);
            setBirthday(useredit.birthday);
        }
    },[(useredit)]);

    const Submit = e =>{
        e.preventDefault();
        const user = {first_name, last_name, email, password, birthday }
        if(edit){
            updateUser(user , useredit.id);
        }else{
            if([null, '', 0].includes(first_name)) {
                swal({title:"Parametro vacio", text:"Tienes que completar las casillas Nombre", icon:"error"});
            }else{
                if([null, '', 0].includes(last_name)){
                    swal({title:"Parametro vacio", text:"Tienes que completar las casillas Apellido", icon:"error"});
                }else{
                    if([null, '', 0].includes(password)){
                        swal({title:"Parametro vacio", text:"Tienes que completar las casillas Contraseña", icon:"error"});
                    }else{
                        if([null, '', 0].includes(birthday)){
                            swal({title:"Parametro vacio", text:"Tienes que completar las casillas Contraseña", icon:"error"});
                        }else{
                            addUser(user);
                        }
                    }
                }
            }
        }
        
    }
    return(
        
        <>
            {open &&
                <Overlay>
                    <ContenedorForm>
                            <BotonCerrar onClick={()=>onClose(!open)}><i className="fa-solid fa-xmark"></i></BotonCerrar>
                        <form onSubmit={Submit}>
                            <h2>Datos Usuario</h2>
                            <div >
                                <label>Nombre</label><br/>
                                <input type='text' id="first_name" onChange={e=> setFirstName(e.target.value)} value={first_name}></input>
                            </div>
                            <div >
                                <label>Apellido</label><br/>
                                <input type='text' id="last_name" onChange={e=> setLastName(e.target.value)} value={last_name} ></input>
                            </div>
                            <div >
                                <label>Correo</label><br/>
                                <input type='email' id="email" onChange={e=> setEmail(e.target.value)} value={email}></input>
                            </div>
                            <div >
                                <label>Contraseña</label><br/>
                                <input type='password' id="password" onChange={e=> setPassword(e.target.value)} value={password} ></input>
                            </div>
                            <div >
                                <label>Cumpleaños</label><br/>
                                <input type='date' id="birthday" onChange={e=> setBirthday(e.target.value)} value={birthday}></input>
                            </div>
                            <div >
                            <BotonAgregar ><i className="fa-solid fa-floppy-disk"/>Guardar Usuario</BotonAgregar>
                            </div>
                        </form>
                    </ContenedorForm>
                </Overlay>
            }
        </>
        
    );
};

export default UsersForm;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
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
    border-radius: 5px;

    h2{
        margin-top: 40px;
        color: #3fb3d6;
        margin-bottom: 20px;
        text-align: center;
    }

    input{
        width: 250px;
        height: 25px;
        border-left: 0px ;
        border-top: 0px ;
        border-right: 0px ;
        border-bottom: 1px solid #969595;
        outline:none;
    }
    label{
        margin-top: 10px;
    }
`;
const BotonCerrar = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
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
const BotonAgregar = styled.button`
    margin-top: 20px;
    width: 250px;
    height: 40px;
    background: #3fb3d6 ;
    border: none;
    color: #fff;

    &:hover{
        background: #046b8a ;
        cursor: pointer;
    }

    i{
        margin-right: 10px;
    }
`;
