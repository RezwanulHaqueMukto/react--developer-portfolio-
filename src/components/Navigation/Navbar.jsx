import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useState } from "react";
const Navbar = () => {
	const [menuOpen, SetMenuOpen] = useState(false);
	return (
		<nav className={styles.navbar}>
			<a href="/" className={styles.title}>
				Portfolio
			</a>
			<div className={styles.menu}>
				<img
					src={
						menuOpen
							? getImageUrl("nav/closeIcon.png")
							: getImageUrl("nav/menuIcon.png")
					}
					className={styles.menuBtn}
					alt="menu Button"
					onClick={() => SetMenuOpen(!menuOpen)}
				/>
				<ul
					className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
					onClick={() => SetMenuOpen(false)}
				>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#experience">Experience</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
