import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import './experiencia.css'
// import {useAxios} from "../../hooks/useAxios"
import { useEffect, useState } from "react";
import axios from "axios";

const Experiencia = () => {

   const [data, setData] = useState([]);
   useEffect(() => {
    axios('http://localhost:3080/experiencias/ver').then (res => {
        setData(res.data.experiencia)
        console.log(res.data.experiencia)
    })
   }, [])

  return (
    <>
    <div className="card mat-card">
        <div className="contenido" id="main-container">
            <div id="trabajo">
                <h4> Experiencia Laboral
                    <button type="button" className="openButton">
                        <i><FontAwesomeIcon icon={faPlus} size="xl" style={{height:"40px", width:"40px"}}></FontAwesomeIcon></i>
                    </button>
                </h4>
                <div>
                    <div className="listatrabajos">
                        {
                        data.length !== 0 && data.map((item) => {
                                return (
                                    <div className="listatrabajosparrafos" key={item.codigo}>
                                        <p className="nombreexperiencia" ><span className="titulo"> {item.posicion}</span> - {item.empresa}</p>
                                        <p>{item.modalidad}</p>
                                        <p>{item.inicio} - {item.finalizacion}</p>
                                        <p>{item.tiempoTrabajado}</p>
                                        <p>{item.lugar}</p>
                                    <hr style={{color: "black", backgroundColor: "black", width: "100%"}}/>
                                    <br/>
                                    </div>
                                )
                            })
                        }

                        {/* 
                        <p class="nombreexperiencia"><span class="titulo">Abogado</span> - Particular</p>
                        <p>Fulltime</p>
                        <p>2011 - Actualidad</p>
                        <p>11 años</p>
                        <p>Buenos Aires</p>  
                        <hr style={{color: "black", backgroundColor: "black", width: "100%"}}/>
                        <br/>*/}
                    </div> 
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Experiencia