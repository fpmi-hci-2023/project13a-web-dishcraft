import RPComment from './RPComment/RPComment';
import s from './RPCommentsBlock.module.css';

const RPCommentsBlock = (props) => {

	let commentsElements = props.comments.map(c => <RPComment authorPhotoUrl={c.authorPhotoUrl} author={c.user.username} date={c.commentDate} content={c.commentText} key={c.commentId} />);

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

			<div>
				{commentsElements}
			</div>
		</div>
	);
}

export default RPCommentsBlock;