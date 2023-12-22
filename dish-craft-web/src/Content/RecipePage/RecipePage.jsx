import s from './RecipePage.module.css';
import React from 'react';
import axios from 'axios';
import RPCaloriesBlock from './RPCaloriesBlock/RPCaloriesBlock';
import RPCommentsBlock from './RPCommentsBlock/RPCommentsBlock';
import RPFeedback from './RPFeedback/RPFeedback';
import RPIngredients from './RPIngredients/RPIngredients';
import RPPhotoRecipe from './RPPhotoRecipe/RPPhotoRecipe';
import RPRecipePhotoInfo from './RPRecipePhotoInfo/RPRecipePhotoInfo';
import { setCurrentRecipeActionCreator } from '../../Data/state'

class RecipePage extends React.Component {

	// 	let description = 'Мусс с семенами чиа — легкий и полезный десерт со свежими ягодами. Семена чиа нормализуют вес, помогают при диабете и болезнях сердца. В них много витаминов, минералов и других полезных веществ. Ягоды могут быть любые, например, малина, клубника или голубика.';

	// let author = {
	// 	name: 'Галина Белая',
	// 	photo: 'https://cdn-icons-png.flaticon.com/512/145/145862.png'
	// }

	// let rating = {
	// 	value: '5.0',
	// 	numRatings: 20
	// }

	// let attributes = [
	// 	{ id: 1, name: 'Калории', value: '120,43', unit: 'кКал' },
	// 	{ id: 2, name: 'Белки', value: '3,73', unit: 'грамм' },
	// 	{ id: 3, name: 'Жиры', value: '5,04', unit: 'грамм' },
	// 	{ id: 4, name: 'Углеводы', value: '14,95', unit: 'грамм' }
	// ]

	// let ingredients = [
	// 	{ id: 1, photoUrl: '/img/ingredient1.jpg', photoAlt: 'Семена чиа', name: 'Семена чиа', value1: '2', unit1: 'ст. л.', value2: '50', unit2: 'г' },
	// 	{ id: 2, photoUrl: '/img/ingredient2.jpg', photoAlt: 'Молоко 2,5% жирности', name: 'Молоко 2,5% жирности', value1: '1', unit1: 'стакан', value2: '240', unit2: 'г' },
	// 	{ id: 3, photoUrl: '/img/ingredient3.jpg', photoAlt: 'Мед', name: 'Мед', value1: '1', unit1: 'ст. л.', value2: '28', unit2: 'г' },
	// 	{ id: 4, photoUrl: '/img/ingredient4.jpg', photoAlt: 'Клубника', name: 'Клубника', value1: '3', unit1: 'шт.', value2: '45', unit2: 'г' },
	// 	{ id: 5, photoUrl: '/img/ingredient5.jpg', photoAlt: 'Красная смородина', name: 'Красная смородина', value1: '6', unit1: 'шт.', value2: '20', unit2: 'г' },
	// 	{ id: 6, photoUrl: '/img/ingredient6.jpg', photoAlt: 'Голубика', name: 'Голубика', value1: '1,5', unit1: 'ст. л.', value2: '45', unit2: 'г' }
	// ]

	// let steps = [
	// 	{ id: 1, photoUrl: '/img/step1.jpg', title: 'Шаг 1', description: 'Отмерьте необходимое количество продуктов. Ягоды и листики мяты для подачи вымойте, обсушите на бумажных полотенцах, у клубники удалите чашелистики. Нарежьте клубнику кусочками произвольного размера. Приготовьте 2 стеклянные баночки с крышками.' },
	// 	{ id: 2, photoUrl: '/img/step2.jpg', title: 'Шаг 2', description: 'Размочите семена чиа. В миске соедините молоко и мед, всыпьте семена чиа, хорошо перемешайте и поставьте в холодильник на 6-8 часов.' },
	// 	{ id: 3, photoUrl: '/img/step3.jpg', title: 'Шаг 3', description: 'Соберите десерт. В стеклянную баночку слоем выложите нарезанную клубнику. Далее положите часть мусса. Повторяйте процедуру до полного наполнения емкости. Ягоды чередуйте между собой. Верхний слой должен быть из ягод.' },
	// 	{ id: 4, photoUrl: '/img/step4.jpg', title: 'Шаг 4', description: 'Перед подачей украсьте мусс с семенами чиа веточкой свежей мяты.' },
	// ]

	// let comments = [
	// 	{ id: 1, authorPhotoUrl: 'https://cdn-icons-png.flaticon.com/512/145/145862.png', author: 'Галина Белая', date: 'Вторник, 25 Октября 2022 г. 15:43', content: 'Очень понравился рецепт, спасибо! Делала на миндальном молоке, получилось отлично. Сахара использовала меньше, чем указано, но, как тут уже писали, это на любителя' },
	// 	{ id: 2, authorPhotoUrl: 'https://cdn-icons-png.flaticon.com/512/145/145862.png', author: 'Галина Белая', date: 'Вторник, 25 Октября 2022 г. 15:43', content: 'Очень понравился рецепт, спасибо! Делала на миндальном молоке, получилось отлично. Сахара использовала меньше, чем указано, но, как тут уже писали, это на любителя' },
	// 	{ id: 3, authorPhotoUrl: 'https://cdn-icons-png.flaticon.com/512/145/145862.png', author: 'Галина Белая', date: 'Вторник, 25 Октября 2022 г. 15:43', content: 'Очень понравился рецепт, спасибо! Делала на миндальном молоке, получилось отлично. Сахара использовала меньше, чем указано, но, как тут уже писали, это на любителя' },
	// 	{ id: 4, authorPhotoUrl: 'https://cdn-icons-png.flaticon.com/512/145/145862.png', author: 'Галина Белая', date: 'Вторник, 25 Октября 2022 г. 15:43', content: 'Очень понравился рецепт, спасибо! Делала на миндальном молоке, получилось отлично. Сахара использовала меньше, чем указано, но, как тут уже писали, это на любителя' }
	// ]

	componentDidMount() {
		debugger;
		console.log(this.props);
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
				{/* <RPCaloriesBlock attributes={attributes} />
				<RPIngredients numPortions='2' ingredients={ingredients} />
				<RPPhotoRecipe steps={steps} />
				<RPFeedback ratingValue='5' numRatings='3' />
				<RPCommentsBlock authorPhotoUrl='https://i.pinimg.com/1200x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg' comments={comments} /> */}
			</div>
		);
	}
}

export default RecipePage;