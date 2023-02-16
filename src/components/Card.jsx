import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { agregarFavorito, removerFavorito } from "../redux/actions.js";
import "./CSS/Card.css"

function Card(props) {
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		props.myFavorites.forEach(fav => {
			if (fav.id === props.id) {
				setIsFav(true);
			}
		});
	}, [props.myFavorites]);

	function handleFavorite() {
		if (isFav) {
			setIsFav(false);
			props.removeFav(props.id);
		} else {
			setIsFav(true);
			props.addFav(props);
		}
	}

	return (
		<div className="order">
		<div className="cards">
			<div >
				{isFav ? (
					<button onClick={handleFavorite}>❤️</button>
				) : (
					<button onClick={handleFavorite}>🤍</button>
				)}
				<button className="uno" onClick={() => props.onClose(props.id)}>X</button>
			</div>
			<div >
				<Link to={`/detail/${props.id}`}>
					<h2>{props.name}</h2>
				</Link>
			</div>
			<div>
				<img src={props.image} alt="" />
			</div>
			<div>
				<h2>{props.species}</h2>
			</div>
			<div>
				<h2>{props.gender}</h2>
			</div>

		</div>
		</div>

	);
}

function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addFav: personaje => dispatch(agregarFavorito(personaje)),
		removeFav: id => dispatch(removerFavorito(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
