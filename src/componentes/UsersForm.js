import React from "react";
import './StyleUserForm.css';
import { useState, useEffect } from "react";
import swal from 'sweetalert';


const UsersForm = ({viewForm, addUser,updateUser, btn_agregar, useredit, txtinicio, children}) =>{
    const[first_name, setFirstName] = useState('');
    const[last_name, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[birthday, setBirthday] = useState('');


    useEffect(()=>{
        setFirstName(useredit.first_name);
        setLastName(useredit.last_name);
        setEmail(useredit.email);
        setPassword(useredit.password);
        setBirthday(useredit.birthday);
    }, [useredit])
    

    const Submit = e =>{
        e.preventDefault();
        const user = {first_name, last_name, email, password, birthday }
        if(useredit){
            if([null, '', 0].includes(user.first_name) || [null, '', 0].includes(user.last_name) || [null, '', 0].includes(user.password) || [null, '', 0].includes(user.birthday)){
                swal({title:"Parametros vacios", text:"Tienes que completar las casillas", icon:"error"});
            }else{
                console.log(user);
                updateUser(user, useredit.id);
            }
        }else{
            if([null, '', 0].includes(user.first_name) || [null, '', 0].includes(user.last_name) || [null, '', 0].includes(user.password) || [null, '', 0].includes(user.birthday)){
                swal({title:"Parametros vacios", text:"Tienes que completar las casillas", icon:"error"});
            }else{
                addUser(user);
            }
        }
    }

    return(
        
        <div className="container-form">
                <div className="container-but-new-user"><button onClick={viewForm}><i className="fa-solid fa-xmark"></i></button></div>
            <form onSubmit={Submit}>
                <h2>{txtinicio}</h2>
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
                <button ><i className="fa-solid fa-floppy-disk"/>{btn_agregar}</button>
                {children}
                </div>
            </form>
        </div>
        
    );
};

export default UsersForm;