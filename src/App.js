import './App.css';
import UsersList from './componentes/UsersList';
import UsersForm from './componentes/UsersForm';
import axios from 'axios';
import { useState, useEffect } from "react";
import {Modal} from '@material-ui/core';
import swal from 'sweetalert';

function App() {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState(false);
  const [useredit, setUserEdit] = useState(null);
  const [viewEdit, setViewEdit] = useState(false);

  // vista de form
  const viewForm = () =>{
    setView(!view)
  }
  const viewFormEdit = () =>{
    setViewEdit(!viewEdit)
  }

  useEffect(()=>{
    getUsers(); 
  },[]);

  //traer la lista de usuarios
const getUsers = () =>{
  axios.get('https://users-crud1.herokuapp.com/users/')
    .then((res)=>{
      setUsers(res.data)
    });
}

//agregar usuario
const addUser = user =>{
  axios.post('https://users-crud1.herokuapp.com/users/', user)
  .then(()=>getUsers());
  setView(false)
  swal({title:"Usuario Agregado", text:"Se agrego correctamente", icon:"success"});
}

//eliminar un usuario
const deleteUser = id =>{
  swal({
    title:"Eliminar",
    text:"Estas seguro de eliminar este Usuario?",
    icon:"warning",
    buttons:["No", "Si"]
  }).then(respuesta=>{
    if(respuesta){
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(()=>getUsers());
      swal({text: "Se elimino con exito", icon: "success"})
    }
  })
}
//seleccionar usuario
const selectUser = (userInfo, id) => {
  viewFormEdit();
  setUserEdit(userInfo);
};
//actualizar usuario
const updateUser = (userInfo, id) =>{
  axios.patch(`https://users-crud1.herokuapp.com/users/${id}/`, userInfo)
  .then(()=>getUsers());
  setViewEdit(false);
  swal({title:"Usuario Actualizado", text:"Se actualizo correctamente", icon:"success"});
}

  return (
    <div className="App">
      <Modal open={view} onClose={viewForm}>
        <UsersForm viewForm={viewForm} addUser={addUser} useredit='' btn_agregar='Agregar Nuevo Usuario' txtinicio='Agregar Usuario' updateUser={updateUser} />
      </Modal>
      <Modal open={viewEdit} onClose={viewFormEdit}>
        <UsersForm viewForm={viewFormEdit} useredit={useredit} btn_agregar='Guardar cambios' txtinicio='Editar Usuario' updateUser={updateUser} />
      </Modal>
      <div className='container-button'>
        <button onClick={viewForm}>
          <i className="fa-solid fa-user-plus"/>Nuevo usuario
        </button>
      </div>
      <h1>Usuarios</h1>
      <UsersList users = {users} deleteUser={deleteUser} selectUser={selectUser}/>
    </div>
  );

}

export default App;
