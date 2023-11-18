import RPPortionBtn from './RPPortionBtn/RPPortionBtn';
import s from './RPPortionsBlock.module.css';

const RPPortionsBlock = (props) => {

	return (
		<div className={s.block}>
			<div className={s.title}>Порции</div>
			<RPPortionBtn value='-' />
			<div className={s.numPortions}>{props.numPortions}</div>
			<RPPortionBtn value='+' />
		</div>
	);
}

export default RPPortionsBlock;