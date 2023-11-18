import s from './RPAuthor.module.css';

const RPAuthor = (props) => {

	return (
		<div className={s.authorBlock}>
			<div className={s.photo} >
				<img src={props.author.photo} alt='Автор' />
			</div>
			<div className={s.name}>{props.author.name}</div>
		</div>
	);
}

export default RPAuthor;