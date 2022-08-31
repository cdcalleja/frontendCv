import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import './educacion.css'
import { useEffect, useState } from "react";
import axios from "axios";
// import useAxios from "../../hooks/useAxios";

const Educacion = () => {

 
  // const {data: estudios, isLoading: isInfoLoading, error: infoError} = useAxios('http://localhost:3080/estudios/ver')

  const [data, setData] = useState([]);
  useEffect(() => {
   axios('http://localhost:3080/estudios/ver').then (res => {
       setData(res.data.estudios)
       console.log(res.data.estudios)
   })
  }, [])

  return (
    <>
    <div className="card mat-card">
  <div className="contenido" id="main-container">
    <div id="education">
        <h4 className="educacion">Educación
            <button type="button" className="openButton">
            <i><FontAwesomeIcon icon={faPlus} size="xl" style={{height:"40px", width:"40px"}}></FontAwesomeIcon></i>
            </button>
        </h4>
      <div>
        <div className="listaeducaciones">
          {
             data.length !== 0 && data.map((item) => {
              return (
                  <div className="listaeducacionesparrafos" key={item.codigo}>
                      <p className="nombreeducacion" ><span className="educacion"> {item.institucion}</span> - {item.titulo}</p>
                      <p>{item.inicio} - {item.finalizacion}</p>
                  <hr style={{color: "black", backgroundColor: "black", width: "100%"}}/>
                  <br/>
                  </div>
              )
          })
          }

          {/* {
            
            infoError.isError ? <h4> Error : {infoError.message}</h4> :
            isInfoLoading ? <h4> Cargando ... </h4> : 

            estudios.length !== 0 && estudios.map ((item) => {
              return (
                <div className="listaeducacionesparrafos" key={item.codigo}>
                  <p className="nombreeducacion"> <span className="educacion"> {item.institucion} </span>  - {item.titulo} </p>
                  <p> {item.inicio} - {item.finalizacion} </p>
                  <hr style={{color: "black", backgroundColor: "black", width: "100%"}}/>
                  <br/>
                </div>
              )
            })

          } */}
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Educacion