import React from "react";
import './StyleUserList.css';

const UsersList = ({users, deleteUser, selectUser, open, onClose, setEdit}) => {

    const selectUserL = (us, id) =>{
        onClose(!open);
        selectUser(us, id);
        setEdit(true);
    }

    return (
        <div className="container-card">
            {
                users.map((us)=>(
                    <div key={us.id} className='card'>
                        <div className="i">
                            <h2>{us.first_name}</h2> 
                        </div>
                        <div className="subcont-card">
                            <div className="c">
                                <span>APELLIDO</span>
                                <p>{us.last_name}</p>
                                <span>CORREO</span>
                                <p>{us.email}</p>
                                <span>CUMPLEAÑOS</span>
                                <p>{us.birthday}</p>
                            </div>
                            <div className="line"></div>
                            <div className="b">
                                <button onClick={()=>selectUserL(us,us.id)} className="update"><i className="fa-solid fa-pencil"/></button>
                                <button onClick={()=>deleteUser(us.id)} className="delete"><i className="fa-solid fa-trash"/></button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersList;