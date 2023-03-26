import style from './Item.module.scss';
import TagsPrato from 'components/TagsPrato';
import { Prato } from 'types/Prato';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';


function Item(props: Prato){
	const navigate = useNavigate();
	const { id, title, description, photo} = props;
	return(
		<div className={style.item} onClick={() => navigate(`/prato/${id}`)}>
			<div className={style.item__imagem}>
				<img src={photo} alt={title} />
			</div>
			<div className={style.item__descricao}>
				<div className={style.item__titulo}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
			</div>
			<TagsPrato {...props}></TagsPrato>
		</div>
	);
}

export default memo(Item);