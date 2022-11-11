import { useState, useEffect} from "react";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav.jsx"
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";

import Form from "./components/Form.jsx";

function App() {
	const [characters, setCharacters] = useState([]);
	const Location = useLocation();
	const navigate = useNavigate();
	const [access, setAccess] = useState(false);
	const username = 'ejemplo@gmail.com';
	const password = '1password';


	useEffect(() => {
		!access && navigate('/');
	 }, [access]);
	 

	function login(userData) {
   		if (userData.password === password && userData.username === username) {
			setAccess(true);
			navigate('/home');
		}
	}


	function onSearch(character) {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then(response => response.json())
			.then(data => {
				if (data.name) {
					setCharacters(oldChars => [...oldChars, data]);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			});
	}

	function onClose(id) {
		setCharacters(oldCharacters =>
			oldCharacters.filter(char => char.id !== id)
		);
	}

	return (
		<div className="App" >
			{Location.pathname === "/" ? null: <Nav onSearch={onSearch} />}
			<Routes>
				<Route path="/Form" element={<Form login = {login}/>}/>
				<Route
					exact path="/"
					element={<Cards onClose={onClose} characters={characters} />}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/detail/:detailId" element={<Detail />} /> 
				{/* <Route path="*" element={<NotFound/>}/> */}
				
			</Routes>
		</div>
	);
}

export default App;
