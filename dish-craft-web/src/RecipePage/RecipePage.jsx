import s from './RecipePage.module.css';
import RPCaloriesBlock from './RPCaloriesBlock/RPCaloriesBlock';
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

	return (
		<div className={s.content}>
			<RPRecipePhotoInfo dishName='Мусс с семенами чиа' description={description} recipePhotoUrl='/img/recipe-photo.jpg' readyTime='6 ч 15 мин' cookingTime='15 мин' complexity='Просто' author={author} rating={rating} />
			<RPCaloriesBlock attributes={attributes} />
		</div>
	);
}

export default RecipePage;