import s from './RPFeature.module.css';

const RPFeature = (props) => {

	return (
		<div className={s.featureBlock}>
			<div className={s.name}>{props.name}</div>
			<div className={s.photoValueBlock}>
				<img className={s.featurePhoto} src={props.url} alt={props.alt} />
				<div className={s.value}>{props.value}</div>
			</div>
		</div>
	);
}

export default RPFeature;