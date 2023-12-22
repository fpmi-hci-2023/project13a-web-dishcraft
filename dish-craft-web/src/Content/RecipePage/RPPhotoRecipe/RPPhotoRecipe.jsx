import s from './RPPhotoRecipe.module.css';
import RPRecipeStep from './RPRecipeStep/RPRecipeStep';

const RPPhotoRecipe = (props) => {

	let ingredientsElements = props.steps.map(s => <RPRecipeStep photoUrl={"https://dish-craft.onrender.com/recipes/" + s.recipe.recipeId + "/steps/" + s.stepId + "/image"} title={"Шаг " + s.numberInRecipe} description={s.stepDescription} key={s.stepId} />);

	return (
		<div className={s.block}>
			<div className={s.title}>Пошаговый фоторецепт</div>
			<div>
				{ingredientsElements}
			</div>
		</div>
	);
}

export default RPPhotoRecipe;