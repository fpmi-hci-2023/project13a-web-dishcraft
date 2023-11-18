import RPCalorieBlock from './RPCalorieBlock/RPCalorieBlock';
import s from './RPCaloriesBlock.module.css';

const RPCaloriesBlock = (props) => {

	let attributesElements = props.attributes.map(a => <RPCalorieBlock name={a.name} value={a.value} unit={a.unit} key={a.id} />);

	return (
		<div className={s.attributes}>
			{attributesElements}
		</div>
	);
}

export default RPCaloriesBlock;