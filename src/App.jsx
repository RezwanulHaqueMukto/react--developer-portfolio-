import styles from "./App.module.css";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";

function App() {
	return (
		<>
			<div className={styles.App}>
				<Navbar></Navbar>
			</div>
		</>
	);
}

export default App;
