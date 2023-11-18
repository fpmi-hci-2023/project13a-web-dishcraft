import s from './RPBottomBtns.module.css';
import RPCommentsBlock from './RPCommentsBlock/RPCommentsBlock';
import RPFavouriteBtn from './RPFavouriteBtn/RPFavouriteBtn';
import RPRateBlock from './RPRateBlock/RPRateBlock';

const RPBottomBtns = (props) => {

	return (
		<div className={s.btnsBlock}>
			<RPFavouriteBtn />
			<RPRateBlock rating={props.rating} />
			<RPCommentsBlock />
		</div>
	);
}

export default RPBottomBtns;