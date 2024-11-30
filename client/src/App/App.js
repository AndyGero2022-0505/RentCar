import { Header } from '../Components/Header';
import { Contacto } from '../Components/Sections/Contacto';
import { Inventory } from '../Components/Sections/inventory';
import { Reservations } from '../Components/Sections/Reservations';
import { Services } from '../Components/Sections/Services';
import { Slide } from '../Components/Slide/Slide';
import '../Css/App.css';

import { createContext, useState } from 'react';

export const MenuContext = createContext();

function App() {
  // Usar solo un estado para controlar la visibilidad del Header
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  return (
    <MenuContext.Provider value={[isHeaderVisible, setIsHeaderVisible]}>
      <div className="App">
        <div className="Header-App" id='Home'>
          {/* Condicional que renderiza Header dependiendo del estado */}
          {isHeaderVisible && <Header />}
          <Slide />
        </div>
        
        <div className="Body-App">
          <Inventory />
          <Reservations />
          <Services />
          <Contacto />
        </div>
      </div>
    </MenuContext.Provider>
  );
}

export default App;
