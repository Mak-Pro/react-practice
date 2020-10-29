import React from 'react';

import styles from './Navigation.module.scss';

const Navigation = (props) => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li><a href="">Componets</a></li>
				<li><a href="">Routes</a></li>
			</ul>
		</nav>
	);
}

export default Navigation;