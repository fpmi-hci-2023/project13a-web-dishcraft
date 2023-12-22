import Recipe from './Recipe/Recipe';
import React from 'react';
import s from './Recipes.module.css';
import axios from 'axios';
import { setRecipesActionCreator } from '../../Data/state'

class Recipes extends React.Component {

	componentDidMount() {
		axios.get("https://dish-craft.onrender.com/recipes")
			.then(response => {
				let recipes = response.data.content;
				let promises = [];

				recipes.forEach(recipe => {
					let promise = axios.get("https://dish-craft.onrender.com/recipes/" + recipe.recipeId + "/nutritional_value")
						.then(response => {
							recipe.calories = response.data.calories;
						});
					promises.push(promise);
				});

				debugger;
				Promise.all(promises)
					.then(() => {
						this.props.dispatch(setRecipesActionCreator(recipes))
					});
				debugger;
			});
		debugger;
	}

	render() {
		return (
			<div className={s.content}>
				<div className={s.title}>Рецепты</div>

				<div className={s.toggleBtnBlock}>
					<div className={s.switch}>
						<input type="checkbox" id="toggle" className={s.toggleInput} />
						<label htmlFor="toggle" className={s.toggleLabel}>
							<span className={s.leftLabel}>Новое</span>
							<span className={s.rightLabel}>Популярное</span>
						</label>
					</div>
				</div>

				<div className={s.recipes}>
					{this.props.recipesPage.recipes.map(r =>
						<Recipe dispatch={this.props.dispatch}
							link='/current-recipe'
							title={r.recipeName}
							url={"https://dish-craft.onrender.com/recipes/" + r.recipeId + "/image"}
							readyTime={r.readyTimeMinutes + ' мин'}
							complexity={r.complexity.complexityName}
							calories={r.calories + ' кКал'}
							description={r.description}
							recipeId={r.recipeId}
							key={r.recipeId} />)}
				</div>
			</div>
		);
	}
}

export default Recipes;