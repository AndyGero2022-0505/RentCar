import React, { useState, useEffect } from 'react';
import './AdminEconomy.css';

const AdminEconomy = () => {
  const [economyData, setEconomyData] = useState({
    totalGains: 0,
    totalInvestments: 0,
    netProfit: 0,
  });

  const [newEconomyData, setNewEconomyData] = useState({
    totalGains: '',
    totalInvestments: '',
  });

  // Cargar los datos económicos estáticos
  useEffect(() => {
    // Simulando la carga de datos económicos sin backend
    setEconomyData({
      totalGains: 5000,
      totalInvestments: 2000,
      netProfit: 3000, // Ganancia neta calculada directamente
    });
  }, []);

  // Calcular la ganancia neta
  useEffect(() => {
    setEconomyData((prevData) => ({
      ...prevData,
      netProfit: prevData.totalGains - prevData.totalInvestments,
    }));
  }, [economyData.totalGains, economyData.totalInvestments]);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEconomyData({
      ...newEconomyData,
      [name]: value,
    });
  };

  // Actualizar los datos económicos sin backend
  const handleUpdateEconomy = (e) => {
    e.preventDefault();
    setEconomyData({
      totalGains: parseFloat(newEconomyData.totalGains),
      totalInvestments: parseFloat(newEconomyData.totalInvestments),
      netProfit: parseFloat(newEconomyData.totalGains) - parseFloat(newEconomyData.totalInvestments),
    });
    setNewEconomyData({ totalGains: '', totalInvestments: '' });
  };

  return (
    <div>
      <h1>Sección de Economía</h1>

      <div>
        <h3>Datos Económicos Actuales</h3>
        <p><strong>Ganancias Totales al Mes:</strong> ${economyData.totalGains}</p>
        <p><strong>Total de Inversiones:</strong> ${economyData.totalInvestments}</p>
        <p><strong>Ganancia Neta:</strong> ${economyData.netProfit}</p>
      </div>

      <form onSubmit={handleUpdateEconomy}>
        <h3>Actualizar Datos Económicos</h3>
        <input
          type="number"
          name="totalGains"
          value={newEconomyData.totalGains}
          onChange={handleChange}
          placeholder="Ingresar ganancias"
          required
        />
        <input
          type="number"
          name="totalInvestments"
          value={newEconomyData.totalInvestments}
          onChange={handleChange}
          placeholder="Ingresar inversiones"
          required
        />
        <button type="submit">Actualizar Datos</button>
      </form>
    </div>
  );
};

export default AdminEconomy;

