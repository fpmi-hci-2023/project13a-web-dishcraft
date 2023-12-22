const SET_RECIPES = 'SET-RECIPES';
const SET_CURRENT_RECIPE_ID = 'SET-CURRENT-RECIPE-ID';
const SET_CURRENT_RECIPE = 'SET-CURRENT-RECIPE';
const SET_NUTRITIONAL_VALUE = 'SET-NUTRITIONAL-VALUE';
const SET_PRODUCTS = 'SET-PRODUCTS';
const SET_STEPS = 'SET-STEPS';
const SET_COMMENTS = 'SET-COMMENTS';

let store = {

	_state: {

		recipesPage: {
			recipes: []
		},

		currentRecipePage: {
			currentRecipeId: -1,
			currentRecipe: {
				"recipeId": 0,
				"recipeName": "",
				"description": "",
				"image": {},
				"cookingTimeMinutes": 0,
				"readyTimeMinutes": 0,
				"complexity": {
					"complexityId": 0,
					"complexityName": ""
				},
				"defaultPortionsNumber": 0,
				"user": {
					"id": 0,
					"username": "",
					"email": "",
					"roles": [
						{
							"id": 0,
							"name": "USER"
						}
					]
				},
				"rating": {
					value: 0,
					numRatings: 0
				}
			},
			nutritionalValue: {
				"calories": 0,
				"proteins": 0,
				"fats": 0,
				"carbohydrates": 0
			},
			products: [],
			steps: [],
			comments: []
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

	_setNutritionalValue(nutritionalValue) {
		this._state.currentRecipePage.nutritionalValue = nutritionalValue
		this._callSubscriber(this._state);
	},

	_setProducts(products) {
		this._state.currentRecipePage.products = products
		this._callSubscriber(this._state);
	},

	_setSteps(steps) {
		this._state.currentRecipePage.steps = steps
		this._callSubscriber(this._state);
	},

	_setComments(comments) {
		this._state.currentRecipePage.comments = comments
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
			this._setCurrentRecipeId(action.recipeId)

		} else if (action.type === SET_CURRENT_RECIPE) {
			this._setCurrentRecipe(action.recipe)

		} else if (action.type === SET_NUTRITIONAL_VALUE) {
			this._setNutritionalValue(action.nutritionalValue)

		} else if (action.type === SET_PRODUCTS) {
			this._setProducts(action.products)

		} else if (action.type === SET_STEPS) {
			this._setSteps(action.steps)

		} else if (action.type === SET_COMMENTS) {
			this._setComments(action.comments)

		}
	}
}

export const setRecipesActionCreator = (recipes) =>
	({ type: SET_RECIPES, recipes: recipes })

export const setCurrentRecipeIdActionCreator = (recipeId) =>
	({ type: SET_CURRENT_RECIPE_ID, recipeId: recipeId })

export const setCurrentRecipeActionCreator = (recipe) =>
	({ type: SET_CURRENT_RECIPE, recipe: recipe })

export const setNutritionalValueActionCreator = (nutritionalValue) =>
	({ type: SET_NUTRITIONAL_VALUE, nutritionalValue: nutritionalValue })

export const setProductsActionCreator = (products) =>
	({ type: SET_PRODUCTS, products: products })

export const setStepsActionCreator = (steps) =>
	({ type: SET_STEPS, steps: steps })

export const setCommentsActionCreator = (comments) =>
	({ type: SET_COMMENTS, comments: comments })

export default store;

window.store = store;