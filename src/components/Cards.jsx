import Card from "./Card";
import "./CSS/Card.css"

export default function Cards(props) {
	const { characters, onClose } = props;

	return (
		<div className="order">
			{characters.map(character => (
				<Card
					name={character.name}
					gender={character.gender}
					species={character.species}
					image={character.image}
					key={character.id}
					id={character.id}
					onClose={onClose}
				/>
			))}
		</div>
	);
}
