import s from './Recipe.module.css';
import RecipeInfo from './RecipeInfo/RecipeInfo';

const Recipe = (props) => {
	return (
		<div className={s.recipeBlock}>
			<img src={props.url} />
			<RecipeInfo title={props.title} readyTime={props.readyTime} complexity={props.complexity} calories={props.calories} description={props.description} key={props.id} />
		</div>
	);
}

export default Recipe;