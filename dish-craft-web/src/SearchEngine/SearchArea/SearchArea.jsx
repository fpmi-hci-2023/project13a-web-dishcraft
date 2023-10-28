import s from './SearchArea.module.css';

const SearchArea = () => {
	return (
		<div className={s.searchArea}>
			<div className={s.findSign}></div>
			<div className={s.inputBlock}>
				<input className={s.input} placeholder="Название блюда" />
			</div>
			<div className={s.filterSign}></div>
		</div>
	);
}

export default SearchArea;