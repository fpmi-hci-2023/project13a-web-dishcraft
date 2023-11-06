import s from './RPCommentsBlock.module.css';

const RPCommentsBlock = (props) => {

	return (
		<div className={s.commentsBlock}>
			<div className={s.commentsLabel}>Комментарии</div>
			<img className={s.icon} src='/img/comments.png' alt='Комментарии' />
		</div>
	);
}

export default RPCommentsBlock;