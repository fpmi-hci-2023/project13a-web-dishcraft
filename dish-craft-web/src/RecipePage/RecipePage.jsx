import s from './RecipePage.module.css';
import RPCaloriesBlock from './RPCaloriesBlock/RPCaloriesBlock';
import RPIngredients from './RPIngredients/RPIngredients';
import RPRecipePhotoInfo from './RPRecipePhotoInfo/RPRecipePhotoInfo';

const RecipePage = () => {

	let description = 'Мусс с семенами чиа — легкий и полезный десерт со свежими ягодами. Семена чиа нормализуют вес, помогают при диабете и болезнях сердца. В них много витаминов, минералов и других полезных веществ. Ягоды могут быть любые, например, малина, клубника или голубика.';

	let author = {
		name: 'Галина Белая',
		photo: 'https://cdn-icons-png.flaticon.com/512/145/145862.png'
	}

	let rating = {
		value: '5.0',
		numRatings: 20
	}

	let attributes = [
		{ id: 1, name: 'Калории', value: '120,43', unit: 'кКал' },
		{ id: 2, name: 'Белки', value: '3,73', unit: 'грамм' },
		{ id: 3, name: 'Жиры', value: '5,04', unit: 'грамм' },
		{ id: 4, name: 'Углеводы', value: '14,95', unit: 'грамм' }
	]

	let ingredients = [
		{id: 1, photoUrl: '/img/ingredient1.jpg', photoAlt: 'Семена чиа', name: 'Семена чиа', value1: '2', unit1: 'ст. л.', value2: '50', unit2: 'г'},
		{id: 2, photoUrl: '/img/ingredient2.jpg', photoAlt: 'Молоко 2,5% жирности', name: 'Молоко 2,5% жирности', value1: '1', unit1: 'стакан', value2: '240', unit2: 'г'},
		{id: 3, photoUrl: '/img/ingredient3.jpg', photoAlt: 'Мед', name: 'Мед', value1: '1', unit1: 'ст. л.', value2: '28', unit2: 'г'},
		{id: 4, photoUrl: '/img/ingredient4.jpg', photoAlt: 'Клубника', name: 'Клубника', value1: '3', unit1: 'шт.', value2: '45', unit2: 'г'},
		{id: 5, photoUrl: '/img/ingredient5.jpg', photoAlt: 'Красная смородина', name: 'Красная смородина', value1: '6', unit1: 'шт.', value2: '20', unit2: 'г'},
		{id: 6, photoUrl: '/img/ingredient6.jpg', photoAlt: 'Голубика', name: 'Голубика', value1: '1,5', unit1: 'ст. л.', value2: '45', unit2: 'г'}
	]

	return (
		<div className={s.content}>
			<RPRecipePhotoInfo dishName='Мусс с семенами чиа' description={description} recipePhotoUrl='/img/recipe-photo.jpg' readyTime='6 ч 15 мин' cookingTime='15 мин' complexity='Просто' author={author} rating={rating} />
			<RPCaloriesBlock attributes={attributes} />
			<RPIngredients numPortions='2' ingredients={ingredients} />
		</div>
	);
}

export default RecipePage;