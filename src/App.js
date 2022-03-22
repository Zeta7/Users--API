import './App.css';
import UsersList from './componentes/UsersList';
import UsersForm from './componentes/UsersForm';
import axios from 'axios';
import { useState, useEffect } from "react";
import swal from 'sweetalert';


function App() {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState(false);
  const [useredit, setUserEdit] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(()=>{
    getUsers(); 
  },[]);

  const setviwForm = () =>{
    setEdit(false);
    setView(!view)
  }

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
  setEdit(false);
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
  setUserEdit(userInfo);
};
//actualizar usuario
const updateUser = (userInfo, id) =>{
  axios.patch(`https://users-crud1.herokuapp.com/users/${id}/`, userInfo)
  .then(()=>getUsers());
  swal({title:"Usuario Actualizado", text:"Se actualizo correctamente", icon:"success"});
  setView(!view);
  setEdit(false);
}
  return (
    <div className="App">
      <UsersForm 
        open={view} 
        onClose={setView}
        addUser={addUser} 
        useredit={useredit} 
        updateUser={updateUser} 
        edit={edit} 
        setEdit={setEdit}
      />

      <div className='container-button'>
        <button onClick={setviwForm}>
          <i className="fa-solid fa-user-plus"/>Nuevo usuario
        </button>
      </div>
      
      <h1>Usuarios</h1>
      <UsersList 
        users = {users} 
        deleteUser={deleteUser} 
        selectUser={selectUser}
        open={view} 
        onClose={setView}
        useredit={useredit}
        setUserEdit={setUserEdit}
        edit={edit} 
        setEdit={setEdit}
      />    
    </div>
  );

}

export default App;
