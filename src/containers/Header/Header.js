import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import classes from './Header.module.scss';

const Header = (props) => {

	return (
		<header className={classes.main__header}>
			<Link to="/"><img src={require(`../../assets/img/hamb.png`)} alt="" className={classes.header__logo}/></Link>
			<ul className={classes.header__menu}>
				<li><NavLink to="/" exact activeClassName={classes.active}>Home</NavLink></li>
				{ props.isAuth ? <li><NavLink to="/orders" exact activeClassName={classes.active}>Orders</NavLink></li> : null}
				{props.isAuth ? 
					<li><NavLink to="/auth" exact activeClassName={classes.active}>Log Out</NavLink></li> :
					<li><NavLink to="/auth" exact activeClassName={classes.active}>Authentication</NavLink></li>
				}
			</ul>
		</header>
	);
}

export default Header;