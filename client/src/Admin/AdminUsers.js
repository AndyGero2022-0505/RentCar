import React, { useState } from 'react';
import './AdminUsers.css';

const AdminUsers = () => {
  const [users, setUsers] = useState([
    { _id: '1', name: 'Juan Pérez', email: 'juan@ejemplo.com', role: 'admin' },
    { _id: '2', name: 'María López', email: 'maria@ejemplo.com', role: 'user' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

  // Manejar cambios en el formulario de creación de usuario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  // Crear un nuevo usuario
  const handleAddUser = (e) => {
    e.preventDefault();
    const userId = (users.length + 1).toString(); // Generar un ID simple
    const newUserData = { ...newUser, _id: userId };
    setUsers([...users, newUserData]);
    setNewUser({ name: '', email: '', role: '' });
  };

  // Eliminar un usuario
  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  return (
    <div>
      <h1>Administrar Usuarios</h1>

      {/* Formulario para agregar un nuevo usuario */}
      <form onSubmit={handleAddUser}>
        <h3>Agregar Nuevo Usuario</h3>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
        />
        <select
          name="role"
          value={newUser.role}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar Rol</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
        </select>
        <button type="submit">Agregar Usuario</button>
      </form>

      {/* Mostrar la lista de usuarios */}
      <h3>Lista de Usuarios</h3>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email} - {user.role}
            <button onClick={() => handleDeleteUser(user._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUsers;
