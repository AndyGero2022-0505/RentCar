import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Css/Checkout.css";
import videoBackground from "../Videos/Inventory_Back.mp4"; // Video de fondo

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paypalUsername, setPaypalUsername] = useState("");
  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de redirección según el método de pago
    if (paymentMethod === "paypal") {
      if (!paypalUsername) {
        alert("Por favor ingrese su usuario de PayPal");
        return;
      }
    }
    // Redirige a la página de confirmación o finaliza el proceso
    navigate('/confirmation');
  };

  return (
    <div className="checkout-container">
      <video className="video-background" autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
      </video>

      <div className="checkout-form">
        <h1>Formulario de Pago</h1>
        <form onSubmit={handleSubmit}>
          <div className="payment-method">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                onChange={handlePaymentMethodChange}
                checked={paymentMethod === "creditCard"}
              />
              Tarjeta de Crédito
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                onChange={handlePaymentMethodChange}
                checked={paymentMethod === "paypal"}
              />
              PayPal
            </label>
          </div>

          {paymentMethod === "creditCard" && (
            <div className="credit-card-details">
              <div className="form-group">
                <label htmlFor="card-number">Número de Tarjeta</label>
                <input type="text" id="card-number" name="card-number" required />
              </div>
              <div className="form-group">
                <label htmlFor="expiration-date">Fecha de Expiración</label>
                <input type="text" id="expiration-date" name="expiration-date" required />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" required />
              </div>
            </div>
          )}

          {paymentMethod === "paypal" && (
            <div className="paypal-details">
              <div className="form-group">
                <label htmlFor="paypal-username">Usuario de PayPal</label>
                <input
                  type="text"
                  id="paypal-username"
                  name="paypal-username"
                  value={paypalUsername}
                  onChange={(e) => setPaypalUsername(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <button type="submit" className="btn-reservar">Confirmar Pago</button>
          </div>
        </form>
      </div>
    </div>
  );
}
