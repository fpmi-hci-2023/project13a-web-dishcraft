import Recipe from './Recipe/Recipe';
import s from './Recipes.module.css';

const Recipes = () => {

	let recipes = [
		{ id: 1, link: '/current-recipe', title: "Мусс с семенами чиа", url: "/img/recipe-photo.jpg", readyTime: "6 ч 15 мин", complexity: "Просто", calories: "120,43 кКал", description: "Мусс с семенами чиа — легкий и полезный десерт со свежими ягодами. Семена чиа нормализуют вес, помогают при диабете и болезнях сердца. В них много витаминов, минералов и других полезных веществ. Ягоды могут быть любые, например, малина, клубника или голубика." },
		{ id: 2, link: '/current-recipe', title: "Мусс с семенами чиа", url: "/img/recipe-photo.jpg", readyTime: "6 ч 15 мин", complexity: "Просто", calories: "120,43 кКал", description: "Мусс с семенами чиа — легкий и полезный десерт со свежими ягодами. Семена чиа нормализуют вес, помогают при диабете и болезнях сердца. В них много витаминов, минералов и других полезных веществ. Ягоды могут быть любые, например, малина, клубника или голубика." },
		{ id: 3, link: '/current-recipe', title: "Мусс с семенами чиа", url: "/img/recipe-photo.jpg", readyTime: "6 ч 15 мин", complexity: "Просто", calories: "120,43 кКал", description: "Мусс с семенами чиа — легкий и полезный десерт со свежими ягодами. Семена чиа нормализуют вес, помогают при диабете и болезнях сердца. В них много витаминов, минералов и других полезных веществ. Ягоды могут быть любые, например, малина, клубника или голубика." },
		{ id: 4, link: '/current-recipe', title: "Мусс с семенами чиа", url: "/img/recipe-photo.jpg", readyTime: "6 ч 15 мин", complexity: "Просто", calories: "120,43 кКал", description: "Мусс с семенами чиа — легкий и полезный десерт со свежими ягодами. Семена чиа нормализуют вес, помогают при диабете и болезнях сердца. В них много витаминов, минералов и других полезных веществ. Ягоды могут быть любые, например, малина, клубника или голубика." },
		{ id: 5, link: '/current-recipe', title: "Мусс с семенами чиа", url: "/img/recipe-photo.jpg", readyTime: "6 ч 15 мин", complexity: "Просто", calories: "120,43 кКал", description: "Мусс с семенами чиа — легкий и полезный десерт со свежими ягодами. Семена чиа нормализуют вес, помогают при диабете и болезнях сердца. В них много витаминов, минералов и других полезных веществ. Ягоды могут быть любые, например, малина, клубника или голубика." },
		{ id: 6, link: '/current-recipe', title: "Мусс с семенами чиа", url: "/img/recipe-photo.jpg", readyTime: "6 ч 15 мин", complexity: "Просто", calories: "120,43 кКал", description: "Мусс с семенами чиа — легкий и полезный десерт со свежими ягодами. Семена чиа нормализуют вес, помогают при диабете и болезнях сердца. В них много витаминов, минералов и других полезных веществ. Ягоды могут быть любые, например, малина, клубника или голубика." },
		{ id: 7, link: '/current-recipe', title: "Мусс с семенами чиа", url: "/img/recipe-photo.jpg", readyTime: "6 ч 15 мин", complexity: "Просто", calories: "120,43 кКал", description: "Мусс с семенами чиа — легкий и полезный десерт со свежими ягодами. Семена чиа нормализуют вес, помогают при диабете и болезнях сердца. В них много витаминов, минералов и других полезных веществ. Ягоды могут быть любые, например, малина, клубника или голубика." },
		{ id: 8, link: '/current-recipe', title: "Мусс с семенами чиа", url: "/img/recipe-photo.jpg", readyTime: "6 ч 15 мин", complexity: "Просто", calories: "120,43 кКал", description: "Мусс с семенами чиа — легкий и полезный десерт со свежими ягодами. Семена чиа нормализуют вес, помогают при диабете и болезнях сердца. В них много витаминов, минералов и других полезных веществ. Ягоды могут быть любые, например, малина, клубника или голубика." }
	];

	let recipesElements = recipes.map(r => <Recipe link={r.link} title={r.title} url={r.url} readyTime={r.readyTime} complexity={r.complexity} calories={r.calories} description={r.description} key={r.id} />);

	return (
		<div className={s.content}>
			<div className={s.title}>Рецепты</div>

			<div className={s.toggleBtnBlock}>
				<div className={s.switch}>
					<input type="checkbox" id="toggle" className={s.toggleInput} />
					<label htmlFor="toggle" className={s.toggleLabel}>
						<span className={s.leftLabel}>Новое</span>
						<span className={s.rightLabel}>Популярное</span>
					</label>
				</div>
			</div>

			<div className={s.recipes}>
				{recipesElements}
			</div>
		</div>
	);
}

export default Recipes;