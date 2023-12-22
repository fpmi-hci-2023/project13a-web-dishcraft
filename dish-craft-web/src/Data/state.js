const SET_RECIPES = 'SET-RECIPES';
const SET_CURRENT_RECIPE_ID = 'SET-CURRENT-RECIPE-ID';
const SET_CURRENT_RECIPE = 'SET-CURRENT-RECIPE';

let store = {

	_state: {

		recipesPage: {
			recipes: []
		},

		currentRecipePage: {
			currentRecipeId: -1,
			currentRecipe: {}
		}

	},

	_callSubscriber() {
		console.log("State changed");
	},

	_setRecipes(recipes) {
		this._state.recipesPage.recipes = recipes
		this._callSubscriber(this._state);
	},

	_setCurrentRecipeId(recipeId) {
		this._state.currentRecipePage.currentRecipeId = recipeId
		this._callSubscriber(this._state);
	},

	_setCurrentRecipe(recipe) {
		this._state.currentRecipePage.currentRecipe = recipe
		this._callSubscriber(this._state);
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === SET_RECIPES) {
			this._setRecipes(action.recipes)

		} else if (action.type === SET_CURRENT_RECIPE_ID) {
			debugger;
			this._setCurrentRecipeId(action.recipeId)

		} else if (action.type === SET_CURRENT_RECIPE) {
			this._setCurrentRecipe(action.recipe)
		}
	}
}

export const setRecipesActionCreator = (recipes) =>
	({ type: SET_RECIPES, recipes: recipes })

export const setCurrentRecipeIdActionCreator = (recipeId) =>
	({ type: SET_CURRENT_RECIPE_ID, recipeId: recipeId })

export const setCurrentRecipeActionCreator = (recipe) =>
	({ type: SET_CURRENT_RECIPE, recipe: recipe })

export default store;

window.store = store;