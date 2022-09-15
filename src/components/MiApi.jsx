import { useEffect, useState } from "react";
import Search from "./Search";

const MiApi = () => {
  const [info, setInfo] = useState([]);

  // funcion encargada de cargar la lista
  const characters = async () => {
    const url = "https://thronesapi.com/api/v2/Characters";
    const response = await fetch(url);
    const data = await response.json();

    setInfo(data);
  };

  useEffect(() => {
    characters();
  }, []);

  return (
    <div>
      {/* hacemos un llamado a Search para realizar busquedas */}
      <Search info={info} />
      <div className="Sort-buttons">
        {/* aca tenemod el funcionamiento mediante sort para ordenar los objetos del array por nombre desde la A a la Z */}
          <button className="a-z" onClick={()=>{  
            const strAscending = [...info].sort((a, b) =>
            a.fullName > b.fullName ? 1 : -1,);setInfo(strAscending);}} >A-Z</button>

          <button className="z-a" onClick={()=>{
            const strDescending = [...info].sort((a, b) =>
            a.fullName > b.fullName ? -1 : 1,);setInfo(strDescending);}}>-</button>
        </div>
      <div className="container-card">
        {/* + */}
        {info
          .filter((e) => e.image !== "")
          .map((e) => (
            <div className="card" key={e.name}>
              <img className="image-card" src={e.imageUrl} alt="" />
              <div className="text-card">
                <h3 className="fullname">Nombre: {e.fullName}</h3>
                <h4 className="titulo">titulo: {e.title}</h4>
                <h5 className="family">familia: {e.family}</h5>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MiApi;