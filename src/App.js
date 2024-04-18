import "./App.css";
import CollapsibleExample from "./components/Collabsible";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Header />
			<CollapsibleExample />
		</div>
	);
}

export default App;
