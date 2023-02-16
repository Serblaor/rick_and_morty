import { useState } from "react";
import "./CSS/search.css"

export default function SearchBar(props) {
	const [character, setCharacter] = useState("");

	function handleChange(e) {
		setCharacter(e.target.value);
	}

	return (
		<div className="search">
			<input type="search" value={character} onChange={handleChange} />
			<button onClick={() => props.onSearch(character)}>Agregar</button>
		</div>
	);
}
