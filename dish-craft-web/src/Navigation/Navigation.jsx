import BtnCreateRecipe from './BtnCreateRecipe/BtnCreateRecipe';
import s from './Navigation.module.css';
import NavItem from './NavItem/NavItem';
import User from './User/User';

const Navigation = () => {

	let nav = [
		{ id: 1, name: "Рецепты", link: "/recipes" },
		{ id: 2, name: "Мои рецепты", link: "/my-recipes" },
		{ id: 3, name: "Избранное", link: "/favourites" },
		{ id: 4, name: "Выйти", link: "/exit" }
	];

	let navElements = nav.map(n => <NavItem name={n.name} link={n.link} key={n.id} />);

	return (
		<div className={s.navigation}>
			<div className={s.title}>Мастерская Блюд</div>
			<User />
			<BtnCreateRecipe />
			<div className={s.nav}>
				{navElements}
			</div>
		</div>
	);
}

export default Navigation;