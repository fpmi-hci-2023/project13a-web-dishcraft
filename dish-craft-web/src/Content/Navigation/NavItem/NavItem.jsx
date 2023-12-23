import { NavLink } from 'react-router-dom';
import s from './NavItem.module.css';

const NavItem = (props) => {
	return (
		<div className={s.navItem}>
			<NavLink className={s.link} to={props.link} key={props.id}>{props.name}</NavLink>
		</div>
	);
}

export default NavItem;