import styles from "./App.module.css";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

function App() {
	return (
		<>
			<div className={styles.App}>
				<Navbar></Navbar>
				<Hero></Hero>
				<About></About>
				<Experience />
			</div>
		</>
	);
}

export default App;
