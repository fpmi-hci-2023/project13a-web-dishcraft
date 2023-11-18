import s from './RPRecipeStep.module.css';

const RPRecipeStep = (props) => {

	return (
		<div className={s.block}>
			<div className={s.photo}>
				<img src={props.photoUrl} alt={props.title} />
			</div>
			<div className={s.stepBlock}>
				<div className={s.stepNum}>{props.title}</div>
				<div className={s.description}>{props.description}</div>
			</div>
		</div>
	);
}

export default RPRecipeStep;