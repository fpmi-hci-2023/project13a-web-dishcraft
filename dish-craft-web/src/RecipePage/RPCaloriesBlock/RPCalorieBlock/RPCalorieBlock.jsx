import s from './RPCalorieBlock.module.css';

const RPCalorieBlock = (props) => {

	return (
		<div className={s.greenBlock}>
			{props.name}
			<div className={s.whiteBlock}>
				<div className={s.value}>{props.value}</div>
				<div className={s.unit}>{props.unit}</div>
			</div>
		</div>
	);
}

export default RPCalorieBlock;