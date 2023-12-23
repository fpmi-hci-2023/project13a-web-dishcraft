import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import SearchEngine from './SearchEngine/SearchEngine';
import s from './Content.module.css';

const Content = () => {
	return (
		<div className={s.appWrapper}>
				<Navigation />
				<SearchEngine />

				<div className={s.appWrapperContent}>
					<Outlet />
				</div>
			</div>
	);
}

export default Content;