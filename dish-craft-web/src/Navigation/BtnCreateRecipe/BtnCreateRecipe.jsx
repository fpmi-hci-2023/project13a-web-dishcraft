import { NavLink } from 'react-router-dom';
import s from './BtnCreateRecipe.module.css';

const BtnCreateRecipe = () => {
	return (
		<div className={s.btnBlock}>
			<NavLink className={s.btn} to='/create-recipe'>Создать Рецепт</NavLink>
		</div>
	);
}

export default BtnCreateRecipe;