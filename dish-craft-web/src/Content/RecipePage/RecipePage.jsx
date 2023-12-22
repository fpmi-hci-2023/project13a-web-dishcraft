import s from './RecipePage.module.css';
import React from 'react';
import axios from 'axios';
import RPCaloriesBlock from './RPCaloriesBlock/RPCaloriesBlock';
import RPCommentsBlock from './RPCommentsBlock/RPCommentsBlock';
import RPFeedback from './RPFeedback/RPFeedback';
import RPIngredients from './RPIngredients/RPIngredients';
import RPPhotoRecipe from './RPPhotoRecipe/RPPhotoRecipe';
import RPRecipePhotoInfo from './RPRecipePhotoInfo/RPRecipePhotoInfo';
import {
	setCurrentRecipeActionCreator,
	setNutritionalValueActionCreator,
	setProductsActionCreator,
	setStepsActionCreator,
	setCommentsActionCreator
} from '../../Data/state'

class RecipePage extends React.Component {

	// let comments = [
	// 	{ id: 1, authorPhotoUrl: 'https://cdn-icons-png.flaticon.com/512/145/145862.png', author: 'Галина Белая', date: 'Вторник, 25 Октября 2022 г. 15:43', content: 'Очень понравился рецепт, спасибо! Делала на миндальном молоке, получилось отлично. Сахара использовала меньше, чем указано, но, как тут уже писали, это на любителя' },
	// 	{ id: 2, authorPhotoUrl: 'https://cdn-icons-png.flaticon.com/512/145/145862.png', author: 'Галина Белая', date: 'Вторник, 25 Октября 2022 г. 15:43', content: 'Очень понравился рецепт, спасибо! Делала на миндальном молоке, получилось отлично. Сахара использовала меньше, чем указано, но, как тут уже писали, это на любителя' },
	// 	{ id: 3, authorPhotoUrl: 'https://cdn-icons-png.flaticon.com/512/145/145862.png', author: 'Галина Белая', date: 'Вторник, 25 Октября 2022 г. 15:43', content: 'Очень понравился рецепт, спасибо! Делала на миндальном молоке, получилось отлично. Сахара использовала меньше, чем указано, но, как тут уже писали, это на любителя' },
	// 	{ id: 4, authorPhotoUrl: 'https://cdn-icons-png.flaticon.com/512/145/145862.png', author: 'Галина Белая', date: 'Вторник, 25 Октября 2022 г. 15:43', content: 'Очень понравился рецепт, спасибо! Делала на миндальном молоке, получилось отлично. Сахара использовала меньше, чем указано, но, как тут уже писали, это на любителя' }
	// ]

	componentDidMount() {
		if (this.props.currentRecipePage.currentRecipeId !== -1) {
			axios.get("https://dish-craft.onrender.com/recipes/" + this.props.currentRecipePage.currentRecipeId)
				.then(response => {
					let recipe = response.data;

					recipe.rating = {}

					let promises = [];
					let promiseRatingValue = axios.get("https://dish-craft.onrender.com/recipes/" + recipe.recipeId + "/ratings/total")
						.then(response => {
							recipe.rating.value = response.data;
						});
					promises.push(promiseRatingValue);

					let promiseNumRatings = axios.get("https://dish-craft.onrender.com/recipes/" + recipe.recipeId + "/ratings")
						.then(response => {
							recipe.rating.numRatings = response.data.length;
						});
					promises.push(promiseNumRatings);

					Promise.all(promises)
						.then(() => {
							this.props.dispatch(setCurrentRecipeActionCreator(recipe));
						});
				});

			axios.get("https://dish-craft.onrender.com/recipes/" + this.props.currentRecipePage.currentRecipeId + "/nutritional_value")
				.then(response => {
					let nutritionalValue = response.data;
					nutritionalValue.proteins = nutritionalValue.proteins.toFixed(2)
					nutritionalValue.fats = nutritionalValue.fats.toFixed(2)
					nutritionalValue.carbohydrates = nutritionalValue.carbohydrates.toFixed(2)
					this.props.dispatch(setNutritionalValueActionCreator(nutritionalValue));
				});

			axios.get("https://dish-craft.onrender.com/recipes/" + this.props.currentRecipePage.currentRecipeId + "/products")
				.then(response => {
					let products = response.data;
					this.props.dispatch(setProductsActionCreator(products));
				});

			axios.get("https://dish-craft.onrender.com/recipes/" + this.props.currentRecipePage.currentRecipeId + "/steps")
				.then(response => {
					let steps = response.data;
					this.props.dispatch(setStepsActionCreator(steps));
				});

			axios.get("https://dish-craft.onrender.com/recipes/" + this.props.currentRecipePage.currentRecipeId + "/comments")
				.then(response => {
					console.log(response);
					let comments = response.data;
					comments.authorPhotoUrl = '/img/user.jpg';
					this.props.dispatch(setCommentsActionCreator(comments));
				});
		}
	}

	render() {
		return (
			<div className={s.content}>
				<RPRecipePhotoInfo dishName={this.props.currentRecipePage.currentRecipe.recipeName}
					description={this.props.currentRecipePage.currentRecipe.description}
					recipePhotoUrl={"https://dish-craft.onrender.com/recipes/" + this.props.currentRecipePage.currentRecipe.recipeId + "/image"}
					readyTime={this.props.currentRecipePage.currentRecipe.readyTimeMinutes + ' мин'}
					cookingTime={this.props.currentRecipePage.currentRecipe.cookingTimeMinutes + ' мин'}
					complexity={this.props.currentRecipePage.currentRecipe.complexity.complexityName}
					author={{ name: this.props.currentRecipePage.currentRecipe.user.username, photo: '/img/user.jpg' }}
					rating={{ value: this.props.currentRecipePage.currentRecipe.rating.value, numRatings: this.props.currentRecipePage.currentRecipe.rating.numRatings }} />

				<RPCaloriesBlock attributes={[
					{ id: 1, name: 'Калории', value: this.props.currentRecipePage.nutritionalValue.calories, unit: 'кКал' },
					{ id: 2, name: 'Белки', value: this.props.currentRecipePage.nutritionalValue.proteins, unit: 'грамм' },
					{ id: 3, name: 'Жиры', value: this.props.currentRecipePage.nutritionalValue.fats, unit: 'грамм' },
					{ id: 4, name: 'Углеводы', value: this.props.currentRecipePage.nutritionalValue.carbohydrates, unit: 'грамм' }
				]} />

				<RPIngredients numPortions={this.props.currentRecipePage.currentRecipe.defaultPortionsNumber}
					ingredients={this.props.currentRecipePage.products} />

				<RPPhotoRecipe steps={this.props.currentRecipePage.steps} />

				<RPFeedback ratingValue={this.props.currentRecipePage.currentRecipe.rating.value}
					numRatings={this.props.currentRecipePage.currentRecipe.rating.numRatings} />

				<RPCommentsBlock authorPhotoUrl='/img/user.jpg'
					comments={this.props.currentRecipePage.comments} />
			</div>
		);
	}
}

export default RecipePage;