import s from './RPFeedback.module.css';
import RPRatingBar from './RPRatingBar/RPRatingBar';

const RPFeedback = (props) => {

	return (
		<div className={s.block}>
			<div className={s.innerBlock}>
				<div className={s.title}>Понравился рецепт?</div>
				<div className={s.saveBlock}>
					<div className={s.save}>Сохранить:</div>
					<div className={s.saveBtn}>В Избранное</div>
				</div>
				<div className={s.rateBlock}>
					<div className={s.rate}>Оценить:</div>
					<RPRatingBar />
					<div className={s.ratingValues}> | {props.ratingValue} ({props.numRatings})</div>
				</div>
			</div>
		</div>
	);
}

export default RPFeedback;