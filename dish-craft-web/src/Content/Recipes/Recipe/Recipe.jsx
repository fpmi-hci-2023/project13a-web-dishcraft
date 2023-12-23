import s from './Recipe.module.css';
import { NavLink } from 'react-router-dom';
import RecipeInfo from './RecipeInfo/RecipeInfo';
import { setCurrentRecipeIdActionCreator } from '../../../Data/state'

const Recipe = (props) => {

	const setCurrentRecipeId = () => {
		props.dispatch(setCurrentRecipeIdActionCreator(props.recipeId));
	}

	return (
		<NavLink onClick={() => setCurrentRecipeId()} className={s.link} to={props.link}>
			<div className={s.recipeBlock} >
				<img src={props.url} alt='Блюдо' />
				<RecipeInfo title={props.title} readyTime={props.readyTime} complexity={props.complexity} calories={props.calories} description={props.description} key={props.recipeId} />
			</div>
		</NavLink>
	);
}

export default Recipe;