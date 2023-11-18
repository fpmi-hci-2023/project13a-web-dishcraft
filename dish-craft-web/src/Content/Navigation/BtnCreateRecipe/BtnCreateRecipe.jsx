import { NavLink } from 'react-router-dom';
import s from './BtnCreateRecipe.module.css';

const BtnCreateRecipe = (props) => {
	return (
		<div className={s.btnBlock}>
			<NavLink className={s.btn} to={props.link}>{props.name}</NavLink>
		</div>
	);
}

export default BtnCreateRecipe;