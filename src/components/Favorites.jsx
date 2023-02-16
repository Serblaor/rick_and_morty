import { connect, useDispatch } from "react-redux";
import { filtrarPersonajes, ordenarPersonajes } from "../redux/actions.js";
import "./CSS/Favorites.css"

function Favorites({ myFavorites }) {
	const dispatch = useDispatch();

	function handleFilter(e) {
		dispatch(filtrarPersonajes(e.target.value));
	}

	return (
		<div className="Principal">
			<h1>Favorites</h1>
			<div className="Filtros">
				<select
					name="order"
					onChange={e => dispatch(ordenarPersonajes(e.target.value))}
				>
					<option value="default" disabled>
						Select...
					</option>
					<option value="Ascendente">Ascendente</option>
					<option value="Descendente">Descendente</option>
				</select>
				<select name="gender" id="" onChange={handleFilter}>
					<option value="" disabled>
						Select...
					</option>
					<option value="All">All</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>
			<div className="CardF">
				{myFavorites?.map(character => (
					<div key={character.id} className="CardF2">
						<h3>
							{character.name} - {character.id}
						</h3>
						<img src={character.image} alt="" />
					</div>
				))}
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

export default connect(mapStateToProps)(Favorites);
