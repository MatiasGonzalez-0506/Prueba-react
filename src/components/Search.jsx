import { useState } from "react";

const Search = ({info}) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([{}]);

  // aca tenemos una validacion para evitar un campo vacio en el caso del imput
  const searchCr = (e) => {
    e.preventDefault();
    if(search === ""){
      alert("Ingresa Algún Personaje")
     return;
    }
    // aca tenemos un filtro que se encarga de la busqueda de datos entre los objetos del array y le setea el state a result
    const dataArray = info.filter(i =>i.fullName.toLowerCase().includes(search))
    setResult(dataArray)
  };
  // en caso de que se ingrese un personaje correctamente los datos de este apareceran el la card fijada en el inicio por defecto
  return (
    <>
      <form className="d-flex" role="search" onSubmit={searchCr}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar un personaje"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {result.map((e)=> {return(
        <div className="result">
          <div className="titulo">
            <h3>resultado de busqueda</h3>
             <div className="card-result" key={e.name}>
                  <img className="image-card" src={e.imageUrl} alt="" />
               <div className="text-card">
               <h3 className="fullname">Nombre: {e.fullName}</h3>
                  <h4 className="titulo">titulo: {e.title}</h4>
                 <h5 className="family">familia: {e.family}</h5>
                </div>
              </div>
            </div>
          </div>
      )})}
    </>
  );
};

export default Search;