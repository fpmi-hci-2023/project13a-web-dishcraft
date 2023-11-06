import s from './User.module.css';

const User = (props) => {
	return (
		<div className={s.userBlock}>
			<div className={s.ava}>
				<img src={props.photoUrl} alt='Пользователь' />
			</div>
			<div className={s.name}>{props.userName}</div>
		</div>
	);
}

export default User;