import { NavLink } from 'react-router-dom';
import s from './SearchBtn.module.css';

const SearchBtn = () => {
	return (
		<div className={s.btnBlock}>
			<NavLink className={s.btn} to='/find-recipe'>Найти Рецепт</NavLink>
		</div>
	);
}

export default SearchBtn;