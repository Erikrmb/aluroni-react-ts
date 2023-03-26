import React from 'react';
import style from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';
import { memo, useMemo } from 'react';

interface Props{
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}

function Buscador({busca, setBusca}: Props) {
	const iconeBuscador = useMemo(() => <CgSearch 
		size={20}
		color="#4C4D5E"
	/>, []);
	return <div className={style.buscador}>
		<input 
			value={busca}
			onChange={evento => setBusca(evento.target.value)}
			placeholder="Buscar"
		/>
		{iconeBuscador}
	</div>;
}

export default memo(Buscador);