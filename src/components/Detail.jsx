import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CSS/Detail.css"

export default function Detail() {
	const { detailId } = useParams();
	const navigate = useNavigate();
	const [character, setCharacter] = useState({});

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
			.then(response => response.json())
			.then(char => {
				if (char.name) {
					setCharacter(char);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			})
			.catch(err => {
				window.alert("Error", err);
			});

		return setCharacter({});
	}, [detailId]);

	return (
		<div className="detail">
			<div>
				<button onClick={() => navigate("/home")}>Volver</button>
			</div>
			<div className="detail2">
			<img src={character.image} alt="" />
			</div>
			<div className="detail3">
			<p>NOMBRE: {character.name}</p>
			<p>STATUS: {character.status}</p>
			<p>ESPECIE: {character.species}</p>
			<p>GENERO: {character.gender}</p>
			<p>ORIGIN: {character.origin?.name}</p>
			
			</div>
		</div>
	);
}
