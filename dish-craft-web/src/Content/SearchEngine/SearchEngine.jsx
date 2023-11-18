import SearchArea from './SearchArea/SearchArea';
import SearchBtn from './SearchBtn/SearchBtn';
import s from './SearchEngine.module.css';

const SearchEngine = () => {
	return (
		<div className={s.searchEngine}>
			<SearchArea />
			<SearchBtn />
		</div>
	);
}

export default SearchEngine;