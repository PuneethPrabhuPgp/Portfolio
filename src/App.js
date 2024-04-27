import "./App.css";
import About from "./components/About";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Querks from "./components/Querks";
import Quotes from "./components/Quotes";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
	return (
		<div className="App">
			<Header />
			<Intro />
			<About />
			<Skills />
			<Resume />
			<Querks />
			<Quotes />
			<Connect />
			<Footer />
		</div>
	);
}

export default App;
