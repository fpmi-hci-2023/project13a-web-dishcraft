import s from './RPRatingBar.module.css';

const RPRatingBar = () => {

	return (
		<div className={s.block}>
			<input type="radio" name="rating" />
			<input type="radio" name="rating" />
			<input type="radio" name="rating" />
			<input type="radio" name="rating" />
			<input type="radio" name="rating" />
		</div>
	);
}

export default RPRatingBar;