import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Recipes from './Recipes/Recipes';
import Navigation from './Navigation/Navigation';
import SearchEngine from './SearchEngine/SearchEngine';
import RecipePage from './RecipePage/RecipePage';

const App = () => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Navigation />
				<SearchEngine />

				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/' element={<Recipes />} />
						<Route path='/recipes' element={<Recipes />} />
						<Route path='/current-recipe' element={<RecipePage />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
