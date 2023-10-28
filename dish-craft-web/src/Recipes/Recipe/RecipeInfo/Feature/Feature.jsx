import s from './Feature.module.css';

const Feature = (props) => {
	return (
		<div className={s.featureBlock}>
			<div className={s.img}>
				<img src={props.url} alt={props.alt} />
			</div>
			<div className={s.value}>{props.value}</div>
		</div>
	);
}

export default Feature;