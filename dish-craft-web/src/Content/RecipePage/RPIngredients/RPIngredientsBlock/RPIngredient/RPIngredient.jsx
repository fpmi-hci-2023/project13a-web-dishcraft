import s from './RPIngredient.module.css';

const RPIngredient = (props) => {

	return (
		<div className={s.block}>
			<div className={s.photoBlock}>
				<img src={props.photoUrl} alt={props.photoAlt} />
			</div>
			<div className={s.name}>{props.name}</div>
			{/* <div className={s.values}>
				<div>{props.value1} {props.unit1} = {props.value2} {props.unit2}</div>
			</div> */}
		</div>
	);
}

export default RPIngredient;