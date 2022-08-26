import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import './proyectos.css'
import { useEffect, useState } from "react";
import axios from "axios";


const Proyectos = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
   axios('http://localhost:3080/proyectos/ver').then (res => {
       setData(res.data.proyectos)
       console.log(res.data.proyectos)
   })
  }, [])

  return (
    <>
       <div className="card mat-card">
  <div className="contenido" id="main-container">
    <div id="proyectos">
        <h4 className="educacion">Proyectos
            <button type="button" className="openButton">
            <i><FontAwesomeIcon icon={faPlus} size="xl" style={{height:"40px", width:"40px"}}></FontAwesomeIcon></i>
            </button>
        </h4>
      <div>
        <div className="listaproyectos">
          {
            data.length !== 0 && data.map((item) => {
              return (
                  <div className="listaproyectosparrafos" key={item.codigo}>
                      <p className="nombreproyecto" ><span className="nombre"> {item.nombre}</span></p>
                      <p>{item.inicio} - {item.finalizacion}</p>
                      <p>{item.descripcion}</p>
                      <p><span>{item.url}</span></p>
                      <hr style={{color: "black", backgroundColor: "black", width: "100%"}}/>
                      <br/>
                  </div>
              )
          })
          }

            {/* <div className="listaproyectosparrafos">
            <p className="nombreproyecto"><span className="nombre">sarasasa</span></p>
            <p>2021 - 2021</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam. Sequi, ratione minus? Voluptate labore accusamus veritatis, sed, 
                magnam laboriosam enim itaque velit sit ex cum hic doloribus, impedit eligendi.</p>
                <p>direccion web</p>
            </div> */}
            {/* <hr style={{color: "black", backgroundColor: "black", width: "100%"}}/>
            <br/> */}
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Proyectos