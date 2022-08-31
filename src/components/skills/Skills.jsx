import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import './skills.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from "react";
import axios from "axios";


const Skills = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
   axios('http://localhost:3080/skills/ver').then (res => {
       setData(res.data.skills)
       console.log(res.data.skills)
   })
  }, [])

  return (
    <>
    <div className="card mat-card">
  <div className="contenido" id="main-container">
    <div id="education">
        <h4 className="educacion">Hard - Soft Skills
            <button type="button" className="openButton">
            <i><FontAwesomeIcon icon={faPlus} size="xl" style={{height:"40px", width:"40px"}}></FontAwesomeIcon></i>
            </button>
        </h4>
      <div>
        <div className="Seccion">
      {
             data.length !== 0 && data.map((item) => {
              return (
                  <div className="Seccion" key={item.codigo}>
                  <p ><span className="educacion">{item.nombre} </span></p>       
                  <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar value={item.progreso} text={item.progreso} />
                  </div>
                  <hr style={{color: "black", backgroundColor: "black", width: "100%"}}/>
                  <br/>
                  </div>
              )
          })
          }
        </div>

        {/* <div className="listaskills">
            <p ><span className="educacion">Resolución de problemas </span></p>
        <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar value={90} text={`90%`} />
        </div>
            <hr style={{color: "black", backgroundColor: "black", width: "100%"}}/>
            <br/>
        </div> */}
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Skills