import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

function App() {
	return (
		<div className="App">
			<Header />
			<Intro />
			<About />
			<Skills />
			<Footer />
		</div>
	);
}

export default App;
