import s from './RPCommentsBlock.module.css';

const RPCommentsBlock = (props) => {

	return (
		<div className={s.block}>
			<div className={s.title}>Комментарии</div>
			<div className={s.leaveCommentBlock}>
				<div className={s.authorPhoto}>
					<img src={props.authorPhotoUrl} alt='Пользователь' />
				</div>
				<div className={s.inputBlock}>
					<span className={s.textarea} contentEditable='true'></span>
				</div>
			</div>
		</div>
	);
}

export default RPCommentsBlock;