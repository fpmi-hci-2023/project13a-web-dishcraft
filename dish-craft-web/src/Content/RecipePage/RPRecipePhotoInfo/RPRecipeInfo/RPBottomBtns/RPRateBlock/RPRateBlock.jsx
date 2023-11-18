import s from './RPRateBlock.module.css';

const RPRateBlock = (props) => {

	return (
		<div className={s.rateBlock}>
			<div className={s.rateLabel}>Оценить</div>
			<img className={s.icon} src='/img/yellow-star.png' alt='Оценить' />
			<div className={s.rating}>{props.rating.value}</div>
			<div className={s.numRatings}>({props.rating.numRatings})</div>
		</div>
	);
}

export default RPRateBlock;