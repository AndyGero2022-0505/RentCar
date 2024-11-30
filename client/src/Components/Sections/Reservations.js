import React from "react";
import image from "../../Images/1151041.jpg";
import "../../Css/Reservation.css";
import { useNavigate } from 'react-router-dom';

export function Reservations() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/checkout');
  };

  return (
    <div className="Contenedor_Inventario" id="Reservation">
      <img className="Back-Image-Reservation" src={image} alt="Background" />
      
      <div className="Contenedor_Reservation">
        <div className="Contenedor-Titulo">
          <div className="Titulo_Reservation">
            <h1> Completa el formulario </h1>
            <h3>para reservar tu vehículo en minutos.</h3>
            <h5>Selecciona tus fechas, elige</h5>
            <h2>el modelo de tu preferencia y <span> ¡listo!</span></h2>
          </div>
          <a href="#Inventory" className="All_Vehiculos">Buscar Vehiculo</a>
        </div>

        <div className="Fav-Form">
          <div className="VehichlosFavorito">
            <h3 style={{ textAlign: 'center' }}>Aqui veras tus vehiculos en favorito</h3>
          </div>

          <div className="reservation-container">
            <h2>Formulario de Reservación</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="start-date">Fecha de Inicio</label>
                <input
                  type="date"
                  id="start-date"
                  name="start-date"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="end-date">Fecha de Fin</label>
                <input
                  type="date"
                  id="end-date"
                  name="end-date"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="vehicle-type">Tipo de Vehículo</label>
                <select
                  id="vehicle-type"
                  name="vehicle-type"
                  required
                >
                  <option value="">Seleccione el tipo de vehículo</option>
                  <option value="compact">Compacto</option>
                  <option value="sedan">Sedán</option>
                  <option value="suv">SUV</option>
                  <option value="luxury">De Lujo</option>
                  <option value="electric">Eléctrico</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="extras">Opciones Adicionales</label>
                <select
                  id="extras"
                  name="extras"
                >
                  <option value="none">Ninguno</option>
                  <option value="gps">GPS</option>
                  <option value="baby-seat">Silla para Bebé</option>
                  <option value="road-assistance">Asistencia en Carretera</option>
                </select>
              </div>

              <div className="form-group">
                <div className="total-container">
                  <h3>Total a Pagar: $199</h3>
                  <p>Incluye impuestos y servicios adicionales.</p>
                </div>
              </div>

              <div className="form-group">
                <button type="submit" className="btn-reservar">Reservar Ahora</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
