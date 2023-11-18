import RPPortionsBlock from './RPPortionsBlock/RPPortionsBlock';
import s from './RPTopIngredientsBlock.module.css';

const RPTopIngredientsBlock = (props) => {

	return (
		<div className={s.block}>
			<div className={s.title}>Ингредиенты</div>
			<RPPortionsBlock numPortions={props.numPortions} />
		</div>
	);
}

export default RPTopIngredientsBlock;