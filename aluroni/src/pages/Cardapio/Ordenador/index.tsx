import style from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { SetStateAction, useState } from 'react'; 
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import React from 'react';
import { memo } from 'react';

interface Props{
    ordenador: string,
    setOrdenador: React.Dispatch<SetStateAction<string>>,
}

function Ordenador({ordenador, setOrdenador}: Props){
	const [aberto, setAberto] = useState(false);
	const nomeOrdenador = ordenador && opcoes.find((opcao) => opcao.value ===ordenador)?.nome;
	return(
		<button className={classNames({
			[style.ordenador]: true,
			[style['ordenador--ativo']]: ordenador !== '',
		})} onClick={() => setAberto(!aberto)} onBlur={() => setAberto(false)}>
			<span>{nomeOrdenador ||  'Ordenar Por'}</span>
			{aberto ? <MdKeyboardArrowDown size={20}/> : <MdKeyboardArrowUp size={20}/> }
			<div className={classNames({
				[style.ordenador__options]:true,
				[style['ordenador__options--ativo']]: aberto,
			})}>
				{opcoes.map((opcao) => (
					<div className={style.ordenador__option} key={opcao.value} onClick={() => setOrdenador(opcao.value)}>
						{opcao.nome}
					</div> 
				))}
			</div>
		</button>
	);
}

export default memo(Ordenador);