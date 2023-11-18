import s from './RPIngredients.module.css';
import RPIngredientsBlock from './RPIngredientsBlock/RPIngredientsBlock';
import RPTopIngredientsBlock from './RPTopIngredientsBlock/RPTopIngredientsBlock';

const RPIngredients = (props) => {

	return (
		<div className={s.ingredientsBlock}>
			<RPTopIngredientsBlock numPortions={props.numPortions} />
			<RPIngredientsBlock ingredients={props.ingredients} />
		</div>
	);
}

export default RPIngredients;