import s from './User.module.css';

const User = () => {
	return (
		<div className={s.userBlock}>
			<div className={s.ava}>
				<img src='https://i.pinimg.com/1200x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg' />
			</div>
			<div className={s.name}>User_1</div>
		</div>
	);
}

export default User;