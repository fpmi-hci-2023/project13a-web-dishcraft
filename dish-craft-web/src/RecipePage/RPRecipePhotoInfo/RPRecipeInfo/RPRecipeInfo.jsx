import RPAuthor from './RPAuthor/RPAuthor';
import RPBottomBtns from './RPBottomBtns/RPBottomBtns';
import RPFeature from './RPFeature/RPFeature';
import s from './RPRecipeInfo.module.css';

const RPRecipeInfo = (props) => {

	let features = [
		{ id: 1, name: 'Будет готово через', value: props.readyTime, url: '/img/ready-time.png', alt: 'Будет готово через' },
		{ id: 2, name: 'Время на кухне', value: props.cookingTime, url: '/img/cooking-time.png', alt: 'Время на кухне' },
		{ id: 3, name: 'Сложность', value: props.complexity, url: '/img/complexity.png', alt: 'Сложность' }
	];

	let featuresElements = features.map(f => <RPFeature name={f.name} value={f.value} url={f.url} alt={f.alt} key={f.id} />);

	return (
		<div className={s.infoBlock}>
			<div className={s.title}>{props.dishName}</div>
			<div className={s.features}>
				{featuresElements}
			</div>
			<div className={s.description}>{props.description}</div>
			<RPAuthor author={props.author} />
			<RPBottomBtns rating={props.rating} />
		</div>
	);
}

export default RPRecipeInfo;