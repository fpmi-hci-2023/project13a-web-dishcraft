import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Recipes from './Content/Recipes/Recipes';
import RecipePage from './Content/RecipePage/RecipePage';
import Content from './Content/Content';
import Auth from './Auth/Auth';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/auth' element={<Auth />} />

				<Route path='/' element={<Content />} >
					<Route path='/' element={<Recipes />} />
					<Route path='/recipes' element={<Recipes />} />
					<Route path='/current-recipe' element={<RecipePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
