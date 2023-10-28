import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Recipes from './Recipes/Recipes';
import Navigation from './Navigation/Navigation';
import SearchEngine from './SearchEngine/SearchEngine';

const App = () => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Navigation />
				<SearchEngine />
				<Recipes />
			</div>
		</BrowserRouter>
	);
}

export default App;
