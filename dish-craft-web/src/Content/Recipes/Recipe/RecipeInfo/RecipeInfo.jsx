import Feature from './Feature/Feature';
import s from './RecipeInfo.module.css';

const RecipeInfo = (props) => {
	let features = [
		{ id: 1, value: props.readyTime, url: '/img/ready-time.png', alt: 'Будет готово через' },
		{ id: 2, value: props.complexity, url: '/img/complexity.png', alt: 'Сложность' },
		{ id: 3, value: props.calories, url: '/img/calories.png', alt: 'Калорийность' }
	];

	let featuresElements = features.map(f => <Feature value={f.value} url={f.url} alt={f.alt} key={f.id} />);


	return (
		<div className={s.recipeInfo}>
			<div className={s.title}>{props.title}</div>
			<div className={s.features}>
				{featuresElements}
			</div>
			<div className={s.description}>{props.description}</div>
		</div>
	);
}

export default RecipeInfo;