import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav"; // Importa el componente Nav
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Función para filtrar los alojamientos según el término de búsqueda
  const filteredData = data.filter((el) =>
    el.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Nav handleSearch={setSearchTerm} /> {/* Pasa setSearchTerm como prop */}
      <h1>Stays in Finland</h1>
      <div className="accommodations">
        {filteredData.map((el, i) => (
          <div key={i} className="accommodation">
            <img src={el.photo} alt={el.title} />
            <h2>{el.title}</h2>
            <p>{el.city}, {el.country}</p>
            <p>Rating: {el.rating}</p>
            <p>Tipo: {el.type}</p>
            <p>Capacidad máxima: {el.maxGuests} personas</p>
            <p>Camas: {el.beds || 'No especificado'}</p>
            {el.superHost && <p>Superhost</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
