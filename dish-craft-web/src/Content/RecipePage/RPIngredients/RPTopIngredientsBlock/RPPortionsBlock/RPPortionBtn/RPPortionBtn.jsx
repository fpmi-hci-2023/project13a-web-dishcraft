import s from './RPPortionBtn.module.css';

const RPPortionBtn = (props) => {

	return (
		<div className={s.btnBlock}>
			<div className={s.value}>{props.value}</div>
		</div>
	);
}

export default RPPortionBtn;