import Recipe from './Recipe/Recipe';
import s from './Recipes.module.css';

const Recipes = () => {
	return (
		<div className={s.content}>
			<div className={s.title}>Рецепты</div>

			<div className={s.recipes}>
				<Recipe/>
				<Recipe/>
				<Recipe/>
			</div>
		</div>
	);
}

export default Recipes;