import RPRecipeInfo from './RPRecipeInfo/RPRecipeInfo';
import s from './RPRecipePhotoInfo.module.css';

const RPRecipePhotoInfo = (props) => {

	return (
		<div className={s.photoInfoBlock}>
			<div className={s.recipePhotoBlock}>
				<img className={s.recipePhoto} src={props.recipePhotoUrl} alt='Блюдо' />
			</div>
			<RPRecipeInfo dishName={props.dishName} description={props.description} readyTime={props.readyTime} complexity={props.complexity} cookingTime={props.cookingTime} author={props.author} rating={props.rating} />
		</div>
	);
}

export default RPRecipePhotoInfo;