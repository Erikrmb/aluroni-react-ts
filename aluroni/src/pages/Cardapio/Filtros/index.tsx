import filtros from './filtros.json';
import style from './Filtros.module.scss';
import React from 'react';
import classNames from 'classnames';
import { memo } from 'react';

interface IOpcao{
    label: string;
    id: number;
}

interface Props{
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

function Filtros({filtro, setFiltro}: Props){
	function selecionarFiltro(opcao: IOpcao){
		if(filtro === opcao.id) return setFiltro(null);
		return setFiltro(opcao.id);
	}
	return <div className={style.filtros}>
		{filtros.map((opcao) => (
			<button className={classNames({
				[style.filtros__filtro]: true,
				[style['filtros__filtro--ativo']]: filtro === opcao.id
			})} 
			key={opcao.id} 
			onClick={() => selecionarFiltro(opcao)}>
				{opcao.label}
			</button>
		))}
	</div>;
}

export default memo(Filtros);