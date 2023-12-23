import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Recipes from './Content/Recipes/Recipes';
import RecipePage from './Content/RecipePage/RecipePage';
import Content from './Content/Content';
import Auth from './Auth/Auth';

const App = (props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/auth' element={<Auth />} />

				<Route path='/' element={<Content />} >
					<Route path='/' element={<Recipes recipesPage={props.state.recipesPage} dispatch={props.dispatch} />} />
					<Route path='/recipes' element={<Recipes recipesPage={props.state.recipesPage} dispatch={props.dispatch} />} />
					<Route path='/current-recipe' element={<RecipePage currentRecipePage={props.state.currentRecipePage} dispatch={props.dispatch} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
