import RPIngredient from './RPIngredient/RPIngredient';
import s from './RPIngredientsBlock.module.css';

const RPIngredientsBlock = (props) => {

	let ingredientsElements = props.ingredients.map(i => <RPIngredient photoUrl={i.photoUrl} photoAlt={i.photoAlt} name={i.name} value1={i.value1} unit1={i.unit1} value2={i.value2} unit2={i.unit2} key={i.id} />);

	return (
		<div className={s.block}>
			{ingredientsElements}
		</div>
	);
}

export default RPIngredientsBlock;