import "./CSS/About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function About() {
	return (
		<div className="about">
			<h1>Hola! Soy Sergio</h1>
			<span>
				La aplicación web "Rick_and_Morty_App" es una plataforma que permite a los usuarios <br></br>explorar el universo de Rick and Morty, una popular serie de televisión de animación para adultos. <br></br>
				La aplicación utiliza la API de Rick and Morty para obtener información detallada sobre cada personaje, Nombre, estado, especie, género y origen.
			</span>
			<br></br>
			<span>
				Esta App está elaborada con:
				<br></br>
				React<br></br>
				Javascript<br></br>
				Se uso fetch para realizar las peticiones a la API<br></br> y
				CSS para los estilos<br></br>

			</span>
			<div className="social-icons">
				<a href="https://www.linkedin.com/in/serblaor7/" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a href="https://github.com/serblaor" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</div>
		</div>
	);
}
