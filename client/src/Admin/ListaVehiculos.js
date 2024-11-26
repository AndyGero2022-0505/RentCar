import React from "react";
import { Link } from "react-router-dom";
import "../Css/AdminStyles.css";

const ListaVehiculos = () => {
  const vehiculos = [
    {
      id: 1,
      modelo: "Toyota Corolla",
      img: "../Images/ToyotaCorolla.png",
    },
  ];

  return (
    <div className="admin-page">
      <h1>ADMINISTRACIÓN</h1>
      <div className="menu">
        <Link to="/admin/lista-vehiculos" className="menu-btn active">LISTA DE VEHÍCULOS</Link>
        <Link to="/admin/analisis" className="menu-btn">ANÁLISIS</Link>
        <button className="menu-btn">USUARIOS</button>
        <button className="menu-btn">ECONOMÍA</button>
      </div>
      <div className="content">
        <h2>LISTA DE VEHÍCULOS</h2>
        <button className="add-btn">AGREGAR</button>
        <div className="vehiculos-list">
          {vehiculos.map((vehiculo) => (
            <div key={vehiculo.id} className="vehiculo-card">
              <img src={vehiculo.img} alt={vehiculo.modelo} className="vehiculo-img" />
              <p className="vehiculo-modelo">{vehiculo.modelo}</p>
              <div className="vehiculo-actions">
                <button className="edit-btn">✎</button>
                <button className="delete-btn">🗑</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaVehiculos;
 