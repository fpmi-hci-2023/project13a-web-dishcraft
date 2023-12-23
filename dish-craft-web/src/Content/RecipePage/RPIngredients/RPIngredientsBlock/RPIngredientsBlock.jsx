import RPIngredient from './RPIngredient/RPIngredient';
import s from './RPIngredientsBlock.module.css';

const RPIngredientsBlock = (props) => {

	let ingredientsElements = props.ingredients.map(i => <RPIngredient photoUrl={"https://dish-craft.onrender.com/products/" + i.productId + "/image"} photoAlt={i.productName} name={i.productName} value1={i.value1} unit1={i.unit1} value2={i.value2} unit2={i.unit2} key={i.productId} />);

	return (
		<div className={s.block}>
			{ingredientsElements}
		</div>
	);
}

export default RPIngredientsBlock;