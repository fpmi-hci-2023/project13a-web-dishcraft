import s from './RPPhotoRecipe.module.css';
import RPRecipeStep from './RPRecipeStep/RPRecipeStep';

const RPPhotoRecipe = (props) => {

	let ingredientsElements = props.steps.map(s => <RPRecipeStep photoUrl={s.photoUrl} title={s.title} description={s.description} key={s.id} />);

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