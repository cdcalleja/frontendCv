import Banner from './img/bannerimg.jpg'
import ProPic from './img/profpic.jpg'
import UbaDer from './img/logoubaderecho.jpg'
import Numen from './img/numen.jpg'
import './header.css'
const Header = () => {
return (
    <>
    <div className='card mat-card'>
      <div id="profile-background">
        <img src={Banner} alt="banner"/>
    </div>
    </div>
    <div className='card mat-card' id='first-card'>
        <div id='info' style={{padding: "16px"}}>
            <div id='info-img'>
                <img id='info-user-img' className='profile-image' src={ProPic} alt="profilepic" />
            </div>
            <div id='info-data'>
                <div className='main-container'>
                    <div className='persona'>
                        {/* aca ira el ngfor para mapear */}
                        <h1 id='info-name'>Christian Daniel Calleja</h1>
                        <div><span id='info-position'>Abogado y Desarrollador Web FullStack</span></div>
                        <div id='info-contact'>
                            <span id='info-ubication'> Buenos Aires (Argentina)</span>
                            <br />
                            <span>Información de contacto: christiandcalleja@yahoo.com.ar</span>
                        </div>
                    </div>
                </div>
                <ul id="info-details">
                    <li>
                <a href="http://www.derecho.uba.ar"  target="_blank" rel="noopener noreferrer">
                <img id="info-school-img" src={UbaDer} alt='ubaderecho'/>
                <h5 id="info-school-name">Universidad de Buenos Aires - Facultad de Derecho</h5>
                </a></li>
                <li>
                    <a href="https://ar.academianumen.com/" target="_blank" rel="noopener noreferrer">
                        <img src={Numen} alt="Numen Academy" />
                        <h5>Academia Numen</h5>
                    </a>
                </li>
                </ul>
            </div>
            <div id="info-actions">
          <button type="button" className="btn btn-primary">Tengo interés en</button>
          <button type="button" className="btn btn-light">Añadir Sección</button>
          <button type="button" className="btn btn-light">Más</button>
            </div>
        </div>
    </div>
    </>
)
}

export default Header;