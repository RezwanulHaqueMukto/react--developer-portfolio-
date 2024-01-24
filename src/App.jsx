import styles from "./App.module.css";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
	return (
		<>
			<div className={styles.App}>
				<Navbar></Navbar>
				<Hero></Hero>
			</div>
		</>
	);
}

export default App;
