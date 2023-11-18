import s from './RPComment.module.css';

const RPComment = (props) => {

	return (
		<div className={s.block}>
			<div className={s.authorPhoto}>
				<img src={props.authorPhotoUrl} alt='Пользователь' />
			</div>
			<div className={s.commentInfo}>
				<div className={s.authorDate}>
					<div className={s.author}>{props.author}</div>
					<div className={s.date}>{props.date}</div>
				</div>
				<div className={s.content}>{props.content}</div>
			</div>
		</div>
	);
}

export default RPComment;