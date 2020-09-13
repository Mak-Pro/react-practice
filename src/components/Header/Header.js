import React from 'react';

//IMPORT ROUTER LINKS OR NAVLINKS
import { NavLink, Link } from 'react-router-dom';

import classes from './Header.module.scss';

const Header = (props) => {
	return (
		<header className={classes.header}>
			<nav className={classes.header__nav}>
				<ul className={classes.header__menu}>
					<li><NavLink to="/" exact activeClassName={classes.active}>Home</NavLink></li>
					<li><NavLink to="/posts" exact activeClassName={classes.active}>All Posts</NavLink></li>
					<li><NavLink to="/new-post" exact activeClassName={classes.active}>New Post</NavLink></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;