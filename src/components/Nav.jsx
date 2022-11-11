import { Link} from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

export default function Nav(props) {
	
	return (
		<div>
			<Link to={"/home"}>
				<span>Home</span>
			</Link>
			
			<Link to={"/about"}>
				<span>About</span>
			</Link>
			<Link to={"/Form"}> 
				<span> Login </span>
			</Link>

			<SearchBar onSearch={props.onSearch} />
		</div>
	);
}
